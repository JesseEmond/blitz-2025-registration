#!/bin/bash
set -e
for jsonl_file in games/*.jsonl; do
    echo "Replaying ${jsonl_file?}..."
    ./replay.sh "${jsonl_file?}"
done
