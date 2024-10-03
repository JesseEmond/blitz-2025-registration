use strum_macros::EnumIter;
use strum::IntoEnumIterator;

#[derive(EnumIter, Copy, Clone, Debug)]
pub enum Move {
    // Note: ordering here is deliberately matching the decompiled JS order
    // in getPossibleDirections: ["left", "right", "up", "down"]
    // Keeping this fixed helps with predicting randomness.
    // https://github.com/JesseEmond/blitz-2025-registration/blob/e2472c198b9ebea2e88ca07d6df8759f11fcaf4b/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L129
    Left,
    Right,
    Up,
    Down
}

#[derive(Copy, Clone, PartialEq, Debug)]
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

    pub fn manhattan_dist(&self, other: &Pos) -> usize {
        ((self.x - other.x).abs() + (self.y - other.y).abs()) as usize
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

#[derive(Clone)]
pub struct State<'a> {
    pub grid: &'a Grid,
    pub tick: usize,
    pub pos: Pos,
    pub threats: Vec<Threat>,
    pub game_over: bool,
    turn: usize,  // 0: player turn, 1+: turn for threat idx+1
}

impl State<'_> {
    pub fn new(game: &Game) -> State {
        let mut state = State {
            grid: &game.grid,
            tick: game.tick,
            pos: game.pos,
            threats: game.threats.clone(),
            game_over: false,
            turn: 0,
        };
        state.check_game_over();
        state
    }

    fn check_game_over(&mut self) {
        if !self.game_over {
            self.game_over = self.threats.iter().any(|t| t.pos == self.pos);
        }
    }

    fn get_tick_speed_map(&self) -> usize {
        // See https://github.com/JesseEmond/blitz-2025-registration/blob/e2472c198b9ebea2e88ca07d6df8759f11fcaf4b/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L55-L79
        match self.tick {
            901.. => 1,
            701..=900 => 2,
            501..=700 => 3,
            301..=500 => 4,
            0..=300 => 5,
        }
    }

    fn are_threats_moving(&self) -> bool {
        self.tick % self.get_tick_speed_map() == 0
    }

    fn is_turn_end(&self) -> bool {
        !self.are_threats_moving() || self.turn == 1 + self.threats.len()
    }

    pub fn is_player_turn(&self) -> bool {
        self.turn == 0
    }
    
    fn threat_turn(&self) -> &Threat {
        assert!(self.turn > 0);
        &self.threats[self.turn - 1]
    }

    fn threat_turn_mut(&mut self) -> &mut Threat {
        assert!(self.turn > 0);
        &mut self.threats[self.turn - 1]
    }

    pub fn generate_moves(&self) -> Vec<Option<Move>> {
        let mut moves = Vec::new();
        if self.is_player_turn() {
            moves.extend(self.grid.available_moves(&self.pos).iter().map(|&m| Some(m)));
        } else {
            moves.extend(self.grid.available_moves(&self.threat_turn().pos).iter().map(|&m| Some(m)));
        }
        moves.push(None);
        moves
    }

    pub fn apply(&mut self, action: Option<Move>) {
        // TODO: implement undo
        if let Some(m) = action {
            if self.is_player_turn() {
                self.pos = self.pos.moved(m);
            } else {
                self.threat_turn_mut().pos = self.threat_turn().pos.moved(m);
            }
            self.check_game_over();
        }
        self.turn += 1;
        if self.is_turn_end() {
            self.tick += 1;
            self.turn = 0;
        }
    }
}

