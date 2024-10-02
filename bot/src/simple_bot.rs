use std::collections::VecDeque;

use ordered_float::OrderedFloat;
use rand::seq::SliceRandom;
use strum::IntoEnumIterator;
use strum_macros::EnumIter;

#[derive(EnumIter, Copy, Clone)]
pub enum Move {
    Up,
    Down,
    Left,
    Right,
}

#[derive(Copy, Clone)]
pub struct Pos {
    pub x: i16,
    pub y: i16,
}

impl Pos {
    fn moved(&self, m: Move) -> Pos {
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
}

pub struct Grid {
    pub width: u8,
    pub height: u8,
    /// Dims: [x][y], true for walls
    pub tiles: Vec<Vec<bool>>,
}

impl Grid {
    fn available_moves(&self, from: &Pos) -> Vec<Move> {
        let mut moves = Vec::new();
        for m in Move::iter() {
            if self.is_empty(&from.moved(m)) {
                moves.push(m);
            }
        }
        moves
    }

    fn is_empty(&self, pos: &Pos) -> bool {
        self.on_grid(pos) && !self.tiles[pos.x as usize][pos.y as usize]
    }

    fn on_grid(&self, pos: &Pos) -> bool {
        pos.x >= 0 && pos.x < self.width.into() && pos.y >= 0 && pos.y < self.height.into()
    }
}

#[derive(Clone)]
pub struct Threat {
    pub pos: Pos,
    // TODO: Integrate 'style' here, once we know how to use them.
}

pub struct Game {
    pub tick: usize,
    pub pos: Pos,
    pub grid: Grid,
    pub threats: Vec<Threat>,
}

struct NodeStats {
    /// How many tiles until we hit an enemy
    safety: usize,
    /// How many tiles does our connected component contain?
    walkable_tiles: usize,
}

#[derive(Clone)]
struct SearchNode {
    tick: usize,
    pos: Pos,
    threats: Vec<Threat>,
}

impl SearchNode {
    fn new(game: &Game) -> SearchNode {
        SearchNode {
            tick: game.tick,
            pos: game.pos,
            threats: game.threats.clone(),
        }
    }

    fn apply_move(&mut self, move_: &Option<Move>, grid: &Grid) {
        if let &Some(m) = move_ {
            self.pos = self.pos.moved(m);
            assert!(grid.is_empty(&self.pos));
        }
        self.tick += 1;
    }
    
    fn simulate_enemies(&mut self, grid: &Grid) {
        if self.enemies_move() {
            for threat in self.threats.iter_mut() {
                let mut moves: Vec<Option<Move>> = grid.available_moves(&threat.pos)
                    .iter().map(|&m| Some(m)).collect();
                moves.push(None);
                // TODO: take into account threat styles
                if let Some(m) = moves.choose(&mut rand::thread_rng()).unwrap() {
                    threat.pos = threat.pos.moved(*m);
                }
            }
        }
    }

    fn enemies_move(&self) -> bool {
        (self.tick - 1) % 5 == 0 && self.tick > 1
    }

    fn compute_stats(&self, grid: &Grid) -> NodeStats {
        let mut safety = None;
        let mut walkable = 0;
        let mut tiles = vec![vec![0i16; grid.height as usize]; grid.width as usize];
        for t in self.threats.iter() {
            tiles[t.pos.x as usize][t.pos.y as usize] = -1;
        }
        // Already an unsafe tile! No need to explore more.
        if tiles[self.pos.x as usize][self.pos.y as usize] == -1 {
            return NodeStats { safety: 0, walkable_tiles: 0 };
        }
        let mut queue = VecDeque::new();
        queue.push_back(self.pos);
        while !queue.is_empty() {
            let pos = queue.pop_front().unwrap();
            walkable += 1;
            let score = tiles[pos.x as usize][pos.y as usize];
            let next_score = score + 1;
            for m in grid.available_moves(&pos) {
                let next_pos = pos.moved(m);
                let current_score = tiles[next_pos.x as usize][next_pos.y as usize];
                if current_score == -1 && safety.is_none() {
                    safety = Some(next_score);
                }
                if current_score == 0 {
                    tiles[next_pos.x as usize][next_pos.y as usize] = next_score;
                    queue.push_back(next_pos);
                }
            }
        }
        NodeStats {
            safety: safety.unwrap() as usize,
            walkable_tiles: walkable,
        }
    }
}

pub struct Bot {
}

fn move_score(root: &SearchNode, m: &Option<Move>, grid: &Grid, depth: usize) -> f32 {
    if depth == 0 {
        // Only bother sampling if enemies are moving (random)
        let sample_size = if root.enemies_move() { 10 } else { 1 };
        let mut score_sum = 0.0;
        for _ in 0..sample_size {
            let mut node = root.clone();
            node.apply_move(m, &grid);
            node.simulate_enemies(&grid);
            let stats = node.compute_stats(&grid);
            let score = stats.safety + stats.walkable_tiles;
            score_sum += score as f32;
        }
        score_sum / (sample_size as f32)
    } else {
        let mut score_sum = 0.0;
        // Only bother sampling if enemies are moving (random)
        let sample_size = if root.enemies_move() { 10 } else { 1 };
        for _ in 0..sample_size {
            let mut sample_sum = 0.0;
            let mut node = root.clone();
            node.apply_move(m, &grid);
            node.simulate_enemies(&grid);
            let mut moves: Vec<Option<Move>> = grid.available_moves(&node.pos)
                .iter().map(|&m| Some(m)).collect();
            moves.push(None);
            for m in &moves {
                sample_sum += move_score(&node, m, &grid, depth - 1);
            }
            score_sum += sample_sum / (moves.len() as f32);
        }
        score_sum / (sample_size as f32)
    }
}

impl Bot {
    pub fn pick_move(&self, game: &Game) -> Option<Move> {
        let mut moves: Vec<Option<Move>> = game.grid.available_moves(&game.pos)
            .iter().map(|&m| Some(m)).collect();
        moves.push(None);
        let node = SearchNode::new(game);
        moves.into_iter().max_by_key(|m| {
            let depth = 4;
            OrderedFloat(move_score(&node, m, &game.grid, depth))
        }).unwrap()
    }
}
