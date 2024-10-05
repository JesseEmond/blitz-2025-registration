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
        let mut neighbors = Vec::new();
        for p in &empty_tiles {
            let mut pos_neighbors = Vec::new();
            for m in Move::iter() {
                let n = p.moved(m);
                if n.x < 0 || n.x >= width as i16 || n.y < 0 || n.y >= height as i16 {
                    continue;
                }
                if !tiles[n.x as usize][n.y as usize] {
                    let idx = empty_tiles_lookup[n.x as usize][n.y as usize];
                    pos_neighbors.push(idx);
                }
            }
            neighbors.push(pos_neighbors);
        }
        Self { width, height, tiles, empty_tiles, empty_tiles_lookup, neighbors }
    }

    pub fn available_moves(&self, from: &Pos) -> Vec<Move> {
        Move::iter()
            .filter(|&m| self.is_empty(&from.moved(m)))
            .collect()
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

#[allow(dead_code)] 
fn debug_print(grid: &Grid, highlights: Vec<(&Pos, char)>) {
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

