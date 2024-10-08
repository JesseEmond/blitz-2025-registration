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
    /// Must return actions if the state is not terminal.
    fn generate_actions(&self) -> Vec<Spec::Action>;
    /// Apply the given action, advance the state.
    fn apply_action(&mut self, action: Spec::Action);
    /// If the state is final and no further actions are possible.
    fn is_terminal(&self) -> bool;
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
pub struct Algorithm<'a, Spec: MCTS> {
    component: Box<dyn SearchComponent<Spec> + 'a>,
    params: SearchParams<Spec>,
}
impl<'a, Spec: MCTS> Algorithm<'a, Spec> {
    pub fn new(component: Box<dyn SearchComponent<Spec> + 'a>,
               params: SearchParams<Spec>) -> Self {
        Self { component, params }
    }

    /// Search from a given state. Only called once.
    pub fn search(mut self, state: &Spec::State) -> Results<Spec> {
        let mut actions = Vec::new();
        if !state.is_terminal() {
            while !self.params.search_is_done() {
                let prev_actions = Vec::new();
                actions = self.component.execute(&mut self.params, &state,
                                                 prev_actions);
            }
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
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
               prev_actions: Vec<Spec::Action>) -> Vec<Spec::Action>;
}

/// Follow a simulation policy until a terminal state or max configured rollout
/// length, yield the best sequence seen so far.
pub struct Simulate<Spec: MCTS> {
    policy: Spec::RolloutPolicy,
    yielder: Yielder<Spec>,
}
impl<Spec: MCTS> Simulate<Spec> {
    pub fn new(policy: Spec::RolloutPolicy) -> Self {
        Self { policy, yielder: Yielder::new() }
    }
}
impl<Spec: MCTS> SearchComponent<Spec> for Simulate<Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>,
               state: &Spec::State, prev_actions: Vec<Spec::Action>) -> Vec<Spec::Action> {
        if params.search_is_done() {
            return self.yielder.best_actions.clone();
        }
        let mut state = state.clone();
        let mut actions_seq = prev_actions;
        let mut rollout_len = 0;
        while !params.state_is_done(&state, rollout_len) {
            let actions = state.generate_actions();
            assert!(!actions.is_empty(), "Empty actions on non-terminal state");
            let action = self.policy.pick_action(&state, &actions);
            actions_seq.push(action.clone());
            state.apply_action(action);
            rollout_len += 1;
        }
        self.yielder.yield_best(params, &state, &actions_seq)
    }
}

/// Repeat a subcomponent a fixed amount of times, return the last iteration's
/// result.
pub struct Repeat<'a, Spec: MCTS> {
    times: usize,
    invoker: Invoker<'a, Spec>,
}
impl<'a, Spec: MCTS> Repeat<'a, Spec> {
    pub fn new(times: usize, subcomponent: Box<dyn SearchComponent<Spec> + 'a>) -> Self {
        assert!(times > 0);
        Self { times, invoker: Invoker::new(subcomponent) }
    }
}
impl<Spec: MCTS> SearchComponent<Spec> for Repeat<'_, Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>,
               state: &Spec::State, prev_actions: Vec<Spec::Action>) -> Vec<Spec::Action> {
        assert!(self.times > 0);
        for _ in 0..(self.times-1) {
            self.invoker.invoke(params, state, prev_actions.clone());
        }
        self.invoker.invoke(params, state, prev_actions)
    }
}

pub struct Step<'a, Spec: MCTS> {
    invoker: Invoker<'a, Spec>,
}
impl<'a, Spec: MCTS> Step<'a, Spec> {
    pub fn new(subcomponent: Box<dyn SearchComponent<Spec> + 'a>) -> Self {
        Self { invoker: Invoker::new(subcomponent) }
    }
}
impl<Spec: MCTS> SearchComponent<Spec> for Step<'_, Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>,
               state: &Spec::State, prev_actions: Vec<Spec::Action>) -> Vec<Spec::Action> {
        let mut rollout_length = 0;
        let mut actions_taken = prev_actions;
        let mut state = state.clone();
        while !params.state_is_done(&state, rollout_length) {
            let actions = self.invoker.invoke(params, &state, actions_taken.clone());
            if actions.is_empty() {
                // Should not normally happen, but might happen if e.g. we went
                // over the search budget. If so, early exit.
                assert!(!state.is_terminal());
                break;
            }
            assert!(actions.len() > rollout_length);
            let action = actions[rollout_length].clone();
            actions_taken.push(action.clone());
            state.apply_action(action);
            rollout_length += 1;
        }
        actions_taken
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
    pub fn search_is_done(&self) -> bool {
        self.budget.is_over_budget(&self.stats)
    }
    /// If we should stop simulating a state (i.e. terminal/at max rollouts).
    /// Components that simulate a state (e.g. 'Simulate' or 'Step') should use
    /// this to check for early-exit due to long rollouts.
    pub fn state_is_done(&self, state: &Spec::State, rollout_length: usize) -> bool {
        state.is_terminal() || self.max_rollout_length.map_or(
            false, |max| rollout_length >= max)
    }
}

/// YIELD (fig 2. in arXiv:1208.4692), eval a state, remember and return the
/// best sequence of actions seen so far.
pub struct Yielder<Spec: MCTS> {
    pub best_score: Score,
    pub best_actions: Vec<Spec::Action>,
}
impl<Spec: MCTS> Yielder<Spec> {
    fn new() -> Self {
        Self { best_score: Score::MIN, best_actions: Vec::new() }
    }
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

/// INVOKE (fig 2. in arXiv:1208.4692), helper to call a sub-search component.
/// Ensures that no sub-search algorithm is called when a state is terminal.
pub struct Invoker<'a, Spec: MCTS> {
    subcomponent: Box<dyn SearchComponent<Spec> + 'a>,
}
impl<'a, Spec: MCTS> Invoker<'a, Spec> {
    fn new(subcomponent: Box<dyn SearchComponent<Spec> + 'a>) -> Self {
        Self { subcomponent }
    }
    fn invoke(&mut self, params: &mut SearchParams<Spec>,
              state: &Spec::State, prev_actions: Vec<Spec::Action>) -> Vec<Spec::Action> {
        if state.is_terminal() {
            Vec::new()  // No new actions to follow, we're done.
        } else {
            self.subcomponent.execute(params, state, prev_actions)
        }
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

// Algorithm implementations

/// Sampling algorithm that simulates a random rollout policy over and over.
pub fn sampling_algorithm<'a, Spec: MCTS<RolloutPolicy = RandomPolicy> + 'a>(
    params: SearchParams<Spec>) -> Algorithm<'a, Spec> {
    // From https://arxiv.org/pdf/1208.4692 (7)
    Algorithm::new(Box::new(Simulate::new(RandomPolicy {})), params)
}

/// Sampling algorithm that simulates a random rollout policy N times, picks the
/// move that gave the best-score-so-far, then simulates from the next state.
pub fn iterative_sampling_algorithm<'a, Spec: MCTS<RolloutPolicy = RandomPolicy> + 'a>(
    params: SearchParams<Spec>, iterations_per_step: usize) -> Algorithm<'a, Spec> {
    // From https://arxiv.org/pdf/1208.4692 (8)
    let simulate = Box::new(Simulate::new(RandomPolicy {}));
    let repeat = Box::new(Repeat::new(iterations_per_step, simulate));
    let step = Box::new(Step::new(repeat));
    Algorithm::new(step, params)
}

#[cfg(test)]
mod tests {
    use super::*;

    struct MockMCTS;
    impl MCTS for MockMCTS {
        type Action = FakeAction;
        type State = MockState;
        type Evaluator = MockEval;
        type Budget = EvalCallsBudget;
        type RolloutPolicy = MockRollout;
    }

    /// Numbers game, state is a number, actions are additions/subtractions.
    #[derive(Clone)]
    struct MockState {
        number: i32,
        max_number: Option<i32>,
        expected_applies: Option<Vec<FakeAction>>,
    }
    impl SearchState<MockMCTS> for MockState {
        fn generate_actions(&self) -> Vec<FakeAction> {
            vec![-1, 0, 1]
        }
        fn apply_action(&mut self, action: FakeAction) {
            if let Some(expected) = &mut self.expected_applies {
                assert!(!expected.is_empty(),
                    "ran out of expected actions to apply. number: {} about to apply: {}",
                    self.number, action);
                let applied = expected.remove(0);
                assert_eq!(action, applied, "expected apply {applied}");
            }
            self.number += action;
        }
        fn is_terminal(&self) -> bool {
            if let Some(max) = self.max_number {
                self.number >= max
            } else {
                false
            }
        }
    }

    /// Number to add to 'number'.
    type FakeAction = i32;

    /// Mock search subcomponent.
    struct MockComponent {
        /// Predecided sequence of values to return.
        returns: Vec<Vec<FakeAction>>,
    }
    impl SearchComponent<MockMCTS> for MockComponent {
        fn execute(&mut self, _params: &mut SearchParams<MockMCTS>,
                   _state: &MockState) -> Vec<FakeAction> {
            assert!(!self.returns.is_empty());
            self.returns.remove(0)
        }
    }

    /// Eval that just returns 'number' -- higher is better.
    struct MockEval;
    impl Evaluator<MockMCTS> for MockEval {
        fn evaluate(&self, state: &MockState) -> Score {
            state.number as Score
        }
    }

    struct MockRollout;
    impl SimulationPolicy<MockMCTS> for MockRollout {
        fn pick_action(&self, _state: &MockState, _actions: &Vec<FakeAction>) -> FakeAction {
            1
        }
    }

    #[test]
    fn test_step_same_subsequence() {
        // subcomponent that keeps returning the same sequence of actions
        // (0 to 5)
        let mock = MockComponent {
            returns: vec![
                vec![0, 1, 2, 3, 4, 5],
                vec![0, 1, 2, 3, 4, 5],
                vec![0, 1, 2, 3, 4, 5],
                vec![0, 1, 2, 3, 4, 5],
                vec![0, 1, 2, 3, 4, 5],
            ]
        };
        let mut step = Box::new(Step::new(Box::new(mock)));
        let state = MockState {
            // Should gradually apply each state.
            expected_applies: Some(vec![0, 1, 2, 3, 4]),
            number: 0,
            max_number: Some(0 + 1 + 2 + 3 + 4),  // stop before 5
        };
        let mut params = SearchParams::<MockMCTS>::new(
            EvalCallsBudget { max_evals: 9999 },
            MockEval {});
        assert_eq!(step.execute(&mut params, &state), vec![0, 1, 2, 3, 4]);
    }

    #[test]
    fn test_step_subsequence_changes() {
        // subcomponent that returns the same sequence of actions (0 to 5),
        // until it switches to a different one (0, 1, 10, 100, 1000, 1000)
        // after seeing '1'.
        let mock = MockComponent {
            returns: vec![
                vec![0, 1, 2, 3, 4, 5],
                vec![0, 1, 2, 3, 4, 5],
                vec![0, 1, 10, 100, 1000, 10000],
                vec![0, 1, 10, 100, 1000, 10000],
                vec![0, 1, 10, 100, 1000, 10000],
                vec![0, 1, 10, 100, 1000, 10000],
                vec![0, 1, 10, 100, 1000, 10000],
            ]
        };
        let mut step = Box::new(Step::new(Box::new(mock)));
        let state = MockState {
            // Should gradually apply each state.
            expected_applies: Some(vec![0, 1, 10, 100, 1000]),
            number: 0,
            max_number: Some(1111),  // stop before 10_000
        };
        let mut params = SearchParams::<MockMCTS>::new(
            EvalCallsBudget { max_evals: 9999 },
            MockEval {});
        assert_eq!(step.execute(&mut params, &state),
                   vec![0, 1, 10, 100, 1000]);
    }
}
