use std::thread;
use std::time::{Duration, Instant};
use itertools::Itertools;

use clap::Parser;
use num_traits::AsPrimitive;
use rand::seq::SliceRandom;

use devnull_bot::map_loader;
use devnull_bot::map_loader::{list_map_names, load_map, Map};
use devnull_bot::search::{Bot, BotName};
use devnull_bot::simulation::{State};

#[derive(Debug, Parser)]
#[clap(name = "devnull")]
struct Cli {
    #[clap(flatten)]
    map_selection: MapSelectionArgGroup,
    #[arg(short, long, help = "Parallel evals. Warning: excessive parallelism can hurt search and underestimate scores.")]
    parallelism: Option<usize>,
    #[arg(long, help = "Print the tick number very N ticks, configured by this argument.")]
    show_progress: Option<usize>,
    #[arg(long, help = "How many times to re-run each map, to average scores.")]
    samples: Option<usize>,
    #[arg(long, help = "Force this seed for all evaluations. If unset, pick based on run index.")]
    seed: Option<u64>,
    #[clap(flatten)]
    bot_selection: BotSelectionArgGroup,
}

#[derive(Debug, clap::Args)]
#[group(multiple = false)]
struct MapSelectionArgGroup {
    #[clap(short, long)]
    all: bool,
    #[clap(long = "map")]
    map_name: Option<String>,
}

#[derive(Debug, clap::Args)]
#[group(multiple = false)]
struct BotSelectionArgGroup {
    #[arg(long, help = "Bot to evaluate. If unset, uses the best known algorithm.")]
    bot: Option<BotName>,
    #[clap(flatten)]
    battle: Option<BotBattleArgGroup>,
}

#[derive(Debug, clap::Args)]
struct BotBattleArgGroup {
    #[clap(long, help = "Bot to compare to 'right'.", requires = "right")]
    left: Option<BotName>,
    #[clap(long, help = "Bot to compare to 'left'.", requires = "left")]
    right: Option<BotName>,
}

fn median<T: std::cmp::Ord + AsPrimitive<f32>>(mut values: Vec<T>) -> f32 {
    values.sort();
    let mid = values.len() / 2;
    if values.len() % 2 == 0 {
        (values[mid].as_() + values[mid + 1].as_()) / 2.0
    } else {
        values[mid].as_()
    }
}

/// What type of eval are we running.
#[derive(Clone)]
enum EvalType {
    Solo { name: Option<BotName> },
    Battle { left: BotName, right: BotName },
}

#[derive(Clone, Debug, PartialEq, Copy)]
enum Winner {
    Left,
    Right,
    Tie,
}

/// Eval we are planning to run.
#[derive(Clone)]
struct EvalPlan {
    map: Map,
    show_progress: Option<usize>,
    eval: EvalType,
}

#[derive(Clone)]
struct EvalInfo {
    name: String,
    ticks: usize,
    eval: EvalType,
}

#[derive(Clone)]
enum EvalResults {
    Solo {
        info: EvalInfo,
        score: usize,
        avg_tick_ms: f32,
        peak_tick_ms: f32,
        median_num_evals: f32,
    },
    Battle {
        info: EvalInfo,
        winner: Winner,
    }
}

impl EvalResults {
    fn new_solo_results(info: EvalInfo, score: usize, tick_times: Vec<Duration>,
                        num_evals: Vec<usize>) -> Self {
        let avg_ticks = tick_times.iter().sum::<Duration>() / tick_times.len() as u32;
        let peak_ticks = tick_times.iter().max().unwrap();
        Self::Solo {
            info,
            score,
            avg_tick_ms: avg_ticks.as_millis() as f32,
            peak_tick_ms: peak_ticks.as_millis() as f32,
            median_num_evals: median(num_evals),
        }
    }
    fn new_battle_results(info: EvalInfo, winner: Winner) -> Self {
        Self::Battle { info, winner }
    }
    fn print(&self) {
        match self {
            Self::Solo { info, score, avg_tick_ms, peak_tick_ms, median_num_evals } => {
                println!("[{}] Game end! Tick: {}, Score: {}  (times: avg {:.1}ms peak {:.1}ms) (evals median: {:.1})",
                         info.name, info.ticks, score, avg_tick_ms,
                         peak_tick_ms, median_num_evals);
            },
            Self::Battle { info, winner } => {
                println!("[{}] Game end! Tick: {}, winner: {:?}",
                         info.name, info.ticks, winner);
            },
        }
    }
    fn name(&self) -> &String {
        match self {
            Self::Solo { info, .. } => &info.name,
            Self::Battle { info, .. } => &info.name,
        }
    }
}

fn load_eval_maps(selection: MapSelectionArgGroup) -> map_loader::Result<Vec<Map>> {
    let map_names = list_map_names()?;
    if selection.all {
        return map_names.into_iter().map(|name| load_map(&name)).collect()
    }
    let name = selection.map_name.or_else(|| {
        map_names.choose(&mut rand::thread_rng()).cloned()
    }).expect("no maps loaded");
    Ok(vec![load_map(&name)?])
}

fn evaluate_map(plan: EvalPlan, seed: u64) -> EvalResults {
    println!("Evaluating map {}...", plan.map.name);
    let state = State::new(plan.map.game);
    let mut bots = vec![];
    match &plan.eval {
        EvalType::Solo { name } => {
            bots.push(if let Some(name) = name {
                Bot::new(state, seed, name.clone())
            } else {
                Bot::new_best(state, seed)
            });
        },
        EvalType::Battle { left, right } => {
            bots.push(Bot::new(state.clone(), seed, left.clone()));
            bots.push(Bot::new(state, seed, right.clone()));
        }
    }
    assert!(bots.len() <= 2, "only support 1 or 2 bots, early exits on first fail");
    let mut tick_times = Vec::new();
    let mut num_evals = Vec::new();
    while bots.iter().all(|bot| !bot.state.game_over) {
        for bot in &mut bots {
            if plan.show_progress.is_some_and(|n| bot.state.tick % n == 0) {
                println!("[{:?}][{}] tick {}", bot.name, plan.map.name,
                         bot.state.tick);
            }
            let time = Instant::now();
            let stats = bot.self_play_tick();
            tick_times.push(time.elapsed());
            num_evals.push(stats.num_evals);
        }
    }
    let ticks = bots.iter().map(|bot| bot.state.tick).min().unwrap();
    let info = EvalInfo { name: plan.map.name, ticks, eval: plan.eval };
    let results = match info.eval {
        EvalType::Solo { .. } => EvalResults::new_solo_results(
            info, bots[0].state.score(), tick_times, num_evals),
        EvalType::Battle { .. } => {
            assert_eq!(bots.len(), 2);
            let [ref left, ref right] = bots[..] else { panic!("battle requires 2 bots") };
            let winner = match left.state.tick.cmp(&right.state.tick) {
                std::cmp::Ordering::Less => Winner::Right,
                std::cmp::Ordering::Equal => Winner::Tie,
                std::cmp::Ordering::Greater => Winner::Left,
            };
            EvalResults::new_battle_results(info, winner)
        },
    };
    results.print();
    results
}

/// Plan what evals to run (how many repeats, what bots, etc.).
fn plan_evals(eval_type: EvalType, num_samples: usize, loaded_maps: &Vec<Map>,
              show_progress_every_n: Option<usize>) -> Vec<EvalPlan> {
    loaded_maps.into_iter()
        .flat_map(|map| std::iter::repeat(map).take(num_samples))
        .map(|map| {
            EvalPlan {
                eval: eval_type.clone(),
                map: map.clone(),
                show_progress: show_progress_every_n,
            }
        }).collect()
}

/// Run the targeted evals with the appropriate parallelism.
fn run_evals(eval_plans: Vec<EvalPlan>, parallelism: usize,
             fixed_seed: Option<u64>) -> Vec<EvalResults> {
    let mut results = Vec::new();
    for (chunk_idx, chunk_evals) in eval_plans.chunks(parallelism).enumerate() {
        let index = chunk_idx * parallelism;
        let main_seed = index;
        let (main_eval, other_evals) = chunk_evals.split_first().unwrap();
        let other_handles: Vec<thread::JoinHandle<EvalResults>> = other_evals
            .into_iter().enumerate().map(|(i, plan)| {
                let plan = plan.clone();
                let seed = fixed_seed.unwrap_or((main_seed + 1 + i) as u64);
                thread::spawn(move || { evaluate_map(plan, seed) })
            }).collect();
        let seed = fixed_seed.unwrap_or(main_seed as u64);
        results.push(evaluate_map(main_eval.clone(), seed));
        for handle in other_handles {
            results.push(handle.join().unwrap());
        }
    }
    results
}

/// Aggregated per-map results for an eval type.
/// Note: only some fields are set, depending on eval type.
struct SummaryResults {
    // Solo evals
    scores: Vec<usize>,
    // Battle evals
    left_wins: usize,
    right_wins: usize,
    ties: usize,
}

fn show_results(eval: EvalType, results: Vec<EvalResults>) {
    if results.len() > 1 {  // Don't show summary for single evals
        let mut summary_results = SummaryResults {
            scores: Vec::new(), left_wins: 0, right_wins: 0, ties: 0,
        };
        println!("\n\n[SUMMARY]");
        for (name, results) in &results.iter()
            .sorted_by(|a, b| a.name().cmp(&b.name())).chunk_by(|r| r.name()) {
            let map_results = results.cloned().collect();
            show_map_results(eval.clone(), name, map_results, &mut summary_results);
        }
        show_summary_results(eval, summary_results);
    }
}

fn show_map_results(eval: EvalType, map_name: &String,
                    map_results: Vec<EvalResults>, summary: &mut SummaryResults) {
    match eval {
        EvalType::Solo { .. } => {
            let map_scores: Vec<usize> = map_results.iter().map(|r| {
                match r {
                    &EvalResults::Solo { score, .. } => score,
                    _ => panic!("wrong results for eval type solo"),
                }}).collect();
            let score_sum = map_scores.iter().sum::<usize>();
            let score_avg = score_sum as f32 / map_scores.len() as f32;
            if map_scores.len() > 1 {
                println!("[{}]: Score {:.1}  (min: {}, max: {})", map_name,
                         score_avg, map_scores.iter().min().unwrap(),
                         map_scores.iter().max().unwrap());
            } else {
                assert!(map_scores.len() == 1);
                println!("[{}]: Score {}", map_name, map_scores[0]);
            }
            summary.scores.push(score_avg.round() as usize);
        },
        EvalType::Battle { left, right } => {
            let map_winners: Vec<Winner> = map_results.iter().map(|r| {
                match r {
                    &EvalResults::Battle { winner, .. } => winner,
                    _ => panic!("wrong results for eval type battle"),
                }}).collect();
            if map_winners.len() == 1 {
                let message = match map_winners[0] {
                    Winner::Left => format!("{:?} won", left),
                    Winner::Tie => "tie".to_string(),
                    Winner::Right => format!("{:?} won", right),
                };
                println!("[{}]: {} ", map_name, message);
            } else {
                let left_wins = map_winners.iter()
                    .filter(|&&w| w == Winner::Left).count();
                let right_wins = map_winners.iter()
                    .filter(|&&w| w == Winner::Right).count();
                let ties = map_winners.len() - left_wins - right_wins;
                println!("[{}]: {} {:?} wins, {} ties, {} {:?} wins", map_name,
                         left_wins, left, ties, right_wins, right);
                // TODO: Compute statistical significance
                summary.left_wins += left_wins;
                summary.right_wins += right_wins;
                summary.ties += ties;
            }
        },
    }
}

fn show_summary_results(eval: EvalType, summary: SummaryResults) {
    match eval {
        EvalType::Solo { .. } => {
            println!("Min score: {}", summary.scores.iter().min().unwrap());
            println!("Max score: {}", summary.scores.iter().max().unwrap());
            let score_sum = summary.scores.iter().sum::<usize>();
            let score_avg = score_sum as f32 / summary.scores.len() as f32;
            println!("Avg score: {:.1}", score_avg);
            // Show per-map scores in one simple aggregate line, for quick
            // reporting.
            println!("Per map scores:");
            println!("{:?}", summary.scores);
        },
        EvalType::Battle { left, right } => {
            println!("{:?}: {} wins, ties: {}, {:?}: {} wins", left,
                     summary.left_wins, summary.ties, right, summary.right_wins);
            // TODO: Compute statistical significance
        },
    }
}

fn main() {
    let cli = Cli::parse();
    let repeats = cli.samples.unwrap_or(1);
    let parallelism = cli.parallelism.unwrap_or(1);
    // Detect potentially excessive parallelism and warn user.
    let cpus = num_cpus::get_physical();
    if parallelism + 1 >= cpus {  // +1 assuming user has other stuff running
        println!(concat!("[WARNING] Running with parallelism {}, but detected ",
                         "{} physical cores. Search budget might ",
                         "unrealistically be reduced and underestimate scores."),
                 parallelism, cpus);
    }
    let fixed_seed = cli.seed;
    let show_progress = cli.show_progress;
    let eval_type = if let Some(battle) = cli.bot_selection.battle {
        EvalType::Battle {
            left: battle.left.expect("missing left"),
            right: battle.right.expect("missing right"),
        }
    } else {
        EvalType::Solo { name: cli.bot_selection.bot }
    };

    let maps = load_eval_maps(cli.map_selection).expect("Error loading map");
    let evals = plan_evals(eval_type.clone(), repeats, &maps, show_progress);
    let results = run_evals(evals, parallelism, fixed_seed);
    show_results(eval_type, results);
}
