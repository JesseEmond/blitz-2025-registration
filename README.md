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
