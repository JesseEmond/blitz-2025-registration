use criterion::{black_box, criterion_group, criterion_main, Criterion};
use pprof::criterion::{Output, PProfProfiler};

use devnull_bot::grid::{make_grid, Move, Pos};
use devnull_bot::mcts;
use devnull_bot::pathfinding::{get_aggressive_path, PathfindingGrid};
use devnull_bot::search;
use devnull_bot::simulation;
use devnull_bot::simulation::Style;

struct MCTS;
impl mcts::MCTS for MCTS {
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
        b.iter(|| get_aggressive_path(
                black_box(&grid), black_box(&Pos { x: 5, y: 1 }),
                black_box(&Pos { x: 18, y: 13 })));
    });
    c.bench_function("get_aggressive_path 22x15 close", |b| {
        b.iter(|| get_aggressive_path(
                black_box(&grid), black_box(&Pos { x: 5, y: 1 }),
                black_box(&Pos { x: 9, y: 1 })));
    });
    c.bench_function("PathfindingGrid 22x15 creation", |b| {
        b.iter(|| PathfindingGrid::new(black_box(grid.clone())));
    });
    c.bench_function("IterativeSampling 22x15 1000 evals", |b| {
        let game = simulation::Game {
            tick: 1,
            pos: Pos { x: 15, y: 8 },
            alive: true,
            grid: grid.clone(),
            threats: vec![
                simulation::Threat::new(Pos { x: 15, y: 9 }, Style::Hawk, Move::Up),
                simulation::Threat::new(Pos { x: 15, y: 10 }, Style::Owl, Move::Up),
                simulation::Threat::new(Pos { x: 1, y: 1 }, Style::Deer, Move::Up),
                simulation::Threat::new(Pos { x: 1, y: 12 }, Style::Shark, Move::Up),
                simulation::Threat::new(Pos { x: 5, y: 7 }, Style::Hawk, Move::Up),
                simulation::Threat::new(Pos { x: 8, y: 11 }, Style::Hawk, Move::Up),
            ],
        };
        let state = simulation::State::new(game);
        b.iter(|| {
            let simulate = mcts::Simulate::<MCTS>::new(mcts::RandomPolicy {});
            let params = mcts::SearchParams::<MCTS>::new(
                mcts::EvalCallsBudget { max_evals: 1000 },
                search::ThreatsAreFarEval {});
            let algorithm = mcts::Algorithm::<MCTS>::new(
                black_box(Box::new(simulate)), black_box(params));
            algorithm.search(&black_box(state.clone()))
        });
    });
}

criterion_group! {
    name = benches;
    config = Criterion::default().with_profiler(PProfProfiler::new(100, Output::Flamegraph(None)));
    targets = criterion_benchmark
}
criterion_main!(benches);
