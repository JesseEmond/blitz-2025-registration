/// Implementation of Monte Carlo Tree Search (MCTS), using subcomponents from
/// https://arxiv.org/pdf/1208.4692, allowing for a meta search over the MCTS
/// search structure.
// TODO: usage example
// TODO: split to its own module, put interfaces vs. implementations in diff files

use rand::seq::SliceRandom;
use std::time::{Duration, Instant};


// Components that users must define to use the search.

/// Trait to implement to define types the search works on.
pub trait MCTS: Sized {
    // Game related
    /// Possible action that can be done at a particular state.
    type Action: Clone;
    /// State of the game.
    type State: Clone + SearchState<Self>;
    /// Evaluator of a state's goodness.

    // Search related
    type Evaluator: Evaluator<Self>;
    /// Policy to use while picking moves during playout simulation.
    type RolloutPolicy: SimulationPolicy<Self>;
    /// Budget constraining the search.
    type Budget: SearchBudget;
}

/// State within the game.
pub trait SearchState<Spec: MCTS> {
    // TODO: optionally allow apply/undo, for optimization?
    /// Possible actions in this current state.
    /// Return no actions if this state is terminal.
    fn generate_actions(&self) -> Vec<Spec::Action>;
    /// Apply the given action, advance the state.
    fn apply_action(&mut self, action: Spec::Action);
}

pub type Score = f32;
pub trait Evaluator<Spec: MCTS> {
    /// Goodness score of this state. Higher is better.
    fn evaluate(&self, state: &Spec::State) -> Score;
}


// Optionally customizable components to improve the search.
// Existing implementations available lower.

/// Rollout policy for picking moves during simulation.
pub trait SimulationPolicy<Spec: MCTS> {
    /// For a given state, pick the next action to take.
    fn pick_action(&self, state: &Spec::State, actions: &Vec<Spec::Action>) -> Spec::Action;
}

/// Search budget, called onced per evaluation function evaluation to decide if
/// the search should proceed.
pub trait SearchBudget {
    fn is_over_budget(&self, stats: &Stats) -> bool;
}


// Algorithm that drives the search. Made up of composable components.
pub struct Algorithm<Spec: MCTS> {
    component: Box<dyn SearchComponent<Spec>>,
    params: SearchParams<Spec>,
}
impl<Spec: MCTS> Algorithm<Spec> {
    pub fn new(component: Box<dyn SearchComponent<Spec>>,
               params: SearchParams<Spec>) -> Self {
        Self { component, params }
    }

    /// Search from a given state. Only called once.
    pub fn search(mut self, state: &Spec::State) -> Results<Spec> {
        let mut actions = Vec::new();
        while !self.params.is_done() {
            actions = self.component.execute(&mut self.params, &state);
        }
        Results { stats: self.params.stats, actions }
    }
}
pub struct Results<Spec: MCTS> {
    pub stats: Stats,
    actions: Vec<Spec::Action>,
}
impl<Spec: MCTS> Results<Spec> {
    pub fn next_action(&self) -> Option<Spec::Action> {
        self.actions.iter().next().cloned()
    }
}
pub struct Stats {
    pub num_evals: usize,
    pub highest_score_seen: Score,
    pub started_time: Instant,
}
impl Stats {
    fn new() -> Self {
        Self {
            num_evals: 0,
            started_time: Instant::now(),
            highest_score_seen: Score::MIN,
        }
    }
    fn on_evaluation(&mut self, score: Score) {
        self.num_evals += 1;
        self.highest_score_seen = self.highest_score_seen.max(score);
    }
}


// Meta components of the search algorihtms.

/// Component within a search algorithm (examples: simulate, repeat, select, etc.)
/// This is effectively an element of the grammar of MCTS search algorithms.
pub trait SearchComponent<Spec: MCTS> {
    /// Executes the component (ensuring to check the budget) at a given state.
    /// Returns the next sequence of actions picked by this component.
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State) -> Vec<Spec::Action>;
}

/// Follow a simulation policy until a terminal state, yield the best sequence
/// seen so far.
pub struct Simulate<Spec: MCTS> {
    policy: Spec::RolloutPolicy,
    yielder: Yielder<Spec>,
}

impl<Spec: MCTS> SearchComponent<Spec> for Simulate<Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>,
               state: &Spec::State) -> Vec<Spec::Action> {
        if params.is_done() {
            return self.yielder.best_actions.clone();
        }
        let mut state = state.clone();
        let mut actions_seq = Vec::new();
        let mut rollout_len = 0;
        loop {
            if params.max_rollout_length.map_or(false, |max| rollout_len >= max) {
                break;
            }
            let actions = state.generate_actions();
            if actions.is_empty() { break; }
            let action = self.policy.pick_action(&state, &actions);
            actions_seq.push(action.clone());
            state.apply_action(action);
            rollout_len += 1;
        }
        self.yielder.yield_best(params, &state, &actions_seq)
    }
}

impl<Spec: MCTS> Simulate<Spec> {
    pub fn new(policy: Spec::RolloutPolicy) -> Self {
        Self { policy, yielder: Yielder::new() }
    }
}

// Helper for component implementations
/// Parameters fixed for a search algorithm.
pub struct SearchParams<Spec: MCTS> {
    budget: Spec::Budget,
    evaluator: Spec::Evaluator,
    stats: Stats,
    // If set, a rollout that lasts this many steps will be considered terminal
    max_rollout_length: Option<usize>,
}

impl<Spec: MCTS> SearchParams<Spec> {
    pub fn new(budget: Spec::Budget, evaluator: Spec::Evaluator) -> Self {
        Self { budget, evaluator, stats: Stats::new(), max_rollout_length: None }
    }
    /// Consider a state terminal if its rollout length lasts this long.
    pub fn set_max_rollout_length(&mut self, length: usize) {
        self.max_rollout_length = Some(length);
    }
    /// Evaluate a given state for its score.
    pub fn evaluate(&mut self, state: &Spec::State) -> Score {
        let score = self.evaluator.evaluate(state);
        self.stats.on_evaluation(score);
        score
    }
    /// If we should stop the search (over budget).
    pub fn is_done(&self) -> bool {
        self.budget.is_over_budget(&self.stats)
    }
}

/// YIELD (fig 2. in arXiv:1208.4692), eval a state, remember and return the
/// best sequence of actions seen so far.
pub struct Yielder<Spec: MCTS> {
    pub best_score: Score,
    pub best_actions: Vec<Spec::Action>,
}

impl<Spec: MCTS> Yielder<Spec> {
    fn yield_best(
        &mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
        actions: &Vec<Spec::Action>) -> Vec<Spec::Action> {
        let score = params.evaluate(state);
        if score > self.best_score {
            self.best_score = score;
            self.best_actions = actions.clone();
        }
        self.best_actions.clone()
    }
}

impl<Spec: MCTS> Yielder<Spec> {
    fn new() -> Self {
        Self { best_score: Score::MIN, best_actions: Vec::new() }
    }
}

// Budget implementations 

/// Keep searching until we do N calls to the evaluator function.
pub struct EvalCallsBudget {
    pub max_evals: usize,
}
impl SearchBudget for EvalCallsBudget {
    fn is_over_budget(&self, stats: &Stats) -> bool {
        stats.num_evals >= self.max_evals
    }
}
/// Search for this much time at most.
pub struct TimeBudget {
    pub max_time: Duration,
}
impl SearchBudget for TimeBudget {
    fn is_over_budget(&self, stats: &Stats) -> bool {
        stats.started_time.elapsed() >= self.max_time
    }
}

// TODO: RAM usage budget
// TODO: Combination budget (combine CPU + RAM)


// Policy implementations 

/// Rollout policy that picks actions at random.
pub struct RandomPolicy;

impl<Spec: MCTS> SimulationPolicy<Spec> for RandomPolicy {
    fn pick_action(&self, _state: &Spec::State,
                   actions: &Vec<Spec::Action>) -> Spec::Action {
        actions.choose(&mut rand::thread_rng()).unwrap().clone()
    }
}

// TODO: greedy policy, using evaluator
