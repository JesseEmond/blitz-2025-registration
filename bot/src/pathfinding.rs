use std::cmp::Reverse;
use std::collections::VecDeque;

use crate::grid::{EmptyTile, Grid, Move, Pos};

pub type Cost = usize;
/// Impossible cost in our game.
pub const COST_INFINITY: Cost = Cost::MAX;

pub type Path = Vec<Pos>;

/// Index into the 'empty_tiles' of a grid.
type Node = EmptyTile;

/// State of pathfinding from a given start point.
pub struct PathfinderState {
    /// For a given 'empty_tiles' index, its shortest distance to a start point.
    cost: Vec<Cost>,
    /// For a given 'empty_tiles' index, previous pos on shortest path.
    came_from: Vec<Option<Node>>,
    /// Goal position, if applicable, for optional early stopping.
    target: Option<Node>,
}

impl PathfinderState {
    pub fn new(grid: &Grid, from: &Pos, to: &Option<Pos>) -> Self {
        let mut cost = vec![COST_INFINITY; grid.empty_tiles.len()];
        cost[grid.empty_tile_idx(from)] = 0;
        Self {
            cost,
            came_from: vec![None; grid.empty_tiles.len()],
            target: to.map(|pos| grid.empty_tile_idx(&pos)),
        }
    }

    /// Get cost of going to 'to', from our start position.
    /// Only valid after using a 'Pathfinder'.
    pub fn get_cost(&self, grid: &Grid, to: &Pos) -> Cost {
        self.cost[grid.empty_tile_idx(to)]
    }

    /// Get path for going to 'to', from our start position.
    /// The start position will not be included in the path. 'to' will.
    /// Only valid after using a 'Pathfinder'.
    pub fn get_path(&self, grid: &Grid, to: &Pos) -> Path {
        let mut path = Path::new();
        let mut node = grid.empty_tile_idx(to);
        loop {
            if let Some(parent) = self.came_from[node] {
                path.push(grid.empty_tiles[node]);
                node = parent;
            } else {
                break;
            }
        }
        path.reverse();
        path
    }
}

pub trait Pathfinder {
    /// Next node to explore in our search, if we should continue.
    fn next_node(&mut self, state: &PathfinderState) -> Option<Node>;
    /// Queue up a future note to visit.
    fn queue(&mut self, state: &PathfinderState, next: Node, cost: Cost);

    /// Called when we are done visiting a node (no more 'queue' calls for this
    /// node will be called).
    fn commit(&mut self);

    /// Find the shortest paths from 'from' on a grid, optionally to target 'to'.
    fn pathfind(&mut self, grid: &Grid, from: &Pos, to: &Option<Pos>) -> PathfinderState {
        let mut state = PathfinderState::new(grid, from, to);
        self.queue(&state, grid.empty_tile_idx(from), 0);
        self.commit();
        while let Some(pos_idx) = self.next_node(&state) {
            let current_cost = state.cost[pos_idx];
            // Note: order is irrelevant, since we enforce order in the
            // pathfinder implementations to match the JS behavior anyway.
            for next_pos_idx in grid.get_neighbors(pos_idx) {
                let prev_cost = state.cost[next_pos_idx];
                let new_cost = current_cost + 1;
                if prev_cost == COST_INFINITY {
                    state.cost[next_pos_idx] = new_cost;
                    state.came_from[next_pos_idx] = Some(pos_idx);
                    self.queue(&state, next_pos_idx, new_cost);
                } else {
                    assert!(new_cost >= prev_cost);
                }

            }
            self.commit();
        }
        state
    }
}

/// Implementation of the 'aggressive' pathfinding logic, closely matching the
/// JS version. It runs slowly, but is helpful to have to verify correctness of
/// optimizations.
/// Reference:
/// https://github.com/JesseEmond/blitz-2025-registration/blob/5bbcd84d0a74256ce00c82f9766528b2ac9efbba/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/aggressive.decomp.js#L17
struct SlowAggressivePathfinder {
    unseen: Vec<Node>,
}

impl SlowAggressivePathfinder {
    #[allow(dead_code)] 
    fn new(grid: &Grid) -> Self {
        Self { unseen: (0..grid.empty_tiles.len()).collect() }
    }
}

impl Pathfinder for SlowAggressivePathfinder {
    fn next_node(&mut self, state: &PathfinderState) -> Option<Node> {
        self.unseen.sort_by_key(|&a| Reverse(state.cost[a]));
        self.unseen.pop()
    }

    fn queue(&mut self, _state: &PathfinderState, _next: Node, _cost: Cost) {}
    fn commit(&mut self) {}
}

/// Optimized implementation of SlowAggressivePathfinder.
/// To understand this optimized implementaion, note that the JS is effectively
/// doing:
///   cost = {p: Infinity for p in empty_tiles}
///   unseen = list(empty_tiles)
///   while unseen:
///     unseen.sort(function(a,b) { cost[b] - cost[a] })
///     pos = unseen.pop()
///     [...]
/// This sort for every frontier pop is expensive.
/// When reading the code below, remember that we need to replicate the above
/// with the following properties:
/// - sort in modern JS is stable
/// - sort is called at the start of the loop, so any newly added nodes in
///   the same loop will keep their initial relative order from 'empty_tiles'
///   instead of being in the order seen
pub struct FastAggressivePathfinder {
    frontier: VecDeque<Node>,
    /// Nodes at the head of 'frontier' have this cost.
    frontier_cost: Cost,

    // See 'commit' for why we need to buffer queues before committing them.
    frontier_buffer: Vec<Node>,
    next_frontier_buffer: Vec<Node>,
}

impl FastAggressivePathfinder {
    pub fn new(_grid: &Grid) -> Self {
        Self {
            frontier: VecDeque::new(),
            frontier_cost: 0,
            frontier_buffer: Vec::new(),
            next_frontier_buffer: Vec::new(),
        }
    }
}

impl Pathfinder for FastAggressivePathfinder {
    fn next_node(&mut self, state: &PathfinderState) -> Option<Node> {
        // Buffers should have been cleared in 'commit'
        assert!(self.frontier_buffer.is_empty());
        assert!(self.next_frontier_buffer.is_empty());
        let node = self.frontier.pop_back()
            // Early exit if we found target
            .filter(|&node| state.target.map_or(true, |target| node != target));
        if let Some(node) = node {
            if state.cost[node] > self.frontier_cost {
                self.frontier_cost += 1;
                assert_eq!(state.cost[node], self.frontier_cost);
            }
        }
        node
    }

    fn queue(&mut self, _state: &PathfinderState, next: Node, cost: Cost) {
        assert!(cost == self.frontier_cost || cost == self.frontier_cost + 1);
        if cost == self.frontier_cost {
            self.frontier_buffer.push(next);
        } else {
            self.next_frontier_buffer.push(next);
        }
    }

    fn commit(&mut self) {
        // Because the JS code only sorts on new 'while' iterations, multiple
        // positions discovered on the same iteration will keep their same
        // initial ordering in the array, which comes from the 'empty_tiles'
        // creation order (their index). We can sort by node index to replicate
        // this.
        self.frontier_buffer.sort();
        self.next_frontier_buffer.sort();
        // New additions move to the front. When the JS version sorts, all the
        // previously unseen positions are to the left of seen ones (from prev
        // Infinity cost value), and will preserve this relative order to
        // existing frontier items (from a stable sort).
        self.frontier_buffer.drain(..).rev().for_each(|n| self.frontier.push_front(n));
        self.next_frontier_buffer.drain(..).rev().for_each(|n| self.frontier.push_front(n));
    }
}

/// Grid that precomputes pathfinding information at creation time.
pub struct PathfindingGrid {
    pub grid: Grid,
    /// Per-empty tile precomputed pathfinding information.
    pathfinding_states: Vec<PathfinderState>,
    /// For each empty tile source, per-empty-tile target next move, when code
    /// is using 'utils/pathfinding.js'.
    move_lookup_pathfinding: Vec<Vec<Option<Move>>>,
    /// For each empty tile source, per-empty-tile target next move, when code
    /// is using 'aggressive.js' pathfinding.
    move_lookup_aggressive: Vec<Vec<Option<Move>>>,
}

impl PathfindingGrid {
    pub fn new(grid: Grid) -> Self {
        let mut pathfinding_states = Vec::new();
        for pos in &grid.empty_tiles {
            // Note: deliberate using the 'aggressive.js' version of pathfinding
            // for fast 'get_aggressive_path' lookups.
            let mut pathfinder = FastAggressivePathfinder::new(&grid);
            pathfinding_states.push(pathfinder.pathfind(&grid, &pos, &None));
        }
        let mut precomputed = Self {
            grid, pathfinding_states,
            // The following are easier to compute using methods.
            move_lookup_pathfinding: Vec::new(),
            move_lookup_aggressive: Vec::new(),
        };
        for from in &precomputed.grid.empty_tiles {
            let mut pathfinding_lookup = Vec::new();
            let mut aggressive_lookup = Vec::new();
            for to in &precomputed.grid.empty_tiles {
                pathfinding_lookup.push(
                    follow_path(from, &precomputed.get_path(from, to)));
                aggressive_lookup.push(
                    follow_path(from, &precomputed.get_aggressive_path(from, to)));
            }
            precomputed.move_lookup_pathfinding.push(pathfinding_lookup);
            precomputed.move_lookup_aggressive.push(aggressive_lookup);
        }
        precomputed
    }

    /// Get path following the logic of utils/pathfinding.js
    /// Reference:
    /// https://github.com/JesseEmond/blitz-2025-registration/blob/bb2ec9d263ebeb65e09230506d55a25111a2f48b/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/utils/pathfinding.decomp.js#L411-L419
    pub fn get_path(&self, from: &Pos, to: &Pos) -> Vec<Pos> {
        let to_idx = self.grid.empty_tile_idx(to);
        let to_state = &self.pathfinding_states[to_idx];
        let mut cost = to_state.get_cost(&self.grid, from);
        if cost == COST_INFINITY {
            return Vec::new();
        }
        let mut path = Vec::new();
        let mut current = *from;
        while cost > 0 {
            // Note: following order from 'getNeighbours':
            // https://github.com/JesseEmond/blitz-2025-registration/blob/bb2ec9d263ebeb65e09230506d55a25111a2f48b/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/utils/pathfinding.decomp.js#L216
            let dir = [Move::Left, Move::Right, Move::Up, Move::Down].into_iter()
                .filter(|&d| {
                    let next = current.moved(d);
                    self.grid.is_empty(&next) && to_state.get_cost(&self.grid, &next) == cost - 1
                })
                .next().expect("no valid dir");
            current = current.moved(dir);
            path.push(current);
            cost -= 1;
        }
        path
    }

    /// Get path the same way that 'aggressive.js' would find it.
    pub fn get_aggressive_path(&self, from: &Pos, to: &Pos) -> Vec<Pos> {
        let from_idx = self.grid.empty_tile_idx(from);
        self.pathfinding_states[from_idx].get_path(&self.grid, to)
    }

    pub fn get_cost(&self, from: &Pos, to: &Pos) -> Cost {
        let from_idx = self.grid.empty_tile_idx(from);
        self.pathfinding_states[from_idx].get_cost(&self.grid, to)
    }

    pub fn get_pathfinding_next_move(&self, from: &Pos, to: &Pos) -> Option<Move> {
        let from_idx = self.grid.empty_tile_idx(from);
        let to_idx = self.grid.empty_tile_idx(to);
        self.move_lookup_pathfinding[from_idx][to_idx]
    }

    pub fn get_aggressive_next_move(&self, from: &Pos, to: &Pos) -> Option<Move> {
        let from_idx = self.grid.empty_tile_idx(from);
        let to_idx = self.grid.empty_tile_idx(to);
        self.move_lookup_aggressive[from_idx][to_idx]
    }
}

pub fn follow_path(pos: &Pos, path: &Vec<Pos>) -> Option<Move> {
    if path.is_empty() {
        return None;
    }
    let next = path[0];
    assert!(next != *pos);
    assert!(pos.manhattan_dist(&next) <= 1);
    Some(if next.x > pos.x {
        Move::Right
    } else if next.x < pos.x {
        Move::Left
    } else if next.y < pos.y {
        Move::Up
    } else {
        assert!(next.y > pos.y);
        Move::Down
    })
}


#[cfg(test)]
mod tests {
    use super::*;
    use super::super::grid::make_grid;

    fn make_test_grid() -> Grid {
        make_grid(vec![
            "######################",
            "#                    #",
            "# ########  ######## #",
            "# #                # #",
            "# #### ###  # #### # #",
            "# ####      # #### # #",
            "# #### ###  # #### # #",
            "#           # #      #",
            "# #### ###  # # #### #",
            "# #  #      # # #  # #",
            "# #    ###  # #    # #",
            "# #                # #",
            "# ########  ######## #",
            "#                    #",
            "######################",
        ])
    }

    #[test]
    fn test_slow_pathfinder_same_path_as_fast_pathfinder() {
        let grid = make_test_grid();
        let from = Pos { x: 5, y: 1 };
        let to = Pos { x: 18, y: 13 };

        let mut slow = SlowAggressivePathfinder::new(&grid);
        let slow_path = slow.pathfind(&grid, &from, &Some(to))
            .get_path(&grid, &to);
        let mut fast = FastAggressivePathfinder::new(&grid);
        let fast_path = fast.pathfind(&grid, &from, &Some(to))
            .get_path(&grid, &to);
        assert_eq!(slow_path, fast_path);
    }

    #[test]
    fn test_slow_pathfinder_visits_same_nodes_as_fast_pathfinder() {
        let grid = make_test_grid();
        let from = Pos { x: 5, y: 1 };
        let to = Pos { x: 18, y: 13 };

        let mut slow = SlowAggressivePathfinder::new(&grid);
        let mut fast = FastAggressivePathfinder::new(&grid);
        let mut state = PathfinderState::new(&grid, &from, &Some(to));
        slow.queue(&state, grid.empty_tile_idx(&from), 0);
        slow.commit();
        fast.queue(&state, grid.empty_tile_idx(&from), 0);
        fast.commit();
        // Note: rely on 'fast' for finishing the check, since it can early exit
        while let Some(pos_idx) = fast.next_node(&state) {
            assert_eq!(Some(pos_idx), slow.next_node(&state));
            let current_cost = state.cost[pos_idx];
            for next_pos_idx in grid.get_neighbors(pos_idx) {
                let prev_cost = state.cost[next_pos_idx];
                let new_cost = current_cost + 1;
                if prev_cost == COST_INFINITY {
                    state.cost[next_pos_idx] = new_cost;
                    state.came_from[next_pos_idx] = Some(pos_idx);
                    fast.queue(&state, next_pos_idx, new_cost);
                    slow.queue(&state, next_pos_idx, new_cost);
                } else {
                    assert!(new_cost >= prev_cost);
                }

            }
            fast.commit();
            slow.commit();
        }
    }
}
