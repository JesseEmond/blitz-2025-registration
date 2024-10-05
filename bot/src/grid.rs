use std::collections::VecDeque;

use strum::IntoEnumIterator;
use strum_macros::EnumIter;

#[derive(EnumIter, Copy, Clone, Debug, PartialEq)]
pub enum Move {
    Up,
    Down,
    Left,
    Right,
}

impl Move {
    pub fn opposite(&self) -> Move {
        match self {
            Move::Up => Move::Down,
            Move::Down => Move::Up,
            Move::Left => Move::Right,
            Move::Right => Move::Left,
        }
    }
}

#[derive(Copy, Clone, PartialEq, Debug, Eq, Hash)]
pub struct Pos {
    pub x: i16,
    pub y: i16,
}

impl Pos {
    pub fn moved(&self, m: Move) -> Pos {
        Pos {
            x: match m {
                Move::Left => self.x - 1,
                Move::Right => self.x + 1,
                _ => self.x,
            },
            y: match m {
                Move::Up => self.y - 1,
                Move::Down => self.y + 1,
                _ => self.y,
            }
        }
    }

    pub fn manhattan_dist(&self, other: &Pos) -> usize {
        ((self.x - other.x).abs() + (self.y - other.y).abs()) as usize
    }

    pub fn dist_squared(&self, other: &Pos) -> usize {
        let dx = self.x - other.x;
        let dy = self.y - other.y;
        (dx * dx + dy * dy) as usize
    }
}

#[derive(Clone)]
pub struct Grid {
    pub width: u8,
    pub height: u8,
    /// Dims: [x][y], true for walls
    pub tiles: Vec<Vec<bool>>,

    // Precomputed features of the grid on init.
    pub empty_tiles: Vec<Pos>,
    /// At [x][y], index in 'empty_tiles' (only valid for empty tiles).
    pub empty_tiles_lookup: Vec<Vec<usize>>,
}

impl Grid {
    pub fn new(width: u8, height: u8, tiles: Vec<Vec<bool>>) -> Self {
        let mut empty_tiles = Vec::new();
        let mut empty_tiles_lookup = vec![
            vec![usize::MAX; height as usize]; width as usize];
        // Note: the order of the loops here matters (outer xs, inner ys), to
        // match the JS code for get_aggressive_path.
        for x in 0..(width as usize) {
            for y in 0..(height as usize) {
                if !tiles[x][y] {
                    let idx = empty_tiles.len();
                    empty_tiles.push(Pos { x: x as i16, y: y as i16 });
                    empty_tiles_lookup[x][y] = idx;
                }
            }
        }
        Self { width, height, tiles, empty_tiles, empty_tiles_lookup }
    }

    pub fn available_moves(&self, from: &Pos) -> Vec<Move> {
        Move::iter()
            .filter(|&m| self.is_empty(&from.moved(m)))
            .collect()
    }

    pub fn is_empty(&self, pos: &Pos) -> bool {
        self.on_grid(pos) && !self.tiles[pos.x as usize][pos.y as usize]
    }

    pub fn on_grid(&self, pos: &Pos) -> bool {
        pos.x >= 0 && pos.x < self.width.into() && pos.y >= 0 && pos.y < self.height.into()
    }

    pub fn empty_tile_idx(&self, pos: &Pos) -> usize {
        assert!(self.is_empty(pos));
        self.empty_tiles_lookup[pos.x as usize][pos.y as usize]
    }
}

/// Helper to make 'tiles' from a [y][x] structure (matches visually) of
/// '#'s and ' 's.
pub fn make_grid(rows: Vec<&str>) -> Grid {
    let width = if rows.is_empty() { 0 } else { rows[0].len() };
    let height = rows.len();
    let mut tiles = vec![vec![false; height]; width];
    for x in 0..width {
        for y in 0..height {
            let c = rows[y].as_bytes()[x];
            assert!(c == b' ' || c == b'#',
                    "make_grid expects rows with spaces and #s: '{}'", c);
            tiles[x][y] = c == b'#';
        }
    }
    Grid::new(width as u8, height as u8, tiles)
}

pub fn get_aggressive_path(grid: &Grid, from: &Pos, to: &Pos) -> Vec<Pos> {
    // Implemented to match:
    // https://github.com/JesseEmond/blitz-2025-registration/blob/5bbcd84d0a74256ce00c82f9766528b2ac9efbba/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/aggressive.decomp.js#L17
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
    // TODO: Refactor to a struct, impl old slower method, unit test verifying
    //       that the behavior is the same.
    const HIGH_COST: usize = 9999999;
    let mut cost = vec![HIGH_COST; grid.empty_tiles.len()];
    let mut came_from = vec![None; grid.empty_tiles.len()];
    // Frontier is nodes with cost N, next_frontier is nodes with cost N+1.
    let mut frontier = VecDeque::new();
    let mut next_frontier = VecDeque::new();
    let mut frontier_cost = 0;
    cost[grid.empty_tile_idx(from)] = 0;
    frontier.push_front(*from);
    while !frontier.is_empty() || !next_frontier.is_empty() {
        if frontier.is_empty() {
            std::mem::swap(&mut frontier, &mut next_frontier);
            frontier_cost += 1;
        }
        let pos = frontier.pop_back().unwrap();
        if pos == *to {
            // Early exit if we found the target
            break;
        }
        let mut frontier_adds = Vec::new();
        let mut next_frontier_adds = Vec::new();
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
