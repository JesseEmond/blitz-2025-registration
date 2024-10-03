use rand::seq::SliceRandom;
use strum::IntoEnumIterator;
use strum_macros::EnumIter;

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

    fn manhattan_dist(&self, other: &Pos) -> usize {
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
struct State<'a> {
    grid: &'a Grid,
    tick: usize,
    pos: Pos,
    threats: Vec<Threat>,
    game_over: bool,
    turn: usize,  // 0: player turn, 1+: turn for threat idx+1
}

impl State<'_> {
    fn new(game: &Game) -> State {
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

    fn is_player_turn(&self) -> bool {
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

    fn generate_moves(&self) -> Vec<Option<Move>> {
        let mut moves = Vec::new();
        if self.is_player_turn() {
            moves.extend(self.grid.available_moves(&self.pos).iter().map(|&m| Some(m)));
        } else {
            moves.extend(self.grid.available_moves(&self.threat_turn().pos).iter().map(|&m| Some(m)));
        }
        moves.push(None);
        moves
    }

    fn apply(&mut self, action: Option<Move>) {
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

type Score = i32;

trait Evaluator {
    /// Higher is better for the player.
    fn evaluate(&self, state: &State) -> Score;
}

/// Example eval where our both should move right when it can.
struct MoveRightEval;
impl Evaluator for MoveRightEval {
    fn evaluate(&self, state: &State) -> Score {
        state.pos.x as Score
    }
}
struct MoveRightAliveEval;
impl Evaluator for MoveRightAliveEval {
    fn evaluate(&self, state: &State) -> Score {
        if !state.game_over {
            state.pos.x as Score
        } else {
            -50000 + state.tick as Score
        }
    }
}

struct ThreatsAreFarEval;
impl Evaluator for ThreatsAreFarEval {
    fn evaluate(&self, state: &State) -> Score {
        if !state.game_over {
            // TODO: Worth doing a proper pathfinding distance?
            state.threats.iter().map(|t| t.pos.manhattan_dist(&state.pos))
                .min().unwrap() as Score
        } else {
            -50000 + state.tick as Score
        }
    }
}

trait Search {
    fn choose_move(&self, state: &State, evaluator: &dyn Evaluator) -> Option<Move>;
}

/// Example search implementation that just picks the first available move.
struct FirstMoveSearch;
impl Search for FirstMoveSearch {
    fn choose_move(&self, state: &State, _evaluator: &dyn Evaluator) -> Option<Move> {
        return state.generate_moves()[0]
    }
}

struct MinimaxSearch {
    max_depth: i8,
}
impl MinimaxSearch {
    fn search(&self, state: &State, evaluator: &dyn Evaluator, depth: i8) -> Score {
        if depth == 0 || state.game_over {
            return evaluator.evaluate(state);
        }
        let scores = state.generate_moves().into_iter()
                .map(|m| self.move_value(state, m, evaluator, depth));
        let score = if state.is_player_turn() { scores.max() } else { scores.min() };
        score.unwrap()
    }

    fn move_value(&self, state: &State, action: Option<Move>,
                  evaluator: &dyn Evaluator, depth: i8) -> Score {
        let mut state = state.clone();
        state.apply(action);
        self.search(&state, evaluator, depth - 1)
    }

    fn get_max_score_moves<F>(&self, moves: Vec<Option<Move>>, score_fn: F) -> Vec<Option<Move>> where 
        F: Fn(Option<Move>) -> Score {
        let move_scores: Vec<Score> = moves.iter().cloned().map(score_fn).collect();
        let max_score = *move_scores.iter().max().unwrap();
        moves.iter().zip(move_scores.iter())
            .filter(|(_, &s)| s == max_score)
            .map(|(&m, _)| m)
            .collect()
    }
}
impl Search for MinimaxSearch {
    fn choose_move(&self, state: &State, evaluator: &dyn Evaluator) -> Option<Move> {
        // If we just pick the one with the highest score, we might end up with
        // "lazy" moves, where both a move and None could get to a position at
        // depth D. To make this less common, of the best final moves, greedily
        // pick the next moves. For equal greediness, randomly pick.
        let moves = state.generate_moves();
        let best_moves = self.get_max_score_moves(
            moves, |m| self.move_value(state, m, evaluator, self.max_depth));
        let greedy_moves = self.get_max_score_moves(
            best_moves, |m| self.move_value(state, m, evaluator, 1));
        *greedy_moves.choose(&mut rand::thread_rng()).unwrap()
    }
}

pub struct Bot {
}

impl Bot {
    pub fn pick_move(&self, game: &Game) -> Option<Move> {
        // TODO: optim while we don't clone rng: remove unreachable threats
        let state = State::new(game);
        let strategy = MinimaxSearch { max_depth: 10 };
        strategy.choose_move(&state, &ThreatsAreFarEval{})
    }
}
