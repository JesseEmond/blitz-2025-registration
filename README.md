# Dev

## Setup

```sh
cd bot
python3 -m venv venv
./venv/bin/pip install -r dev-requirements.txt  # Note! Not requirements.txt!
```

## Local bot test

Because we run Rust called from Python, the command to run the program is a bit
more involved. For simplicity, it is available in `run.sh`:

```sh
cd bot
./run.sh
```

This will:
- Build the Rust binary with `maturin`
- Install the built wheel program (force reinstall it)
- Run `application.py`

## Upload new version

```sh
cd bot
./package.sh
```

This will create a `devnull.zip` file.

Then:
- Navigate to the website
- Upload `devnull.zip`
- Wait for the build to complete
- Run `Try us!`

## Tools

### Local rust play

You can run a full game locally without needing a local server, since we clone
the server's logic.

The local version of the game has multiple options (see `--help`), but the
primary ones useful for development are:

**Run a random map**
```
cd bot
cargo run
```

**Run a specific map**
```
cd bot
cargo run -- --map challenge1
```

**Run on all maps**

We can eval all maps with some parallelism to speed up the eval, with multiple
samples per map to get an average.

> [!WARNING]
> Running with excessive parallelism will artificially reduce search budgets
> from context switching and underestimate scores.

```
cd bot
cargo run -- --all --parallelism=8 --samples=5
```

### Save local games

```
cd bot
SAVE_JSONL_PATH=games/1.jsonl run.sh
```

This will save each tick's `game_message` and the bot's action as a JSON file,
one tick per line.

### Replay local games

This is useful to exercise our simulation logic, ensure it matches the server's.

```
cd bot
./replay.sh games/1.jsonl
```

To replay all `*.jsonl` files in `games/`, you can use the utility `./replay_all.sh`.
