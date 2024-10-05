use criterion::{black_box, criterion_group, criterion_main, Criterion};
use pprof::criterion::{Output, PProfProfiler};

use devnull_bot::simulation::{get_aggressive_path, make_grid, Pos};

pub fn criterion_benchmark(c: &mut Criterion) {
    c.bench_function("get_aggressive_path 22x15", |b| {
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
        b.iter(|| get_aggressive_path(
                black_box(&grid), &Pos { x: 5, y: 1 }, &Pos { x: 18, y: 13 }));
    });
}

criterion_group! {
    name = benches;
    config = Criterion::default().with_profiler(PProfProfiler::new(100, Output::Flamegraph(None)));
    targets = criterion_benchmark
}
criterion_main!(benches);
