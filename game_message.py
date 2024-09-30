from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from enum import Enum, unique, auto
from typing import Optional


class Direction(Enum):
    UP = auto()
    DOWN = auto()
    RIGHT = auto()
    LEFT = auto()


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
class Position:
    x: int
    y: int

    def offset(self, direction: Direction) -> "Position":
        x, y = self.x, self.y
        if direction == Direction.UP:
            y -= 1
        elif direction == Direction.DOWN:
            y += 1
        elif direction == Direction.LEFT:
            x -= 1
        elif direction == Direction.RIGHT:
            x += 1
        return Position(x, y)


@dataclass_json
@dataclass
class GameMap:
    width: int
    height: int
    # Note: tiles[x][y]
    tiles: list[list[TileType]]

    def is_empty(self, position: Position) -> bool:
        if 0 <= position.x < self.width and 0 <= position.y < self.height:
            return self.tiles[position.x][position.y] == TileType.EMPTY
        return False


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

    def can_go(self, direction: Direction) -> bool:
        return self.map.is_empty(self.yourCharacter.position.offset(direction))


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


def direction_to_action(direction: Direction) -> Action:
    directions = [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    actions = [MoveUpAction, MoveDownAction, MoveLeftAction, MoveRightAction]
    return actions[directions.index(direction)]()


@dataclass_json
@dataclass
class MoveToAction(Action):
    position: Position
    type: str = "MOVE_TO"
