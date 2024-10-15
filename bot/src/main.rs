use std::thread;
use itertools::Itertools;
use std::time::{Duration, Instant};

use clap::Parser;
use rand::seq::SliceRandom;

use devnull_bot::map_loader;
use devnull_bot::map_loader::{list_map_names, load_map, Map};
use devnull_bot::search::{Bot};
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
}

#[derive(Debug, clap::Args)]
#[group(multiple = false)]
struct MapSelectionArgGroup {
    #[clap(short, long)]
    all: bool,
    #[clap(long = "map")]
    map_name: Option<String>,
}

struct EvalResults {
    name: String,
    ticks: usize,
    score: usize,
    tick_times: Vec<Duration>,
    num_evals: Vec<usize>,
}

impl EvalResults {
    fn print(&self) {
        println!("[{}] Game end! Tick: {}, Score: {}  (times: avg {:.1}ms peak {:.1}ms) (evals: avg {:.1})",
                 self.name, self.ticks, self.score,
                 self.average_tick().as_millis(), self.peak_tick().as_millis(),
                 self.average_num_evals());
    }

    fn peak_tick(&self) -> Duration {
        *self.tick_times.iter().max().unwrap()
    }

    fn average_tick(&self) -> Duration {
        self.tick_times.iter().sum::<Duration>() / self.tick_times.len() as u32
    }

    fn average_num_evals(&self) -> f32 {
        // TODO: Show median instead
        self.num_evals.iter().sum::<usize>() as f32 / self.num_evals.len() as f32
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

fn evaluate_map(map: Map, show_progress: Option<usize>, seed: u64) -> EvalResults {
    println!("Evaluating map {}...", map.name);
    let mut bot = Bot { state: State::new(map.game), seed };
    let mut tick_times = Vec::new();
    let mut num_evals = Vec::new();
    while !bot.state.game_over {
        if show_progress.is_some_and(|n| bot.state.tick % n == 0) {
            println!("[{}] tick {}", map.name, bot.state.tick);
        }
        let time = Instant::now();
        let stats = bot.self_play_tick();
        tick_times.push(time.elapsed());
        num_evals.push(stats.num_evals);
    }
    let results = EvalResults {
        name: map.name,
        ticks: bot.state.tick,
        score: bot.state.score(),
        tick_times,
        num_evals,
    };
    results.print();
    results
}

fn main() {
    let cli = Cli::parse();
    let maps = load_eval_maps(cli.map_selection).expect("Error loading map");
    let repeats = cli.samples.unwrap_or(1);
    let maps: Vec<Map> = maps.into_iter()
        .flat_map(|map| std::iter::repeat(map).take(repeats))
        .collect();
    let mut results = Vec::new();
    let parallelism = cli.parallelism.unwrap_or(1);
    let cpus = num_cpus::get_physical();
    if parallelism + 1 >= cpus {  // +1 assuming user has other stuff running
        println!(concat!("[WARNING] Running with parallelism {}, but detected ",
                         "{} physical cores. Search budget might ",
                         "unrealistically be reduced and underestimate scores."),
                 parallelism, cpus);
    }
    for chunk_maps in maps.chunks(parallelism) {
        let main_seed = 0;
        let (map, other_maps) = chunk_maps.split_first().unwrap();
        let other_handles: Vec<thread::JoinHandle<EvalResults>> = other_maps
            .into_iter().enumerate().map(|(i, map)| {
                let map = map.clone();
                let seed = (main_seed + 1 + i) as u64;
                thread::spawn(move || { evaluate_map(map, cli.show_progress, seed) })
            }).collect();
        results.push(evaluate_map(map.clone(), cli.show_progress, main_seed as u64));
        for handle in other_handles {
            results.push(handle.join().unwrap());
        }
    }
    if results.len() > 1 {
        let mut summary_scores: Vec<usize> = Vec::new();
        println!("\n\n[SUMMARY]");
        for (name, results) in &results.iter()
            .sorted_by(|a, b| a.name.cmp(&b.name)).chunk_by(|r| &r.name) {
            let map_scores: Vec<usize> = results.map(|r| r.score).collect();
            let score_sum = map_scores.iter().sum::<usize>();
            let score_avg = score_sum as f32 / map_scores.len() as f32;
            if map_scores.len() > 1 {
                println!("[{}]: Score {:.1}  (min: {}, max: {})", name,
                         score_avg, map_scores.iter().min().unwrap(),
                         map_scores.iter().max().unwrap());
            } else {
                assert!(map_scores.len() == 1);
                println!("[{}]: Score {}", name, map_scores[0]);
            }
            summary_scores.push(score_avg.round() as usize);
        }
        println!("Min score: {}", summary_scores.iter().min().unwrap());
        println!("Max score: {}", summary_scores.iter().max().unwrap());
        let score_sum = summary_scores.iter().sum::<usize>();
        let score_avg = score_sum as f32 / summary_scores.len() as f32;
        println!("Avg score: {:.1}", score_avg);
        // Show per-map scores in one simple aggregate line, for quick
        // reporting.
        println!("Per map scores:");
        println!("{:?}", summary_scores);
    }
}
