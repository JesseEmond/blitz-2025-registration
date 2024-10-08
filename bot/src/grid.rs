use std::cmp::Reverse;

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

pub type EmptyTile = usize;

#[derive(Clone)]
pub struct Grid {
    pub width: u8,
    pub height: u8,
    /// Dims: [x][y], true for walls
    pub tiles: Vec<Vec<bool>>,

    // Precomputed features of the grid on init.
    pub empty_tiles: Vec<Pos>,
    /// At [x][y], index in 'empty_tiles' (only valid for empty tiles).
    pub empty_tiles_lookup: Vec<Vec<EmptyTile>>,
    /// At an 'empty_tiles' index, neighbor indices.
    neighbors: Vec<Vec<EmptyTile>>,
    /// At an 'empty_tiles' index, available moves (Move analogous to neighbors).
    moves: Vec<Vec<Move>>,
    /// Used by hawk (sheriff.js).
    pub best_intersections: Vec<Pos>,
}

impl Grid {
    pub fn new(width: u8, height: u8, tiles: Vec<Vec<bool>>) -> Self {
        let mut empty_tiles = Vec::new();
        let mut empty_tiles_lookup = vec![
            vec![usize::MAX; height as usize]; width as usize];
        // Note: the order of the loops here matters (outer xs, inner ys), to
        // match the JS code for get_aggressive_path.
        // TODO: verify the above in unit test
        for x in 0..(width as usize) {
            for y in 0..(height as usize) {
                if !tiles[x][y] {
                    let idx = empty_tiles.len();
                    empty_tiles.push(Pos { x: x as i16, y: y as i16 });
                    empty_tiles_lookup[x][y] = idx;
                }
            }
        }
        let mut grid = Self {
            width, height, tiles, empty_tiles, empty_tiles_lookup,
            // The following are easier to compute with 'grid' helper functions.
            neighbors: Vec::new(),
            moves: Vec::new(),
            best_intersections: Vec::new(),
        };
        grid.neighbors = grid._compute_neighbors();
        grid.moves = grid._compute_moves();
        // Note: intersections computation assumes that neighbors are computed.
        grid.best_intersections = grid._compute_best_intersections();
        grid
    }

    pub fn available_moves(&self, from: &Pos) -> &Vec<Move> {
        &self.moves[self.empty_tile_idx(from) as usize]
    }

    pub fn get_neighbors(&self, from: EmptyTile) -> impl Iterator<Item = EmptyTile> + '_ {
        self.neighbors[from].iter().cloned()
    }

    pub fn is_empty(&self, pos: &Pos) -> bool {
        self.on_grid(pos) && !self.tiles[pos.x as usize][pos.y as usize]
    }

    pub fn on_grid(&self, pos: &Pos) -> bool {
        pos.x >= 0 && pos.x < self.width.into() && pos.y >= 0 && pos.y < self.height.into()
    }

    pub fn empty_tile_idx(&self, pos: &Pos) -> usize {
        assert!(self.is_empty(pos), "{:?} is not empty", pos);
        self.empty_tiles_lookup[pos.x as usize][pos.y as usize]
    }

    pub fn line_of_sight(&self, a: &Pos, b: &Pos) -> bool {
        if a.x == b.x {
            let start = a.y.min(b.y) + 1;
            let end = a.y.max(b.y) - 1;
            (start..=end).all(|y| !self.tiles[a.x as usize][y as usize])
        } else if a.y == b.y {
            let start = a.x.min(b.x) + 1;
            let end = a.x.max(b.x) - 1;
            (start..=end).all(|x| !self.tiles[x as usize][a.y as usize])
        } else {
            false
        }
    }

    fn get_intersections(&self) -> Vec<Pos> {
        // Note: order here assumes outer loop on xs, inner loop on ys.
        // 'empty_tiles' fits that profile.
        self.empty_tiles.iter().enumerate()
            .filter(|&(i, _)| self.get_neighbors(i).count() >= 3)
            .map(|(_, pos)| pos).cloned()
            .collect()
    }

    fn get_row_length(&self, pos: &Pos) -> usize {
        let mut row_length = 0;
        row_length += (0..pos.y).rev()
            .take_while(|&y| !self.tiles[pos.x as usize][y as usize]).count();
        row_length += ((pos.y+1)..self.height as i16)
            .take_while(|&y| !self.tiles[pos.x as usize][y as usize]).count();
        row_length += (0..pos.x).rev()
            .take_while(|&x| !self.tiles[x as usize][pos.y as usize]).count();
        row_length += ((pos.x+1)..self.width as i16)
            .take_while(|&x| !self.tiles[x as usize][pos.y as usize]).count();
        row_length
    }

    fn _compute_neighbors(&self) -> Vec<Vec<EmptyTile>> {
        self.empty_tiles.iter()
            .map(|p| {
                Move::iter()
                    .map(|m| p.moved(m))
                    .filter(|n| self.is_empty(n))
                    .map(|n| self.empty_tile_idx(&n))
                    .collect()
            }).collect()
    }

    fn _compute_moves(&self) -> Vec<Vec<Move>> {
        self.empty_tiles.iter()
            .map(|p| {
                Move::iter()
                    .filter(|&m| self.is_empty(&p.moved(m)))
                    .collect()
            }).collect()
    }
    
    fn _compute_best_intersections(&self) -> Vec<Pos> {
        let mut intersections = self.get_intersections();
        intersections.sort_by_key(|p| Reverse(self.get_row_length(p)));
        intersections.into_iter().take(10).collect()
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

#[allow(dead_code)] 
pub fn debug_print(grid: &Grid, highlights: Vec<(&Pos, char)>) {
    for y in 0..(grid.height as i16) {
        for x in 0..(grid.width as i16) {
            let pos = Pos { x, y };
            let highlight = highlights.iter()
                .filter(|(&p, _)| p == pos)
                .map(|(_, c)| c)
                .next();
            if let Some(c) = highlight {
                print!("{}", c);
            } else if grid.is_empty(&pos) {
                print!(" ");
            } else {
                print!("#");
            }
        }
        println!();
    }
}

