#!/bin/bash
set -e
# Build only once for all replays
./venv/bin/maturin build --release
./venv/bin/pip install target/wheels/devnull_bot-0.1.0-cp310-cp310-manylinux_2_34_x86_64.whl --force-reinstall
for jsonl_file in games/*.jsonl; do
    echo "Replaying ${jsonl_file?}..."
    ./venv/bin/python replayer.py "${jsonl_file?}"
done
