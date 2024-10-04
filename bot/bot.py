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


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")
        self.initialized = False
        self.simulator = None
        self.bot = None

    def on_first_tick(self, game_message: TeamGameState) -> None:
        state = create_rust_game_state(game_message)
        self.bot = devnull_bot.DevnullBot(state)
        self.initialized = True

    def get_next_move(self, game_message: TeamGameState):
        start_time = time.time()
        if not self.initialized:
            self.on_first_tick(game_message)
        actions = []
        state = create_rust_game_state(game_message)
        action = self.bot.pick_action(state)
        direction = rust_action_to_action(action)
        if direction is not None:
            actions.append(direction_to_action(direction))
        end_time = time.time()
        print(f"Turn took {(end_time - start_time)*1000:.2f}ms")
        return actions
