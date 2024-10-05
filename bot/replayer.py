import dataclasses
import json
import sys

import devnull_bot
from game_message import *
import rust_interop


@dataclasses.dataclass
class Tick:
    state: TeamGameState
    action: Action | None


def parse_action(action: dict) -> Action:
    actions = [MoveDownAction(), MoveLeftAction(), MoveRightAction(), MoveUpAction()]
    if action["type"] == MoveToAction.type:
        return MoveToAction(Position.from_dict(action["position"]))
    return next(a for a in actions if a.type == action["type"])


def load_ticks(jsonl_path: str) -> list[Tick]:
    with open(jsonl_path, "r") as f:
        lines = [line.strip() for line in f.readlines()]
    ticks = []
    for line in lines:
        stored = json.loads(line)
        state = TeamGameState.from_dict(stored["game_message"])
        actions = [parse_action(action) for action in stored["actions"]]
        assert len(actions) <= 1, actions
        ticks.append(Tick(state=state, action=actions[0] if actions else None))
    return ticks


def replay(ticks: list[Tick]) -> None:
    assert len(ticks) > 0
    start_state = rust_interop.to_rust_game_state(ticks[0].state)
    bot = devnull_bot.DevnullBot(start_state)
    for tick in ticks:
        state = rust_interop.to_rust_game_state(tick.state)
        action = tick.action
        if isinstance(action, MoveToAction):
            bot.simulate_move_to(state, rust_interop.to_rust_position(action.position))
        else:
            bot.simulate(state, rust_interop.to_rust_action(action))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: replayer.py games/1.jsonl")
        exit(1)
    jsonl_path = sys.argv[1]
    print("Loading ticks...")
    ticks = load_ticks(jsonl_path)
    print("Replaying ticks...")
    replay(ticks)
