use criterion::{black_box, criterion_group, criterion_main, Criterion};
use pprof::criterion::{Output, PProfProfiler};

use devnull_bot::grid::{get_aggressive_path, make_grid, PathfindingGrid, Pos};

pub fn criterion_benchmark(c: &mut Criterion) {
    let grid = PathfindingGrid::new(make_grid(vec![
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
    ]));
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
}

criterion_group! {
    name = benches;
    config = Criterion::default().with_profiler(PProfProfiler::new(100, Output::Flamegraph(None)));
    targets = criterion_benchmark
}
criterion_main!(benches);
