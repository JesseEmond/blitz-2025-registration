#!/bin/sh
set -e
./venv/bin/maturin build --release
rm devnull.zip; zip devnull.zip *.py core-requirements.txt \
    requirements.txt ./target/wheels/*.whl
