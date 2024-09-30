from game_message import *
import random


# Seen in games. Crash if we've never seen a style so that we know.
# TODO: Stop crashing on new types, for safety
KNOWN_PERSONALITIES = ["lazy"]
KNOWN_STYLES = ["bull", "hawk", "shark", "goldfish", "deer", "hawk", "owl"]


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")

    def get_next_move(self, game_message: TeamGameState):
        """
        Here is where the magic happens, for now the moves are not very good. I bet you can do better ;)
        """
        for threat in game_message.threats:
            if threat.personality not in KNOWN_PERSONALITIES:
                raise NotImplementedError(threat.personality)
            if threat.style not in KNOWN_STYLES:
                raise NotImplementedError(threat.style)

        options = []
        for direction in Direction:
            # Don't walk into walls
            if not game_message.can_go(direction):
                continue
            # Don't walk on threats
            threat_positions = [t.position for t in game_message.threats]
            next_pos = game_message.yourCharacter.position.offset(direction)
            if next_pos in threat_positions:
                continue
            options.append(direction)
        actions = []
        if options:
            direction = random.choice(options)
            actions.append(direction_to_action(direction))

        # You can clearly do better than the random actions above! Have fun!
        return actions
