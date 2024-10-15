/// Implementation of Monte Carlo Tree Search (MCTS), using subcomponents from
/// https://arxiv.org/pdf/1208.4692, allowing for a meta search over the Monte
/// Carlo Search grammar.
///
/// Example usage:
///   struct MyMCTS;
///   impl mcts::MCTS for MyMCTS {
///     type Action = MyAction;
///     type State = MyState;
///     type Evaluator = MyEvaluator;
///     type Budget = mcts::TimeBudget;
///     type RolloutPolicy = mcts::RandomPolicy;
///   }
///   // ...
///   let params = mcts::SearchParams::<MyMCTS>::new(
///     mcts::TimeBudget { max_time: std::time::Duration::from_millis(75) },
///     MyEvaluator{});
///   let algorithm = mcts::sampling_algorithm(params);
///   let next_move = algorithm.search(&my_state).next_action();
// TODO: split to its own module, put interfaces vs. implementations in diff files

use rand::SeedableRng;
use rand::seq::IteratorRandom;
use rand_chacha::ChaCha8Rng;
use std::time::{Duration, Instant};

use ordered_float::OrderedFloat;


// Components that users must define to use the search.

/// Trait to implement to define types the search works on.
pub trait MCTS: Sized {
    // Game related
    /// Possible action that can be done at a particular state.
    type Action: Clone + PartialEq;
    /// State of the game.
    type State: Clone + SearchState<Self>;
    /// Possible actions at a given state.
    /// Configurable to allow optimized states (e.g. smallvec)
    type ActionSpace: std::ops::Deref<Target = [Self::Action]> + IntoIterator<Item = Self::Action>;

    // Search related
    /// Evaluator of a state's goodness.
    type Evaluator: Evaluator<Self>;
    /// Policy to use while picking moves during playout simulation.
    type RolloutPolicy: SimulationPolicy<Self>;
    /// Budget constraining the search.
    type Budget: SearchBudget;
}

/// State within the game.
pub trait SearchState<Spec: MCTS> {
    /// Possible actions in this current state.
    /// Must return actions if the state is not terminal.
    fn generate_actions(&self) -> Spec::ActionSpace;
    /// Apply the given action, advance the state.
    fn apply_action(&mut self, action: Spec::Action);
    /// If the state is final and no further actions are possible.
    fn is_terminal(&self) -> bool;
}

pub type Score = f32;
pub trait Evaluator<Spec: MCTS> {
    /// Goodness score of this state. Higher is better.
    /// Note: 'state' might not be terminal.
    fn evaluate(&self, state: &Spec::State) -> Score;
}


// Optionally customizable components to improve the search.
// Existing implementations available lower.

/// Rollout policy for picking moves during simulation.
pub trait SimulationPolicy<Spec: MCTS> {
    /// For a given state, pick the index of the next action to take.
    fn pick_action(&mut self, state: &Spec::State, actions: &Spec::ActionSpace) -> usize;
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
    pub fn search(mut self, state: &Spec::State) -> Results {
        let mut outcome = Outcome::new();
        while !self.params.search_is_done() && !state.is_terminal() {
            let decided = Vec::new();
            self.component.reset(&decided);
            outcome.update_best(
                self.component.execute(&mut self.params, &state, decided));
        }
        let mut score = outcome.score;
        // Evaluate current state's score if we did not have time to search.
        if outcome.is_empty() {
            score = self.params.evaluate(state);
        }
        Results { stats: self.params.stats, action_indices: outcome.actions, score }
    }
}
pub struct Results {
    pub stats: Stats,
    pub score: Score,
    action_indices: Vec<usize>,
}
impl Results {
    pub fn next_action<Spec: MCTS>(&self, state: &Spec::State) -> Option<Spec::Action> {
        self.action_indices.iter().next()
            .map(|&idx| state.generate_actions()[idx].clone())
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

/// Outcome of a sub-search component.
#[derive(Clone)]
pub struct Outcome {
    /// Full sequence of actions picked by the search component.
    pub actions: Vec<usize>,
    /// Score obtained in the process.
    pub score: Score,
}
impl Outcome {
    fn new() -> Self {
        Self { score: Score::MIN, actions: Vec::new() }
    }
    fn update_best(&mut self, mut other: Outcome) {
        if other.score > self.score {
            std::mem::swap(self, &mut other);
        }
    }
    fn is_empty(&self) -> bool {
        self.actions.is_empty()
    }
}

/// Component within a search algorithm (examples: simulate, repeat, select, etc.)
/// This is effectively an element of the grammar of MCTS search algorithms.
pub trait SearchComponent<Spec: MCTS> {
    /// Executes the component (ensuring to check the budget) at a given state.
    /// Assumption: returns the best sequence of actions seen so far by this
    /// component.
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
               decided: Vec<usize>) -> Outcome;
    /// Must be called every time 'decided' is changed.
    fn reset(&mut self, decided: &Vec<usize>);
}

/// Follow a simulation policy until a terminal state or max configured rollout
/// length, yield the best sequence seen so far.
pub struct Simulate<Spec: MCTS> {
    policy: Spec::RolloutPolicy,
    yielder: Yielder,
}
impl<Spec: MCTS> Simulate<Spec> {
    pub fn new(policy: Spec::RolloutPolicy) -> Self {
        Self { policy, yielder: Yielder::new() }
    }
}
impl<Spec: MCTS> SearchComponent<Spec> for Simulate<Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
               decided: Vec<usize>) -> Outcome {
        if params.search_is_done() || params.state_is_done(&state, decided.len()) {
            return self.yielder.best.clone();
        }
        let mut decided = decided;
        let mut state = state.clone();
        while !params.state_is_done(&state, decided.len()) {
            let state_actions = state.generate_actions();
            let action_idx = self.policy.pick_action(&state, &state_actions);
            decided.push(action_idx);
            state.apply_action(state_actions[action_idx].clone());
            self.reset(&decided);
        }
        self.yielder.yield_best(params, &state, decided).clone()
    }
    fn reset(&mut self, _decided: &Vec<usize>) {
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
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
               decided: Vec<usize>) -> Outcome {
        let mut best_outcome = Outcome::new();
        for _ in 0..self.times {
            if params.search_is_done() { break; }
            best_outcome.update_best(
                self.invoker.invoke(params, state, decided.clone()));
        }
        best_outcome
    }
    fn reset(&mut self, decided: &Vec<usize>) {
        self.invoker.reset(decided);
    }
}

/// For the remainder of the steps, run a sub-search to pick the next action.
pub struct Step<'a, Spec: MCTS> {
    invoker: Invoker<'a, Spec>,
}
impl<'a, Spec: MCTS> Step<'a, Spec> {
    pub fn new(subcomponent: Box<dyn SearchComponent<Spec> + 'a>) -> Self {
        Self { invoker: Invoker::new(subcomponent) }
    }
}
impl<Spec: MCTS> SearchComponent<Spec> for Step<'_, Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
               decided: Vec<usize>) -> Outcome {
        let mut decided = decided;
        let mut state = state.clone();
        let mut best_outcome = Outcome::new();
        while !params.state_is_done(&state, decided.len()) && !params.search_is_done() {
            best_outcome.update_best(
                self.invoker.invoke(params, &state, decided.clone()));
            assert!(best_outcome.actions.len() > decided.len());
            let action_idx = best_outcome.actions[decided.len()].clone();
            decided.push(action_idx);
            let action = state.generate_actions()[action_idx].clone();
            state.apply_action(action);
            self.reset(&decided)
        }
        best_outcome
    }
    fn reset(&mut self, decided: &Vec<usize>) {
        self.invoker.reset(decided);
    }
}

/// Evaluate each possible next move with a sub-search algorithm. Pick the best.
pub struct LookAhead<'a, Spec: MCTS> {
    invoker: Invoker<'a, Spec>,
}
impl<'a, Spec: MCTS> LookAhead<'a, Spec> {
    pub fn new(subcomponent: Box<dyn SearchComponent<Spec> + 'a>) -> Self {
        Self { invoker: Invoker::new(subcomponent) }
    }
}
impl<Spec: MCTS> SearchComponent<Spec> for LookAhead<'_, Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
               decided: Vec<usize>) -> Outcome {
        if state.is_terminal() {
            return Outcome::new();
        }
        let mut decided = decided;
        let mut best_outcome = Outcome::new();
        for (action_idx, action) in state.generate_actions().into_iter().enumerate() {
            let mut state = state.clone();
            decided.push(action_idx);
            state.apply_action(action);
            self.reset(&decided);
            best_outcome.update_best(self.invoker.invoke(params, &state, decided.clone()));
            decided.pop();
        }
        best_outcome
    }
    fn reset(&mut self, decided: &Vec<usize>) {
        self.invoker.reset(decided);
    }
}

/// Non-uniform lookahead tree search, where outcomes of subsearches influence
/// next selects. This implements most of the behavior of a MCTS.
pub struct Select<'a, Spec: MCTS> {
    invoker: Invoker<'a, Spec>,
    selector: Box<dyn Selector<Spec>>,
    tree: Tree<Spec>,
    start_node: NodeId,
}
impl<'a, Spec: MCTS> Select<'a, Spec> {
    pub fn new(selector: Box<dyn Selector<Spec>>,
               subcomponent: Box<dyn SearchComponent<Spec> + 'a>) -> Self {
        let tree = Tree::new();
        let start_node = tree.root;
        Self { selector, invoker: Invoker::new(subcomponent), tree, start_node }
    }
    fn find_node(&self, actions: &Vec<usize>) -> NodeId {
        let mut node = self.tree.root;
        for child_idx in actions.into_iter() {
            node = self.tree.get(node).children[*child_idx].to;
        }
        node
    }
    fn selection(&self, state: &mut Spec::State,
                 actions: &mut Vec<usize>,
                 params: &mut SearchParams<Spec>) -> NodeId {
        let mut node = self.start_node;
        while self.tree.get(node).is_expanded() {
            if params.state_is_done(&state, actions.len()) {
                break;
            }
            let child_idx = self.selector.select_node(&params, &self.tree.get(node));
            actions.push(child_idx);
            let child = &self.tree.get(node).children[child_idx];
            state.apply_action(child.action.clone());
            node = child.to;
        }
        node
    }
    fn expand(&mut self, node: NodeId, state: &Spec::State) {
        assert!(!self.tree.get(node).is_expanded() || state.is_terminal());
        let children = state.generate_actions().into_iter().enumerate()
            .map(|(idx, a)| Child {
                action: a,
                score_sum: 0.0,
                visits: 0,
                to: self.tree.new_node(node, idx),
            }).collect();
        self.tree.get_mut(node).children = children;
    }
    fn back_propagate(&mut self, selected: NodeId, score: Score) {
        let mut node = selected;
        while node != self.tree.root {
            let parent = self.tree.get(node).parent;
            self.tree.get_mut(node).visits += 1;
            let child_idx = self.tree.get(node).offset_in_parent;
            let child = &mut self.tree.get_mut(parent).children[child_idx];
            child.score_sum += score as f64;
            child.visits += 1;
            node = parent;
        }
        self.tree.get_mut(node).visits += 1;
    }
}
impl<Spec: MCTS> SearchComponent<Spec> for Select<'_, Spec> {
    fn execute(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
               decided: Vec<usize>) -> Outcome {
        let mut decided = decided;
        let mut state = state.clone();
        let node = self.selection(&mut state, &mut decided, params);
        // Note: deliberately not calling our own reset here, to avoid the cost.
        self.invoker.reset(&decided);
        if params.state_is_done(&state, decided.len()) {
            return Outcome::new();
        }
        self.expand(node, &state);
        let outcome = self.invoker.invoke(params, &state, decided);
        self.back_propagate(node, outcome.score);
        outcome
    }
    fn reset(&mut self, decided: &Vec<usize>) {
        self.start_node = self.find_node(decided);
        self.invoker.reset(decided);
    }
}


// Helper for component implementations
/// Parameters fixed for a search algorithm.
pub struct SearchParams<Spec: MCTS> {
    budget: Spec::Budget,
    evaluator: Spec::Evaluator,
    stats: Stats,
    seed: u64,
    // If set, a rollout that lasts this many steps will be considered terminal
    max_rollout_length: Option<usize>,
    // Historical lowest/highest scores seen, used to scale rewards.
    // Assume [0, 1] as a starting point.
    lowest_score: Score,
    highest_score: Score,
}

impl<Spec: MCTS> SearchParams<Spec> {
    pub fn new(budget: Spec::Budget, evaluator: Spec::Evaluator, seed: u64) -> Self {
        Self {
            budget,
            evaluator,
            seed,
            stats: Stats::new(),
            max_rollout_length: None,
            lowest_score: 0.0,
            highest_score: 1.0,
        }
    }
    /// Consider a state terminal if its rollout length lasts this long.
    pub fn set_max_rollout_length(&mut self, length: usize) {
        self.max_rollout_length = Some(length);
    }
    /// Evaluate a given state for its score.
    pub fn evaluate(&mut self, state: &Spec::State) -> Score {
        let score = self.evaluator.evaluate(state);
        self.stats.on_evaluation(score);
        self.lowest_score = self.lowest_score.min(score);
        self.highest_score = self.highest_score.max(score);
        score
    }
    /// Return a score in the [0, 1] range, using historical high/lows.
    pub fn normalize_score(&self, score: Score) -> Score {
        assert!(score >= self.lowest_score);
        assert!(score <= self.highest_score);
        let range = self.highest_score - self.lowest_score;
        (score - self.lowest_score) / range
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
/// best outcome seen so far.
struct Yielder {
    pub best: Outcome,
}
impl Yielder {
    fn new() -> Self {
        Self { best: Outcome::new() }
    }
    fn yield_best<Spec: MCTS>(
        &mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
        actions: Vec<usize>) -> &Outcome {
        let score = params.evaluate(state);
        self.best.update_best(Outcome { score, actions });
        &self.best
    }
}

/// INVOKE (fig 2. in arXiv:1208.4692), helper to call a sub-search component.
/// Unlike the paper, we rely on the sub-search component returning the best
/// outcome seen so far if the state is terminal.
struct Invoker<'a, Spec: MCTS> {
    subcomponent: Box<dyn SearchComponent<Spec> + 'a>,
}
impl<'a, Spec: MCTS> Invoker<'a, Spec> {
    fn new(subcomponent: Box<dyn SearchComponent<Spec> + 'a>) -> Self {
        Self { subcomponent }
    }
    fn invoke(&mut self, params: &mut SearchParams<Spec>, state: &Spec::State,
              decided: Vec<usize>) -> Outcome {
        // Note: we don't handle the terminal state here. Otherwise, we are not
        // propagating the 'best outcome seen' result properly.
        // Unsure if this is an issue with assumptions made here vs. in the
        // paper.
        self.subcomponent.execute(params, state, decided)
    }
    fn reset(&mut self, decided: &Vec<usize>) {
        self.subcomponent.reset(decided);
    }
}

/// Selects the next child node to explore.
pub trait Selector<Spec: MCTS> {
    /// Select the child node index to visit from this parent node.
    fn select_node(&self, params: &SearchParams<Spec>, node: &Node<Spec>) -> usize;
}

/// Node in a MCTS tree.
pub struct Node<Spec: MCTS> {
    parent: NodeId,
    offset_in_parent: usize,
    visits: usize,
    children: Vec<Child<Spec>>,
}
impl<Spec: MCTS> Node<Spec> {
    fn new(parent: NodeId, offset_in_parent: usize) -> Self {
        Self { visits: 0, children: vec![], parent, offset_in_parent }
    }
    fn is_expanded(&self) -> bool {
        self.visits > 0
    }
}
pub struct Child<Spec: MCTS> {
    action: Spec::Action,
    to: NodeId,
    visits: usize,
    score_sum: f64,
}
pub type NodeId = usize;
/// MCTS tree of statistics.
struct Tree<Spec: MCTS> {
    nodes: Vec<Node<Spec>>,
    root: NodeId,
}
impl<Spec: MCTS> Tree<Spec> {
    fn new() -> Self {
        Self { nodes: vec![Node::new(0, 0)], root: 0 }
    }
    fn new_node(&mut self, parent: NodeId, offset_in_parent: usize) -> NodeId {
        let idx = self.nodes.len();
        self.nodes.push(Node::new(parent, offset_in_parent));
        idx
    }
    fn get(&self, node: NodeId) -> &Node<Spec> {
        &self.nodes[node]
    }
    fn get_mut(&mut self, node: NodeId) -> &mut Node<Spec> {
        &mut self.nodes[node]
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
pub struct RandomPolicy {
    pub rng: ChaCha8Rng,
}

impl<Spec: MCTS> SimulationPolicy<Spec> for RandomPolicy {
    fn pick_action(&mut self, _state: &Spec::State,
                   actions: &Spec::ActionSpace) -> usize {
        (0..actions.len()).choose(&mut self.rng).unwrap()
    }
}

// TODO: greedy policy, using evaluator

// Selector implementations

/// UCB-1 selector, see https://arxiv.org/pdf/1208.4692 (6).
struct Ucb1Selector {
    /// Exploration parameter, 'c'.
    pub exploration: f32,
}
impl Ucb1Selector {
    fn ucb1<Spec: MCTS>(&self, params: &SearchParams<Spec>,
                        parent_visits: usize, child: &Child<Spec>) -> f32 {
        let c = self.exploration;
        let n = parent_visits as f32;
        let n_u = child.visits as f32;
        if n_u == 0.0 {
            f32::INFINITY
        } else {
            let avg = (child.score_sum / n_u as f64) as f32;
            let s_u = params.normalize_score(avg);
            (s_u + c * (n.ln() / n_u).sqrt()) as f32
        }
    }
}
impl<Spec: MCTS> Selector<Spec> for Ucb1Selector {
    fn select_node(&self, params: &SearchParams<Spec>,
                       node: &Node<Spec>) -> usize {
        node.children.iter().enumerate()
            .max_by_key(|(_, c)| OrderedFloat(self.ucb1(params, node.visits, c)))
            .map(|(idx, _)| idx).unwrap()
    }
}

// Algorithm implementations

/// Sampling algorithm that simulates a random rollout policy over and over.
pub fn sampling_algorithm<'a, Spec: MCTS<RolloutPolicy = RandomPolicy> + 'a>(
    params: SearchParams<Spec>) -> Algorithm<'a, Spec> {
    // From https://arxiv.org/pdf/1208.4692 (7)
    let simulate = Box::new(
        Simulate::new(RandomPolicy { rng: ChaCha8Rng::seed_from_u64(params.seed) }));
    Algorithm::new(simulate, params)
}

/// Sampling algorithm that simulates a random rollout policy N times, picks the
/// move that gave the best-score-so-far, then simulates from the next state.
pub fn iterative_sampling_algorithm<'a, Spec: MCTS<RolloutPolicy = RandomPolicy> + 'a>(
    params: SearchParams<Spec>, iterations_per_step: usize) -> Algorithm<'a, Spec> {
    // From https://arxiv.org/pdf/1208.4692 (8)
    let simulate = Box::new(Simulate::new(RandomPolicy { rng: ChaCha8Rng::seed_from_u64(params.seed) }));
    let repeat = Box::new(Repeat::new(iterations_per_step, simulate));
    let step = Box::new(Step::new(repeat));
    Algorithm::new(step, params)
}

/// Select actions one after the other, using statistics from simulations to
/// inform what node to select next.
pub fn mcts_algorithm<'a, Spec: MCTS + 'a>(
    params: SearchParams<Spec>, selector: Box<dyn Selector<Spec>>,
    rollout: Spec::RolloutPolicy, step_iterations: usize) -> Algorithm<'a, Spec> {
    // From https://arxiv.org/pdf/1208.4692 (12)
    let simulate = Box::new(Simulate::new(rollout));
    let select = Box::new(Select::new(selector, simulate));
    let repeat = Box::new(Repeat::new(step_iterations, select));
    let step = Box::new(Step::new(repeat));
    Algorithm::new(step, params)
}

/// MCTS using the UCB-1 selection policy.
pub fn uct_algorithm<'a, Spec: MCTS<RolloutPolicy = RandomPolicy> + 'a>(
    params: SearchParams<Spec>, exploration: f32,
    step_iterations: usize) -> Algorithm<'a, Spec> {
    let selector = Box::new(Ucb1Selector { exploration });
    let seed = params.seed;
    mcts_algorithm(params, selector,
                   RandomPolicy { rng: ChaCha8Rng::seed_from_u64(seed) },
                   step_iterations)
}


#[cfg(test)]
mod tests {
    use super::*;

    #[derive(Debug)]
    struct MockMCTS;
    impl MCTS for MockMCTS {
        type ActionSpace = Vec<FakeAction>;
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
        returns: Vec<Outcome>,
    }
    impl SearchComponent<MockMCTS> for MockComponent {
        fn execute(&mut self, _params: &mut SearchParams<MockMCTS>,
                   _state: &MockState, _decided: Vec<usize>) -> Outcome<MockMCTS> {
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
        fn pick_action(&mut self, _state: &MockState, _actions: &Vec<FakeAction>) -> FakeAction {
            1
        }
    }

    #[test]
    fn test_step_same_subsequence() {
        // subcomponent that keeps returning the same sequence of actions
        // (0 to 5)
        let mock = MockComponent {
            returns: vec![
                Outcome { score: 0.0, actions: vec![0, 1, 2, 3, 4, 5] },
                Outcome { score: 0.0, actions: vec![0, 1, 2, 3, 4, 5] },
                Outcome { score: 0.0, actions: vec![0, 1, 2, 3, 4, 5] },
                Outcome { score: 0.0, actions: vec![0, 1, 2, 3, 4, 5] },
                Outcome { score: 0.0, actions: vec![0, 1, 2, 3, 4, 5] },
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
            MockEval {}, /*seed=*/42);
        // Still outputs the full sequence (including 5)
        assert_eq!(step.execute(&mut params, &state, vec![]).actions,
                   vec![0, 1, 2, 3, 4, 5]);
    }

    #[test]
    fn test_step_subsequence_changes() {
        // subcomponent that returns the same sequence of actions (0 to 5),
        // until it switches to a different one (0, 1, 10, 100, 1000, 1000)
        // after seeing '1'.
        let mock = MockComponent {
            returns: vec![
                Outcome { score: 0.0, actions: vec![0, 1, 2, 3, 4, 5] },
                Outcome { score: 0.0, actions: vec![0, 1, 2, 3, 4, 5] },
                Outcome { score: 5.0, actions: vec![0, 1, 10, 100, 1000, 10000] },
                Outcome { score: 5.0, actions: vec![0, 1, 10, 100, 1000, 10000] },
                Outcome { score: 5.0, actions: vec![0, 1, 10, 100, 1000, 10000] },
                Outcome { score: 5.0, actions: vec![0, 1, 10, 100, 1000, 10000] },
                Outcome { score: 5.0, actions: vec![0, 1, 10, 100, 1000, 10000] },
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
            MockEval {}, /*seed=*/42);
        assert_eq!(step.execute(&mut params, &state, vec![]).actions,
                   vec![0, 1, 10, 100, 1000, 10_000]);
    }
}
