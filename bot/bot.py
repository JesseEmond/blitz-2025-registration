from game_message import *
import search

import devnull_bot

# TODO: Threats only move every 5 ticks?
# TODO: What do the styles/personalities mean?

# Seen in games. Crash if we've never seen a style so that we know.
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

class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")
        devnull_bot.hello_world()
        self.prev_threats = None

    def get_next_move(self, game_message: TeamGameState):
        create_rust_game_state(game_message)
        threats = [t.position for t in game_message.threats]
        if self.prev_threats is None:
            self.prev_threats = threats
        self.prev_threats = threats
        actions = []
        move = search.next_move(game_message, budget_ms=250)
        if move is not None:
            actions.append(direction_to_action(move))
        return actions
