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
}

impl EvalResults {
    fn print(&self) {
        println!("[{}] Game end! Tick: {}, Score: {}  (times: avg {:.1}ms peak {:.1}ms)",
                 self.name, self.ticks, self.score,
                 self.average_tick().as_millis(), self.peak_tick().as_millis());
    }

    fn peak_tick(&self) -> Duration {
        *self.tick_times.iter().max().unwrap()
    }

    fn average_tick(&self) -> Duration {
        self.tick_times.iter().sum::<Duration>() / self.tick_times.len() as u32
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

fn evaluate_map(map: Map, show_progress: Option<usize>) -> EvalResults {
    println!("Evaluating map {}...", map.name);
    let mut bot = Bot { state: State::new(map.game) };
    let mut tick_times = Vec::new();
    while !bot.state.game_over {
        if show_progress.is_some_and(|n| bot.state.tick % n == 0) {
            println!("[{}] tick {}", map.name, bot.state.tick);
        }
        let time = Instant::now();
        bot.self_play_tick();
        tick_times.push(time.elapsed());
    }
    let results = EvalResults {
        name: map.name,
        ticks: bot.state.tick,
        score: bot.state.score(),
        tick_times,
    };
    results.print();
    results
}

fn main() {
    let cli = Cli::parse();
    let maps = load_eval_maps(cli.map_selection).expect("Error loading map");
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
        let (map, other_maps) = chunk_maps.split_first().unwrap();
        let other_handles: Vec<thread::JoinHandle<EvalResults>> = other_maps
            .into_iter().map(|map| {
                let map = map.clone();
                thread::spawn(move || { evaluate_map(map, cli.show_progress) })
            }).collect();
        results.push(evaluate_map(map.clone(), cli.show_progress));
        for handle in other_handles {
            results.push(handle.join().unwrap());
        }
    }
    if results.len() > 1 {
        let mut summary_scores: Vec<usize> = Vec::new();
        println!("[SUMMARY]");
        for (name, mut results) in &results.iter()
            .sorted_by(|a, b| a.name.cmp(&b.name)).chunk_by(|r| &r.name) {
            // TODO: Support multiple per-map runs (multiple samples)
            let result = results.next().unwrap();
            assert!(results.next().is_none());
            println!("[{}]: Score {}", name, result.score);
            summary_scores.push(result.score);
        }
        // Show per-map scores in one simple aggregate line, for quick
        // reporting.
        println!("Final scores:");
        println!("{:?}", summary_scores);
    }
}
