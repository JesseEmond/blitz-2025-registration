#!/usr/bin/env python

import asyncio
import dataclasses
import json
import os
import traceback

import websockets

from bot import Bot
from game_message import TeamGameState


def on_end(game: TeamGameState):
    """Callback when the game is over with the last game state seen."""
    last_tick = game.tick + 1
    print(f"Final score: {last_tick * 5}")


async def run():
    uri = "ws://127.0.0.1:8765"

    async with websockets.connect(uri, max_size=None) as websocket:
        bot = Bot()
        if "TOKEN" in os.environ:
            await websocket.send(
                json.dumps({"type": "REGISTER", "token": os.environ["TOKEN"]})
            )
            local = False
        else:
            await websocket.send(
                json.dumps({"type": "REGISTER", "teamName": "MyPythonicBot"})
            )
            local = True

        await game_loop(websocket=websocket, bot=bot, local=local)


async def game_loop(websocket: websockets.WebSocketServerProtocol, bot: Bot, local: bool):
    last_game_message = None
    while True:
        try:
            message = await websocket.recv()
        except websockets.exceptions.ConnectionClosed:
            # Connection is closed, the game is probably over
            print("Websocket was closed.")
            on_end(last_game_message)
            break

        game_message: TeamGameState = TeamGameState.from_json(message)
        print(f"Playing tick {game_message.tick}")

        if game_message.lastTickErrors:
            print(f"Errors during last tick : {game_message.lastTickErrors}")

        actions = []

        # Just so your bot doesn't completely crash. ;)
        try:
            actions = bot.get_next_move(game_message)
        except Exception:
            print("Exception while getting next moves:")
            print(traceback.format_exc())
            if local:
                raise  # Let it crash -- easier debugging


        payload = {
            "type": "COMMAND",
            "tick": game_message.tick,
            "actions": [dataclasses.asdict(action) for action in actions],
        }

        print(json.dumps(payload))

        await websocket.send(json.dumps(payload))
        last_game_message = game_message


if __name__ == "__main__":
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(run())
