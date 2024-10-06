use rand::seq::SliceRandom;
use crate::grid::{Move, Pos};
use crate::simulation::{Game, SimulationAction, State};

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

// TODO: Minimax is not needed now that it's a single player game again
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
        scores.max().unwrap()  // always maximize, no enemy turns
    }

    fn move_value(&self, state: &State, action: Option<Move>,
                  evaluator: &dyn Evaluator, depth: i8) -> Score {
        let mut state = state.clone();
        state.simulate_tick(SimulationAction::Move { direction: action });
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
    pub state: State,
}

impl Bot {
    /// Update state based on 'game', pick our next move, apply it locally.
    pub fn pick_move(&mut self, game: &Game) -> Option<Move> {
        self.state.verify_predictions(game);
        let strategy = MinimaxSearch { max_depth: 7 };
        let picked = strategy.choose_move(&self.state, &ThreatsAreFarEval{});
        self.state.simulate_tick(SimulationAction::Move { direction: picked });
        picked
    }

    /// Update state based on 'game', then apply given move.
    pub fn simulate(&mut self, game: &Game, direction: Option<Move>) {
        self.state.verify_predictions(game);
        self.state.simulate_tick(SimulationAction::Move { direction });
    }

    /// Update state based on 'game', then apply given MoveTo action.
    pub fn simulate_move_to(&mut self, game: &Game, position: &Pos) {
        self.state.verify_predictions(game);
        self.state.simulate_tick(SimulationAction::MoveTo { position: *position });
    }
}
