from game_message import *
import random


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")

    def get_next_move(self, game_message: TeamGameState):
        """
        Here is where the magic happens, for now the moves are not very good. I bet you can do better ;)
        """
        actions = []

        actions.append(
            random.choice(
                [
                    MoveUpAction(),
                    MoveRightAction(),
                    MoveDownAction(),
                    MoveLeftAction(),
                ]
            )
        )

        # You can clearly do better than the random actions above! Have fun!
        return actions
