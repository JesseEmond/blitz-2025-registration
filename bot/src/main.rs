use std::thread;
use std::time::{Duration, Instant};
use itertools::Itertools;

use clap::Parser;
use num_traits::AsPrimitive;
use rand::seq::SliceRandom;
use statrs::distribution::{Binomial, Discrete};

use devnull_bot::map_loader;
use devnull_bot::map_loader::{list_map_names, load_map, Map};
use devnull_bot::mcts::Score;
use devnull_bot::search::{Bot, BotName};
use devnull_bot::simulation::{GameOptions, GameOverCheck, State};

#[derive(Debug, Parser)]
#[clap(name = "devnull")]
struct Cli {
    #[clap(flatten)]
    map_selection: MapSelectionArgGroup,
    #[arg(short, long, help = "Parallel evals. Warning: excessive parallelism can hurt search and underestimate scores.")]
    parallelism: Option<usize>,
    #[arg(long, help = "Print the tick number very N ticks, configured by this argument.")]
    show_progress: Option<usize>,
    #[arg(long, help = "Print when a new best outcome score is found.")]
    show_new_best_outcome: bool,
    #[arg(long, default_value_t = true,
          help = "If we're allowed to jump over enemies on a single tick (for real game, this is true).")]
    allow_jump_over: std::primitive::bool,
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
    show_new_best_outcome: bool,
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

fn evaluate_map(plan: EvalPlan, seed: u64,
                game_options: &GameOptions) -> EvalResults {
    println!("Evaluating map {}...", plan.map.name);
    let state = State::new_custom(plan.map.game, game_options.clone());
    let mut bots = vec![];
    let is_battle = match &plan.eval {
        EvalType::Solo { name } => {
            bots.push(if let Some(name) = name {
                Bot::new(state, seed, name.clone())
            } else {
                Bot::new_best(state, seed)
            });
            false
        },
        EvalType::Battle { left, right } => {
            bots.push(Bot::new(state.clone(), seed, left.clone()));
            bots.push(Bot::new(state, seed, right.clone()));
            true
        }
    };
    assert!(bots.len() <= 2, "only support 1 or 2 bots, early exits on first fail");
    let mut tick_times = Vec::new();
    let mut num_evals = Vec::new();
    let mut best_outcome_seen = vec![Score::MIN; bots.len()];
    let mut is_win = vec![false; bots.len()];
    while bots.iter().all(|bot| !bot.algorithm.state.game_over) &&
        (!is_battle || is_win.iter().all(|w| !w)) {
        for (i, bot) in bots.iter_mut().enumerate() {
            if plan.show_progress.is_some_and(|n| bot.algorithm.state.tick % n == 0) {
                println!("[{:?}][{}] tick {}", bot.name, plan.map.name,
                         bot.algorithm.state.tick);
            }
            let time = Instant::now();
            let results = bot.self_play_tick();

            is_win[i] = results.is_win;
            let stats = results.stats;
            if plan.show_new_best_outcome && stats.highest_score_seen > best_outcome_seen[i] {
                best_outcome_seen[i] = stats.highest_score_seen;
                println!("[{:?}][{}] new best: {}", bot.name, plan.map.name,
                         best_outcome_seen[i]);
            }
            tick_times.push(time.elapsed());
            num_evals.push(stats.num_evals);
        }
    }
    let ticks = bots.iter().map(|bot| bot.algorithm.state.tick).min().unwrap();
    let info = EvalInfo { name: plan.map.name, ticks, eval: plan.eval };
    let results = match info.eval {
        EvalType::Solo { .. } => EvalResults::new_solo_results(
            info, bots[0].algorithm.state.score(), tick_times, num_evals),
        EvalType::Battle { .. } => {
            assert_eq!(bots.len(), 2);
            let [ref left, ref right] = bots[..] else { panic!("battle requires 2 bots") };
            let [left_win, right_win] = is_win[..] else { panic!("battle requires 2 bots") };
            let winner = if left_win || right_win {
                match (left_win, right_win) {
                    (false, true) => Winner::Right,
                    (true, false) => Winner::Left,
                    (true, true) => Winner::Tie,
                    _ => unreachable!(),
                }
            } else {
                match left.algorithm.state.tick.cmp(&right.algorithm.state.tick) {
                    std::cmp::Ordering::Less => Winner::Right,
                    std::cmp::Ordering::Equal => Winner::Tie,
                    std::cmp::Ordering::Greater => Winner::Left,
                }
            };
            EvalResults::new_battle_results(info, winner)
        },
    };
    results.print();
    results
}

/// Plan what evals to run (how many repeats, what bots, etc.).
fn plan_evals(eval_type: EvalType, num_samples: usize, loaded_maps: &Vec<Map>,
              show_progress_every_n: Option<usize>,
              show_new_best_outcome: bool) -> Vec<EvalPlan> {
    loaded_maps.into_iter()
        .flat_map(|map| std::iter::repeat(map).take(num_samples))
        .map(|map| {
            EvalPlan {
                eval: eval_type.clone(),
                map: map.clone(),
                show_progress: show_progress_every_n,
                show_new_best_outcome,
            }
        }).collect()
}

/// Run the targeted evals with the appropriate parallelism.
fn run_evals(eval_plans: Vec<EvalPlan>, parallelism: usize,
             fixed_seed: Option<u64>, game_options: &GameOptions) -> Vec<EvalResults> {
    let chunk_size = (eval_plans.len() as f32 / parallelism as f32).ceil() as usize;
    let chunks = eval_plans.chunks(chunk_size);
    thread::scope(|s| {
        let mut handles = Vec::new();
        for (chunk_idx, chunk_evals) in chunks.enumerate() {
            let base_index = chunk_idx * chunk_size;
            handles.push(s.spawn(move || {
                let mut results = Vec::new();
                for (i, plan) in chunk_evals.into_iter().enumerate() {
                    let seed = fixed_seed.unwrap_or((base_index + i) as u64);
                    results.push(evaluate_map(plan.clone(), seed, game_options));
                }
                results
            }));
        }
        let mut results = Vec::new();
        for handle in handles {
            results.extend(handle.join().unwrap());
        }
        results
    })
}

/// Perform a sign test of wins/losses(/ties, ignored) to determine statistical
/// significance of observed wins/losses between two versions.
fn compute_p_value(left_wins: usize, ties: usize, right_wins: usize) -> f64 {
    let n = (left_wins + right_wins) as u64;
    if n == 0 {
        assert!(ties > 0);
        return 1.0;  // All ties, no significant difference between them.
    }
    // Perform a two-sided binomial test over the null hypothesis of both having
    // a 50/50 chance of winning.
    let binomial = Binomial::new(0.5, n).unwrap();
    let k = right_wins as u64;  // arbitrarily treat 'right' wins as successes
    let prob_k = binomial.pmf(k);
    // Similar to scipy, tolerate some floating point relative error:
    // https://github.com/scipy/scipy/blob/v1.14.1/scipy/stats/_binomtest.py#L305
    const RELATIVE_ERROR: f64 = 1.0 + 1e-7;
    let mut p_value = prob_k;
    p_value += (0..k).map(|i| binomial.pmf(i))
        .filter(|&prob_i| prob_i <= prob_k * RELATIVE_ERROR).sum::<f64>();
    p_value += ((k+1)..=n).map(|i| binomial.pmf(i))
        .filter(|&prob_i| prob_i <= prob_k * RELATIVE_ERROR).sum::<f64>();
    p_value
}

/// Qualify the statistical significance of left/right wins/losses/ties, in
/// natural language.
fn qualify_significance(left_wins: usize, ties: usize, right_wins: usize,
                        left: BotName, right: BotName) -> String {
    const ALPHA: f64 = 0.05;  // False positives accepted
    let p_value = compute_p_value(left_wins, ties, right_wins);
    if p_value <= ALPHA {
        if left_wins > right_wins {
            format!("{:?} better than {:?} (p-value={:.3})", left, right, p_value)
        } else {
            format!("{:?} better than {:?} (p-value={:.3})", right, left, p_value)
        }
    } else {
        format!("not significant (p-value={:.3})", p_value)
    }
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
                let significance = qualify_significance(
                    left_wins, ties, right_wins, left, right);
                println!("[{}]: {} {:?} wins, {} ties, {} {:?} wins -- {}",
                         map_name, left_wins, left, ties, right_wins, right,
                         significance);
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
            let significance = qualify_significance(
                summary.left_wins, summary.ties, summary.right_wins, left,
                right);
            println!("{:?}: {} wins, ties: {}, {:?}: {} wins -- {}", left,
                     summary.left_wins, summary.ties, right, summary.right_wins,
                     significance);
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
    let show_new_best_outcome = cli.show_new_best_outcome;
    let eval_type = if let Some(battle) = cli.bot_selection.battle {
        EvalType::Battle {
            left: battle.left.expect("missing left"),
            right: battle.right.expect("missing right"),
        }
    } else {
        EvalType::Solo { name: cli.bot_selection.bot }
    };
    let mut game_options = GameOptions::default();
    if cli.allow_jump_over {
        // Ensure our default CLI flag value matches the default game setup.
        assert!(matches!(game_options.game_over, GameOverCheck::StartOfTick));
    } else {
        game_options.game_over = GameOverCheck::StartOfTickAndAfterPlayerMove;
    }

    let maps = load_eval_maps(cli.map_selection).expect("Error loading map");
    let evals = plan_evals(eval_type.clone(), repeats, &maps, show_progress,
                           show_new_best_outcome);
    let results = run_evals(evals, parallelism, fixed_seed, &game_options);
    show_results(eval_type, results);
}
