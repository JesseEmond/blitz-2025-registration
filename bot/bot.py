from game_message import *
import devnull_bot

# TODO: What do the styles/personalities mean?
# Seen in games.
# KNOWN_PERSONALITIES = ["lazy", "tease"]
# KNOWN_STYLES = ["bull", "hawk", "shark", "goldfish", "deer", "hawk", "owl"]


def create_rust_position(position: Position) -> devnull_bot.GamePosition:
    return devnull_bot.GamePosition(x=position.x, y=position.y)


def create_rust_threat(threat: Threat) -> devnull_bot.GameThreat:
    return devnull_bot.GameThreat(
        position=create_rust_position(threat.position),
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
        map=create_rust_map(game.map))


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


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")

    def get_next_move(self, game_message: TeamGameState):
        actions = []
        state = create_rust_game_state(game_message)
        action = devnull_bot.pick_action(state)
        direction = rust_action_to_action(action)
        if direction is not None:
            actions.append(direction_to_action(direction))
        return actions
