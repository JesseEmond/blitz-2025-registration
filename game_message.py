from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from enum import Enum, unique
from typing import Optional


@unique
class TileType(str, Enum):
    EMPTY = ("EMPTY",)
    WALL = ("WALL",)


@dataclass_json
@dataclass
class Constants:
    pass


@dataclass_json
@dataclass
class GameMap:
    width: int
    height: int
    tiles: list[list[TileType]]


@dataclass_json
@dataclass
class Position:
    x: int
    y: int


@dataclass_json
@dataclass
class Threat:
    position: Position
    direction: str
    personality: str
    style: str


@dataclass_json
@dataclass
class YourCharacter:
    id: str
    teamId: str
    position: Position
    alive: bool
    spawnPoint: Position
    distances: list[list[int | None]]


@dataclass_json
@dataclass
class TeamGameState:
    type: str
    tick: int
    currentTickNumber: int
    lastTickErrors: list[str]
    constants: Constants
    yourCharacter: YourCharacter
    threats: list[Threat]
    map: GameMap


class Action:
    type: str


@dataclass_json
@dataclass
class MoveLeftAction(Action):
    type: str = "MOVE_LEFT"


@dataclass_json
@dataclass
class MoveRightAction(Action):
    type: str = "MOVE_RIGHT"


@dataclass_json
@dataclass
class MoveUpAction(Action):
    type: str = "MOVE_UP"


@dataclass_json
@dataclass
class MoveDownAction(Action):
    type: str = "MOVE_DOWN"


@dataclass_json
@dataclass
class MoveToAction(Action):
    position: Position
    type: str = "MOVE_TO"
