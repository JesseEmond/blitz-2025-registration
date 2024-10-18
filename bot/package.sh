#!/bin/sh
set -e
./venv/bin/maturin build --release
rm devnull.zip
zip -r devnull.zip *.py core-requirements.txt requirements.txt ./target/wheels/*.whl maps/
