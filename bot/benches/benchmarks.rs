use criterion::{black_box, criterion_group, criterion_main, Criterion};
use pprof::criterion::{Output, PProfProfiler};

use devnull_bot::grid::{make_grid, Pos};
use devnull_bot::mcts;
use devnull_bot::pathfinding::{FastAggressivePathfinder, Pathfinder, PathfindingGrid};
use devnull_bot::search;
use devnull_bot::simulation;
use devnull_bot::simulation::Style;

struct MCTS;
impl mcts::MCTS for MCTS {
    type ActionSpace = search::ActionSpace;
    type Action = search::Action;
    type State = simulation::State;
    type Evaluator = search::ThreatsAreFarEval;
    type Budget = mcts::EvalCallsBudget;
    type RolloutPolicy = mcts::RandomPolicy;
}

pub fn criterion_benchmark(c: &mut Criterion) {
    let grid = make_grid(vec![
        "######################",
        "#                    #",
        "# ########  ######## #",
        "# #                # #",
        "# #### ###  # #### # #",
        "# ####      # #### # #",
        "# #### ###  # #### # #",
        "#           # #      #",
        "# #### ###  # # #### #",
        "# #  #      # # #  # #",
        "# #    ###  # #    # #",
        "# #                # #",
        "# ########  ######## #",
        "#                    #",
        "######################",
    ]);
    c.bench_function("get_aggressive_path 22x15 far", |b| {
        b.iter(|| {
            let mut pathfinder = FastAggressivePathfinder::new(black_box(&grid));
            pathfinder.pathfind(
                black_box(&grid), black_box(&Pos { x: 5, y: 1 }),
                black_box(&Some(Pos { x: 18, y: 13 })))
        });
    });
    c.bench_function("get_aggressive_path 22x15 close", |b| {
        b.iter(|| {
            let mut pathfinder = FastAggressivePathfinder::new(black_box(&grid));
            pathfinder.pathfind(
                black_box(&grid), black_box(&Pos { x: 5, y: 1 }),
                black_box(&Some(Pos { x: 9, y: 1 })))
        });
    });
    c.bench_function("PathfindingGrid 22x15 creation", |b| {
        b.iter(|| PathfindingGrid::new(black_box(grid.clone())));
    });
    c.bench_function("sampling_algorithm 22x15 1000 evals", |b| {
        let game = simulation::Game {
            tick: 1,
            pos: Pos { x: 15, y: 8 },
            alive: true,
            grid: grid.clone(),
            threats: vec![
                simulation::Threat::spawn(Pos { x: 15, y: 9 }, Style::Hawk),
                simulation::Threat::spawn(Pos { x: 15, y: 10 }, Style::Owl),
                simulation::Threat::spawn(Pos { x: 1, y: 1 }, Style::Deer),
                simulation::Threat::spawn(Pos { x: 1, y: 12 }, Style::Shark),
                simulation::Threat::spawn(Pos { x: 5, y: 7 }, Style::Hawk),
                simulation::Threat::spawn(Pos { x: 8, y: 11 }, Style::Hawk),
            ],
        };
        let state = simulation::State::new(game);
        b.iter(|| {
            let params = mcts::SearchParams::<MCTS>::new(
                mcts::EvalCallsBudget { max_evals: 1000 },
                search::ThreatsAreFarEval {},
                /*seed=*/42);
            let mut algorithm = mcts::sampling_algorithm(black_box(params), black_box(state.clone()));
            algorithm.search()
        });
    });
    c.bench_function("uct_algorithm 22x15 100 iter 1000 evals", |b| {
        let game = simulation::Game {
            tick: 1,
            pos: Pos { x: 15, y: 8 },
            alive: true,
            grid: grid.clone(),
            threats: vec![
                simulation::Threat::spawn(Pos { x: 15, y: 9 }, Style::Hawk),
                simulation::Threat::spawn(Pos { x: 15, y: 10 }, Style::Owl),
                simulation::Threat::spawn(Pos { x: 1, y: 1 }, Style::Deer),
                simulation::Threat::spawn(Pos { x: 1, y: 12 }, Style::Shark),
                simulation::Threat::spawn(Pos { x: 5, y: 7 }, Style::Hawk),
                simulation::Threat::spawn(Pos { x: 8, y: 11 }, Style::Hawk),
            ],
        };
        let state = simulation::State::new(game);
        b.iter(|| {
            let params = mcts::SearchParams::<MCTS>::new(
                mcts::EvalCallsBudget { max_evals: 1000 },
                search::ThreatsAreFarEval {},
                /*seed=*/42);
            let mut algorithm = mcts::uct_algorithm(black_box(params), black_box(1.0),
                                                black_box(100), black_box(state.clone()));
            algorithm.search()
        });
    });
}

criterion_group! {
    name = benches;
    config = Criterion::default().with_profiler(PProfProfiler::new(100, Output::Flamegraph(None)));
    targets = criterion_benchmark
}
criterion_main!(benches);
