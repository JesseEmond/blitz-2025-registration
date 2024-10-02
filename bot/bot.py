from game_message import *
import search

# TODO: Threats only move every 5 ticks?
# TODO: What do the styles/personalities mean?

# Seen in games. Crash if we've never seen a style so that we know.
# KNOWN_PERSONALITIES = ["lazy", "tease"]
# KNOWN_STYLES = ["bull", "hawk", "shark", "goldfish", "deer", "hawk", "owl"]


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")
        self.prev_threats = None

    def get_next_move(self, game_message: TeamGameState):
        threats = [t.position for t in game_message.threats]
        if self.prev_threats is None:
            self.prev_threats = threats
        self.prev_threats = threats
        actions = []
        move = search.next_move(game_message, budget_ms=250)
        if move is not None:
            actions.append(direction_to_action(move))
        return actions
