import dataclasses
import random

from mcts import mcts

import game_message


SearchAction = game_message.Direction | None  # None to stay in place


SafetyGrid = list[list[int]]  # [x][y]
def make_safety_grid(game_map: game_message.GameMap, threats: list[game_message.Position]) -> SafetyGrid:
    grid = [[None for _ in range(game_map.height)] for _ in range(game_map.width)]
    for t in threats:
        grid[t.x][t.y] = 0
    queue = list(set(threats))
    while queue:
        pos = queue.pop(0)
        for d in game_message.Direction:
            next_pos = pos.offset(d)
            if not game_map.is_empty(next_pos) or grid[next_pos.x][next_pos.y] is not None:
                continue
            grid[next_pos.x][next_pos.y] = grid[pos.x][pos.y] + 1
            queue.append(next_pos)
    return grid


@dataclasses.dataclass
class SearchState:
    turn_idx: int  # 0: player, >0: threat idx+1
    tick: int
    horizon: int
    game_map: game_message.GameMap
    position: game_message.Position
    threats: list[game_message.Position]

    def _possible_moves(self,
        position: game_message.Position,
        avoid: list[game_message.Position] | None = None
        ) -> list[SearchAction]:
        return [
            d for d in game_message.Direction
            if self.game_map.is_empty(position.offset(d)) and (avoid is None or position.offset(d) not in avoid)
        ] + [None]

    def possible_actions(self) -> list[SearchAction]:
        if self.turn_idx == 0:
            return self._possible_moves(self.position, avoid=self.threats)
        threat_idx = self.turn_idx - 1
        # TODO: Take into account threat styles!
        return self._possible_moves(self.threats[threat_idx])

    def apply_move(self, position: game_message.Position, move: SearchAction) -> game_message.Position:
        if move is None:
            return position
        return position.offset(move)

    def take_action(self, action: SearchAction) -> "SearchState":
        tick = self.tick
        turn_idx = self.turn_idx
        position = self.position
        threats = self.threats
        if turn_idx == 0:
            position = self.apply_move(position, action)
        else:
            threat_idx = turn_idx - 1
            threats = threats[:threat_idx] + [self.apply_move(threats[threat_idx], action)] + threats[threat_idx+1:]
        turn_idx += 1
        enemies_move = (tick - 1) % 5 == 0 and tick > 1
        if enemies_move and turn_idx >= len(threats) + 1 or turn_idx > 0:
            turn_idx = 0
            tick += 1
        return MctsState(
            turn_idx=turn_idx,
            tick=tick,
            horizon=self.horizon,
            game_map=self.game_map,
            position=position,
            threats=threats)

    def is_terminal(self) -> bool:
        return self.tick >= self.horizon or self.position in self.threats

    def get_reward(self) -> int:
        safety_bonus = 0
        if self.tick >= self.horizon:
            safety = make_safety_grid(self.game_map, self.threats)
            safety_bonus = safety[self.position.x][self.position.y]
        return self.tick + safety_bonus


def random_policy(state: SearchState) -> int:
    while not state.is_terminal():
        action = random.choice(state.possible_actions())
        state = state.take_action(action)
    return state.get_reward()


def to_safety_policy(state: SearchState) -> int:
    print('rollout')
    while not state.is_terminal():
        if state.turn_idx == 0:
            safety = make_safety_grid(state.game_map, state.threats)
            actions = state.possible_actions()
            action_results = [state.apply_move(state.position, action) for action in actions]
            max_safety = max(safety[p.x][p.y] for p in action_results)
            safer_actions = [action for action, result in zip(actions, action_results)
                             if safety[result.x][result.y] == max_safety]
            action = random.choice(safer_actions)
        else:
            action = random.choice(state.possible_actions())
        state = state.take_action(action)
    return state.get_reward()


class MctsState(SearchState):
    """Wrapper to call mcts functions"""
    def isTerminal(self): return self.is_terminal()
    def getReward(self): return self.get_reward()
    def takeAction(self, action): return self.take_action(action)
    def getPossibleActions(self): return self.possible_actions()


def next_move(state: game_message.TeamGameState, budget_ms: float) -> SearchAction:
    m = mcts(timeLimit=budget_ms, rolloutPolicy=random_policy)
    mcts_state = MctsState(
        turn_idx=0,
        horizon=state.tick + 20,
        tick=state.tick,
        position=state.yourCharacter.position,
        game_map=state.map,
        threats=[t.position for t in state.threats])
    return m.search(mcts_state)
