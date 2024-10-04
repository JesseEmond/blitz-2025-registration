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


def create_rust_action(action: Action | None) -> devnull_bot.Action:
    if action is None:
        return devnull_bot.Action.Idle
    elif action.type == MoveLeftAction().type:
        return devnull_bot.Action.Left
    elif action.type == MoveRightAction().type:
        return devnull_bot.Action.Right
    elif action.type == MoveUpAction().type:
        return devnull_bot.Action.Up
    elif action.type == MoveDownAction().type:
        return devnull_bot.Action.Down
    else:
        raise NotImplementedError(action)


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
