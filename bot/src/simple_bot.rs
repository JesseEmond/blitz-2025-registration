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

pub struct Threat {
    pub pos: Pos,
    // TODO: Integrate 'style' here, once we know how to use them.
}

pub struct Game {
    pub pos: Pos,
    pub grid: Grid,
    pub threats: Vec<Threat>,
}

pub struct Bot {
}

impl Bot {
    pub fn pick_move(&self, game: &Game) -> Option<Move> {
        let mut moves: Vec<Option<Move>> = game.grid.available_moves(&game.pos)
            .iter().map(|&m| Some(m)).collect();
        moves.push(None);
        moves.choose(&mut rand::thread_rng()).cloned().unwrap()
    }
}
