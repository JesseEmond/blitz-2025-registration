use std::sync::Arc;
use strum_macros::EnumIter;
use strum::IntoEnumIterator;

// Styles map to internal names in the JS here:
// https://github.com/JesseEmond/blitz-2025-registration/blob/7afcfb849b990caa69cee0f83ae96aae6f49740f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L452C80-L452C88
#[derive(Copy, Clone, Debug)]
pub enum Style {
    /// Aka "girouette"
    Goldfish,
    /// Aka "straitHead"
    Bull,
    /// Aka "aggressive"
    Shark,
    /// Aka "surveillance"
    Owl,
    /// Aka "le_fantome_orange_dans_pacman"
    Deer,
    /// Aka "sheriff"
    Hawk,
}

#[derive(EnumIter, Copy, Clone, Debug)]
pub enum Move {
    Up,
    Down,
    Left,
    Right,
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

#[derive(Clone)]
pub struct Grid {
    pub width: u8,
    pub height: u8,
    /// Dims: [x][y], true for walls
    pub tiles: Vec<Vec<bool>>,
}

impl Grid {
    fn available_moves(&self, from: &Pos) -> Vec<Move> {
        Move::iter()
            .filter(|&m| self.is_empty(&from.moved(m)))
            .collect()
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
    pub style: Style,
    seed: usize,
}

impl Threat {
    pub fn new(pos: Pos, style: Style) -> Self {
        let mut t = Threat { pos, style, seed: 0 };
        t._next_rand();  // Generate a random direction
        t
    }

    fn simulate(&mut self, tick: usize, player: &Pos, grid: &Grid) {
        if tick % Self::move_every_n_ticks(tick) != 0 {
            return;
        }
        let prev_pos = self.pos;
        match self.style {
            Style::Goldfish => {
                // See girouette.js
                let directions = self.get_possible_directions(grid);
                let o = self._next_rand() * directions.len() as f64;
                let idx = o.floor();
                let pos = self.pos;
                self.pos = self.pos.moved(directions[idx as usize]);
            },
            _ => ()  // TODO: implement other styles
        }
        // TODO: remove once confidence in preditions
        println!("{:?} will move from {:?} to {:?}", self.style, prev_pos, self.pos);
    }

    fn move_every_n_ticks(tick: usize) -> usize {
        // See https://github.com/JesseEmond/blitz-2025-registration/blob/e2472c198b9ebea2e88ca07d6df8759f11fcaf4b/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L55-L79
        match tick {
            901.. => 1,
            701..=900 => 2,
            501..=700 => 3,
            301..=500 => 4,
            0..=300 => 5,
        }
    }

    fn get_possible_directions(&self, grid: &Grid) -> Vec<Move> {
        // Same order as getPossibleDirections: ["left", "right", "up", "down"]
        // https://github.com/JesseEmond/blitz-2025-registration/blob/e2472c198b9ebea2e88ca07d6df8759f11fcaf4b/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L129
        [Move::Left, Move::Right, Move::Up, Move::Down].into_iter()
            .filter(|&m| grid.is_empty(&self.pos.moved(m)))
            .collect()
    }

    fn _next_rand(&mut self) -> f64 {
        let seed = self.seed;
        self.seed += 1;
        let x = (seed as f64).sin() * 10000.0;
        x - x.floor()
    }
}

pub struct Game {
    pub tick: usize,
    pub pos: Pos,
    pub grid: Grid,
    pub threats: Vec<Threat>,
    pub alive: bool,
}

#[derive(Clone)]
pub struct State {
    pub grid: Arc<Grid>,
    pub tick: usize,
    pub pos: Pos,
    pub threats: Vec<Threat>,
    pub game_over: bool,
    turn: usize,  // 0: player turn, 1+: turn for threat idx+1
}

impl State {
    pub fn new(game: Game) -> State {
        let mut state = State {
            grid: Arc::new(game.grid),
            tick: game.tick,
            pos: game.pos,
            threats: game.threats.clone(),
            game_over: !game.alive,
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

    fn are_threats_moving(&self) -> bool {
        self.tick % Threat::move_every_n_ticks(self.tick) == 0
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

    /// Similar to 'apply', but directly replicates the server tick logic.
    pub fn simulate_tick(&mut self, action: Option<Move>) {
        self.check_game_over();
        if let Some(m) = action {
            self.pos = self.pos.moved(m);
        }
        for t in &mut self.threats {
            t.simulate(self.tick, &self.pos, &self.grid);
        }
        self.tick += 1;
    }
}

