use std::collections::VecDeque;

use strum::IntoEnumIterator;

use crate::grid::{Grid, Move, Pos};

pub type Cost = usize;
/// Impossible cost in our game.
const COST_INFINITY: Cost = Cost::MAX;

pub type Path = Vec<Pos>;

/// Index into the 'empty_tiles' of a grid.
type Node = usize;

/// State of pathfinding from a given start point.
struct PathfinderState {
    /// For a given 'empty_tiles' index, its shortest distance to a start point.
    cost: Vec<Cost>,
    /// For a given 'empty_tiles' index, previous pos on shortest path.
    came_from: Vec<Option<Pos>>,
    /// Goal position, if applicable, for optional early stopping.
    target: Option<Pos>,
}

impl PathfinderState {
    pub fn new(grid: &Grid, from: &Pos, to: &Option<Pos>) -> Self {
        let mut cost = vec![COST_INFINITY; grid.empty_tiles.len()];
        cost[grid.empty_tile_idx(from)] = 0;
        Self {
            cost,
            came_from: vec![None; grid.empty_tiles.len()],
            target: *to,
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
        let mut node = *to;
        loop {
            if let Some(parent) = self.came_from[grid.empty_tile_idx(&node)] {
                path.push(node);
                node = parent;
            } else {
                break;
            }
        }
        path.reverse();
        path
    }
}

trait Pathfinder {
    /// Next node to explore in our search, if we should continue.
    fn next_node(&mut self, state: &PathfinderState) -> Option<Node>;
    /// Queue up a future note to visit.
    fn queue(&mut self, state: &PathfinderState, next: Node, cost: Cost);

    /// Called when we start visiting a node (right after 'next_node').
    fn start_visiting(&mut self);
    /// Called when we are done visiting a node (no more 'queue' calls for this
    /// node will be called).
    fn done_visiting(&mut self);

    /// Find the shortest paths from 'from' on a grid, optionally to target 'to'.
    fn pathfind(&mut self, grid: &Grid, from: &Pos, to: &Option<Pos>) -> PathfinderState {
        let mut state = PathfinderState::new(grid, from, to);
        self.queue(&state, grid.empty_tile_idx(from), 0);
        while let Some(pos_idx) = self.next_node(&state) {
            self.start_visiting();
            let current_cost = state.cost[pos_idx];
            let pos = grid.empty_tiles[pos_idx];
            for d in Move::iter() {
                let next_pos = pos.moved(d);
                if !grid.is_empty(&next_pos) {
                    continue;
                }
                let next_pos_idx = grid.empty_tile_idx(&next_pos);
                let prev_cost = state.cost[next_pos_idx];
                let new_cost = current_cost + 1;
                if prev_cost == COST_INFINITY {
                    state.cost[next_pos_idx] = new_cost;
                    state.came_from[next_pos_idx] = Some(pos);
                    self.queue(&state, next_pos_idx, new_cost);
                } else {
                    assert!(new_cost >= prev_cost);
                }

            }
            self.done_visiting();
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

// TODO: verify in 'get_aggressive_path' that outputs match
impl SlowAggressivePathfinder {
    fn new(grid: &Grid) -> Self {
        Self { unseen: (0..grid.empty_tiles.len()).collect() }
    }
}

impl Pathfinder for SlowAggressivePathfinder {
    fn next_node(&mut self, state: &PathfinderState) -> Option<Node> {
        self.unseen.sort_by(|&a, &b| state.cost[b].cmp(&state.cost[a]));
        self.unseen.pop()
    }

    fn queue(&mut self, _state: &PathfinderState, _next: Node, _cost: Cost) {}
    fn start_visiting(&mut self) {}
    fn done_visiting(&mut self) {}
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
struct FastAggressivePathfinder {
}

// TODO: move fast logic here

// TODO: switch to use pathfinder
pub fn get_aggressive_path(grid: &Grid, from: &Pos, to: &Pos) -> Vec<Pos> {
    // To understand this optimized implementaion, note that the JS is
    // effectively doing:
    //   cost = {p: Infinity for p in empty_tiles}
    //   unseen = list(empty_tiles)
    //   while unseen:
    //     unseen.sort(function(a,b) { cost[b] - cost[a] })
    //     pos = unseen.pop()
    //     [...]
    // This sort for every frontier pop is very expensive.
    // When reading the code below, remember that we need to replicate the above
    // with the following properties:
    // - sort in modern JS is stable
    // - sort is called at the start of the loop, so any newly added nodes in
    //   the same loop will keep their initial relative order from 'empty_tiles'
    //   instead of being in the order seen
    // TODO: remove checking logic once unit test enforces it
    let mut pathfinder_state = PathfinderState::new(grid, from, &Some(*to));
    let mut pathfinder = SlowAggressivePathfinder::new(&grid);
    const HIGH_COST: usize = 9999999;
    let mut cost = vec![HIGH_COST; grid.empty_tiles.len()];
    let mut came_from = vec![None; grid.empty_tiles.len()];
    // Frontier is nodes with cost N, next_frontier is nodes with cost N+1.
    let mut frontier = VecDeque::new();
    let mut next_frontier = VecDeque::new();
    let mut frontier_cost = 0;
    cost[grid.empty_tile_idx(from)] = 0;
    frontier.push_front(*from);
    pathfinder.queue(&pathfinder_state, grid.empty_tile_idx(from), 0);
    while !frontier.is_empty() || !next_frontier.is_empty() {
        if frontier.is_empty() {
            std::mem::swap(&mut frontier, &mut next_frontier);
            frontier_cost += 1;
        }
        let pos = frontier.pop_back().unwrap();
        let pathfinder_pos_idx = pathfinder.next_node(&pathfinder_state).expect("empty");
        assert_eq!(grid.empty_tile_idx(&pos), pathfinder_pos_idx);
        if pos == *to {
            // Early exit if we found the target
            break;
        }
        let mut frontier_adds = Vec::new();
        let mut next_frontier_adds = Vec::new();
        pathfinder.start_visiting();
        // Note: order is irrelevant, since we enforce order to match the JS
        // behavior below anyway.
        for d in Move::iter() {
            let next_pos = pos.moved(d);
            if !grid.is_empty(&next_pos) {
                continue;
            }
            let next_pos_idx = grid.empty_tile_idx(&next_pos);
            let current_cost = cost[next_pos_idx];
            let new_cost = cost[grid.empty_tile_idx(&pos)] + 1;
            if current_cost == HIGH_COST {
                cost[next_pos_idx] = new_cost;
                came_from[next_pos_idx] = Some(pos);
                pathfinder_state.cost[next_pos_idx] = new_cost;
                pathfinder_state.came_from[next_pos_idx] = Some(pos);
                pathfinder.queue(&pathfinder_state, next_pos_idx, new_cost);
                assert!(new_cost == frontier_cost || new_cost == frontier_cost + 1);
                if new_cost == frontier_cost {
                    frontier_adds.push(next_pos);
                } else {
                    next_frontier_adds.push(next_pos);
                }
            } else {
                assert!(new_cost >= current_cost);
            }
        }
        // Because the JS code only sorts on new 'while' iterations, multiple
        // positions discovered on the same iteration will keep their same
        // initial ordering in the array, which comes from the 'empty_tiles'
        // creation order.
        frontier_adds.sort_by_key(|p| grid.empty_tile_idx(p));
        next_frontier_adds.sort_by_key(|p| grid.empty_tile_idx(p));
        // New additions move to the front. When the JS version sorts, all the
        // previously unseen positions are to the left of seen ones (from prev
        // Infinity cost value), and will preserve this relative order to
        // existing frontier items (from a stable sort).
        frontier_adds.into_iter().rev().for_each(|p| frontier.push_front(p));
        next_frontier_adds.into_iter().rev().for_each(|p| next_frontier.push_front(p));
        pathfinder.done_visiting();
    }
    let mut path = Vec::new();
    let mut node = *to;
    loop {
        if let Some(parent) = came_from[grid.empty_tile_idx(&node)] {
            path.push(node);
            node = parent;
        } else {
            break;
        }
    }
    path.reverse();
    path
}

// TODO: Unit test that slow pathfinder & fast pathfinders return the same nodes
