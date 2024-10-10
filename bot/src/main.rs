use std::thread;

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
}

#[derive(Debug, clap::Args)]
#[group(multiple = false)]
struct MapSelectionArgGroup {
    #[clap(short, long)]
    all: bool,
    #[clap(long = "map")]
    map_name: Option<String>,
}

// TODO: ticks, score, time per tick stats, peak tick time
struct EvalResults {
    ticks: usize,
    score: usize,
    // TODO: time per tick stats
    // TODO: peak tick time
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

fn evaluate_map(map: Map) -> EvalResults {
    println!("Evaluating map {}...", map.name);
    let mut bot = Bot { state: State::new(map.game) };
    while !bot.state.game_over {
        if bot.state.tick % 100 == 0 {
            println!("[{}] tick {}", map.name, bot.state.tick);
        }
        bot.self_play_tick();
    }
    println!("[{}] Game end! Tick: {}, Score: {}", map.name, bot.state.tick,
             bot.state.score());
    EvalResults {
        ticks: bot.state.tick,
        score: bot.state.score(),
    }
}

fn main() {
    let cli = Cli::parse();
    let maps = load_eval_maps(cli.map_selection).expect("Error loading map");
    let mut _results = Vec::new();
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
                thread::spawn(move || { evaluate_map(map) })
            }).collect();
        _results.push(evaluate_map(map.clone()));
        for handle in other_handles {
            _results.push(handle.join().unwrap());
        }
    }
    // TODO: Show aggregated stats when results.len() > 1
}
