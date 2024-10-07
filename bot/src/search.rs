use crate::grid::{Move, Pos};
use crate::mcts;
use crate::simulation::{Game, SimulationAction, State};

/// Example eval where our both should move right when it can.
struct MoveRightEval;
impl mcts::Evaluator<MCTS> for MoveRightEval {
    fn evaluate(&self, state: &State) -> mcts::Score {
        state.pos.x as mcts::Score
    }
}
struct MoveRightAliveEval;
impl mcts::Evaluator<MCTS> for MoveRightAliveEval {
    fn evaluate(&self, state: &State) -> mcts::Score {
        if !state.game_over {
            state.pos.x as mcts::Score
        } else {
            -50000 as mcts::Score + state.tick as mcts::Score
        }
    }
}

struct ThreatsAreFarEval;
impl mcts::Evaluator<MCTS> for ThreatsAreFarEval {
    fn evaluate(&self, state: &State) -> mcts::Score {
        if !state.game_over {
            // TODO: Worth doing a proper pathfinding distance?
            state.threats.iter().map(|t| t.pos.manhattan_dist(&state.pos))
                .min().unwrap() as mcts::Score
        } else {
            -50000 as mcts::Score + state.tick as mcts::Score
        }
    }
}

type Action = Option<Move>;

struct MCTS;
impl mcts::MCTS for MCTS {
    type Action = Action;
    type State = State;
    type Evaluator = ThreatsAreFarEval;
    type Budget = mcts::TimeBudget;
    type RolloutPolicy = mcts::RandomPolicy;
}

impl mcts::SearchState<MCTS> for State {
    fn generate_actions(&self) -> Vec<Action> {
        self.generate_moves()
    }
    fn apply_action(&mut self, action: Action) {
        self.simulate_tick(SimulationAction::Move { direction: action });
    }
}

pub struct Bot {
    pub state: State,
}

impl Bot {
    /// Update state based on 'game', pick our next move, apply it locally.
    pub fn pick_move(&mut self, game: &Game) -> Option<Move> {
        self.state.verify_predictions(game);
        // TODO: Algorithm definition should be within the mcts namespace
        // From https://arxiv.org/pdf/1208.4692 , this is like iterative
        // sampling.
        let simulate = mcts::Simulate::<MCTS>::new(mcts::RandomPolicy {});
        let params = mcts::SearchParams::<MCTS>::new(
            mcts::TimeBudget { max_time: std::time::Duration::from_millis(75) },
            ThreatsAreFarEval {});
        let algorithm = mcts::Algorithm::<MCTS>::new(Box::new(simulate), params);
        let results = algorithm.search(&self.state);
        let picked = results.next_action().expect("search empty results");

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
