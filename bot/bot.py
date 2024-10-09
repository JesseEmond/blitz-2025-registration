import time

from game_message import *
import devnull_bot
import rust_interop


class Bot:
    def __init__(self):
        print("Initializing your super mega duper bot")
        self.initialized = False
        self.simulator = None
        self.bot = None

    def on_first_tick(self, game_message: TeamGameState) -> None:
        state = rust_interop.to_rust_game_state(game_message)
        self.bot = devnull_bot.create_bot(state)
        self.initialized = True

    def get_next_move(self, game_message: TeamGameState):
        start_time = time.time()
        if not self.initialized:
            self.on_first_tick(game_message)
        actions = []
        state = rust_interop.to_rust_game_state(game_message)
        action = self.bot.pick_action(state)
        direction = rust_interop.from_rust_action(action)
        if direction is not None:
            actions.append(direction_to_action(direction))
        end_time = time.time()
        print(f"Turn took {(end_time - start_time)*1000:.2f}ms")
        return actions
