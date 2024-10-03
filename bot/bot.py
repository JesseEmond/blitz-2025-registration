import time

from game_message import *
import devnull_bot


def create_rust_position(position: Position) -> devnull_bot.GamePosition:
    return devnull_bot.GamePosition(x=position.x, y=position.y)


def create_rust_threat(threat: Threat) -> devnull_bot.GameThreat:
    return devnull_bot.GameThreat(
        position=create_rust_position(threat.position),
        direction=create_rust_direction(threat.direction),
        style=threat.style)


def create_rust_map(game_map: GameMap) -> devnull_bot.GameMap:
    return devnull_bot.GameMap(
        width=game_map.width,
        height=game_map.height,
        tiles=[[tile == TileType.WALL for tile in tiles_x] for tiles_x in game_map.tiles])


def create_rust_game_state(game: TeamGameState) -> devnull_bot.GameState:
    return devnull_bot.GameState(
        tick=game.tick,
        position=create_rust_position(game.yourCharacter.position),
        threats=[create_rust_threat(t) for t in game.threats],
        map=create_rust_map(game.map),
        alive=game.yourCharacter.alive)


def rust_action_to_action(action: devnull_bot.Action) -> Direction | None:
    if action == devnull_bot.Action.Up:
        return Direction.UP
    elif action == devnull_bot.Action.Down:
        return Direction.DOWN
    elif action == devnull_bot.Action.Right:
        return Direction.RIGHT
    elif action == devnull_bot.Action.Left:
        return Direction.LEFT
    elif action == devnull_bot.Action.Idle:
        return None
    else:
        raise NotImplementedError(action)

def create_rust_direction(direction: str) -> devnull_bot.GameDirection:
    if direction == "up":
        return devnull_bot.GameDirection.Up
    elif direction == "down":
        return devnull_bot.GameDirection.Down
    elif direction == "left":
        return devnull_bot.GameDirection.Left
    elif direction == "right":
        return devnull_bot.GameDirection.Right
    else:
        raise NotImplementedError(direction)


def verify_prediction(predicted: devnull_bot.GameState, actual: devnull_bot.GameState) -> None:
    def _eq_pos(a, b): return a.x == b.x and a.y == b.y
    def _pr_pos(p): return f"{{x:{p.x},y:{p.y}}}"
    if predicted.tick != actual.tick:
        raise ValueError(f"Predicted tick {predicted.tick}, got {actual.tick}")
    if not _eq_pos(predicted.position, actual.position):
        raise ValueError(
            f"Predicted pos {_pr_pos(predicted.position)}, got "
            f"{_pr_pos(actual.position)}")
    if predicted.alive != actual.alive:
        # TODO: Once we fully predict threats, enable.
        # raise ValueError(f"Predicted alive {predicted.alive}, got {actual.alive}")
        print(f"[TODO] Learn to predict all threats")
    for predicted_threat, actual_threat in zip(predicted.threats, actual.threats):
        assert predicted_threat.style == actual_threat.style
        style = predicted_threat.style
        if style in ["goldfish", "bull"]:
            if not _eq_pos(predicted_threat.position, actual_threat.position):
                raise ValueError(
                    f"Predicted {style} pos {_pr_pos(predicted_threat.position)}, got "
                    f"{_pr_pos(actual_threat.position)}")
            if predicted_threat.direction != actual_threat.direction:
                raise ValueError(
                    f"Predicted {style} dir {predicted_threat.direction}, got "
                    f"{actual_threat.direction}")
        else:
            # TODO: Once we fully predict threats, crash here.
            print(f"[TODO] Learn to predict {style}")


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")
        self.simulator = None
        self.predicted_state = None

    def get_next_move(self, game_message: TeamGameState):
        start_time = time.time()
        actions = []
        state = create_rust_game_state(game_message)
        if self.simulator is None:
            self.simulator = devnull_bot.GameSimulator(state)
        if self.predicted_state is not None:
            verify_prediction(self.predicted_state, state)
        action = devnull_bot.pick_action(state)
        self.predicted_state = self.simulator.predict_next_tick(action)
        direction = rust_action_to_action(action)
        if direction is not None:
            actions.append(direction_to_action(direction))
        end_time = time.time()
        print(f"Turn took {(end_time - start_time)*1000:.2f}ms")
        return actions
