#!/bin/bash
set -e
./venv/bin/maturin build --release
./venv/bin/pip install target/wheels/devnull_bot-0.1.0-cp310-cp310-manylinux_2_34_x86_64.whl --force-reinstall
./venv/bin/python application.py
