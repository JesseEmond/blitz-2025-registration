use crate::grid::{Move, Pos};
use crate::mcts;
use crate::simulation::{Game, SimulationAction, State};

// Note that below we implement mcts traits for more than just this file's
// "MCTS", to allow reuse with variants of "MCTS"
// (e.g. in unit tests/benchmarks that use a different search budget).

/// Example eval where our both should move right when it can.
struct MoveRightEval;
impl<Spec: mcts::MCTS<State = State>> mcts::Evaluator<Spec> for MoveRightEval {
    fn evaluate(&self, state: &Spec::State) -> mcts::Score {
        state.pos.x as mcts::Score
    }
}
struct MoveRightAliveEval;
impl<Spec: mcts::MCTS<State = State>> mcts::Evaluator<Spec> for MoveRightAliveEval {
    fn evaluate(&self, state: &Spec::State) -> mcts::Score {
        if !state.game_over {
            state.pos.x as mcts::Score
        } else {
            -50000 as mcts::Score + state.tick as mcts::Score
        }
    }
}

pub struct ThreatsAreFarEval;
impl<Spec: mcts::MCTS<State = State>> mcts::Evaluator<Spec> for ThreatsAreFarEval {
    fn evaluate(&self, state: &Spec::State) -> mcts::Score {
        if !state.game_over {
            // TODO: Worth doing a proper pathfinding distance?
            state.threats.iter().map(|t| t.pos.manhattan_dist(&state.pos))
                .min().unwrap() as mcts::Score
        } else {
            -50000 as mcts::Score + state.tick as mcts::Score
        }
    }
}

pub struct TicksSurvivedEval;
impl<Spec: mcts::MCTS<State = State>> mcts::Evaluator<Spec> for TicksSurvivedEval {
    fn evaluate(&self, state: &Spec::State) -> mcts::Score {
        // Even if game is not done, return current tick number as guidance.
        state.tick as mcts::Score
    }
}

impl<Spec: mcts::MCTS<State = State, Action = Action>>
mcts::SearchState<Spec> for State {
    fn generate_actions(&self) -> Vec<Action> {
        self.generate_moves()
    }
    fn is_terminal(&self) -> bool {
        self.game_over
    }
    fn apply_action(&mut self, action: Action) {
        self.simulate_tick(SimulationAction::Move { direction: action });
    }
}


pub type Action = Option<Move>;

struct MCTS;
impl mcts::MCTS for MCTS {
    type Action = Action;
    type State = State;
    type Evaluator = TicksSurvivedEval;
    type Budget = mcts::TimeBudget;
    type RolloutPolicy = mcts::RandomPolicy;
}

pub struct Bot {
    pub seed: u64,
    pub state: State,
}

impl Bot {
    /// Update state based on 'game', pick our next move, apply it locally.
    pub fn pick_move(&mut self, game: &Game) -> Option<Move> {
        self.state.verify_predictions(game);
        let results = self.search_next_move();
        println!("Search did {} evals, best score: {}",
                 results.stats.num_evals, results.stats.highest_score_seen);
        let picked = results.next_action().expect("search empty results");

        self.state.simulate_tick(SimulationAction::Move { direction: picked });
        picked
    }

    /// Pick our next move and apply it locally, silently.
    pub fn self_play_tick(&mut self) -> mcts::Stats {
        let results = self.search_next_move();
        let action = results.next_action().expect("empty search");
        self.state.simulate_tick(SimulationAction::Move { direction: action });
        results.stats
    }

    fn search_next_move(&mut self) -> mcts::Results<MCTS> {
        let params = mcts::SearchParams::<MCTS>::new(
            mcts::TimeBudget { max_time: std::time::Duration::from_millis(75) },
            TicksSurvivedEval {},
            self.seed);
        // let algorithm = mcts::uct_algorithm(params, 2_f32.sqrt(), 100);
        let algorithm = mcts::sampling_algorithm(params);
        algorithm.search(&self.state)
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
