use std::collections::VecDeque;
use std::sync::Arc;

use strum_macros::EnumIter;
use strum::IntoEnumIterator;
use once_cell::sync::Lazy;

const MAX_TICKS: usize = 2000;

/// Lookup of whether a given tick (index lookup) is a tick where threats move.
static IS_MOVE_TICK: Lazy<Vec<bool>> = Lazy::new(|| {
    // Logic from:
    // https://github.com/JesseEmond/blitz-2025-registration/blob/6c705ae3a3ffcf806e28a5e3ba700a3b2a7f3ca8/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L80-L88
    // Computed once so that we can look it up without keeping track of state.
    let mut is_move_tick = Vec::new();
    // Not entirely sure why despite reading the reversed code, but if we don't
    // do this we are off-by-one.
    is_move_tick.push(false);
    let mut ticks_since_last_move = 0;
    for tick in 0..=MAX_TICKS {
        let mut do_move = false;
        ticks_since_last_move += 1;
        if ticks_since_last_move >= Threat::move_every_n_ticks(tick) {
            ticks_since_last_move = 0;
            do_move = true;
        }
        is_move_tick.push(do_move);
    }
    is_move_tick
});

// Styles map to internal names in the JS here:
// https://github.com/JesseEmond/blitz-2025-registration/blob/7afcfb849b990caa69cee0f83ae96aae6f49740f/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L452C80-L452C88
#[derive(EnumIter, Copy, Clone, Debug, PartialEq)]
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

#[derive(EnumIter, Copy, Clone, Debug, PartialEq)]
pub enum Move {
    Up,
    Down,
    Left,
    Right,
}

impl Move {
    fn opposite(&self) -> Move {
        match self {
            Move::Up => Move::Down,
            Move::Down => Move::Up,
            Move::Left => Move::Right,
            Move::Right => Move::Left,
        }
    }
}

#[derive(Copy, Clone, PartialEq, Debug, Eq, Hash)]
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

    pub fn dist_squared(&self, other: &Pos) -> usize {
        let dx = self.x - other.x;
        let dy = self.y - other.y;
        (dx * dx + dy * dy) as usize
    }
}

#[derive(Clone)]
pub struct Grid {
    pub width: u8,
    pub height: u8,
    /// Dims: [x][y], true for walls
    pub tiles: Vec<Vec<bool>>,
    pub empty_tiles: Vec<Pos>,
    /// At [x][y], index in 'empty_tiles' (only valid for empty tiles).
    pub empty_tiles_lookup: Vec<Vec<usize>>,
}

impl Grid {
    pub fn new(width: u8, height: u8, tiles: Vec<Vec<bool>>) -> Self {
        let mut empty_tiles = Vec::new();
        let mut empty_tiles_lookup = vec![vec![usize::MAX; height as usize];
                                          width as usize];
        // Note: the order of the loops here matters (outer xs, inner ys), to
        // match the JS code for get_aggressive_path.
        for x in 0..(width as usize) {
            for y in 0..(height as usize) {
                if !tiles[x][y] {
                    let idx = empty_tiles.len();
                    empty_tiles.push(Pos { x: x as i16, y: y as i16 });
                    empty_tiles_lookup[x][y] = idx;
                }
            }
        }
        Self { width, height, tiles, empty_tiles, empty_tiles_lookup }
    }

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

    fn empty_tile_idx(&self, pos: &Pos) -> usize {
        assert!(self.is_empty(pos));
        self.empty_tiles_lookup[pos.x as usize][pos.y as usize]
    }
}

/// Helper to make 'tiles' from a [y][x] structure (matches visually) of
/// '#'s and ' 's.
pub fn make_grid(rows: Vec<&str>) -> Grid {
    let width = if rows.is_empty() { 0 } else { rows[0].len() };
    let height = rows.len();
    let mut tiles = vec![vec![false; height]; width];
    for x in 0..width {
        for y in 0..height {
            let c = rows[y].as_bytes()[x];
            assert!(c == b' ' || c == b'#',
                    "make_grid expects rows with spaces and #s: '{}'", c);
            tiles[x][y] = c == b'#';
        }
    }
    Grid::new(width as u8, height as u8, tiles)
}

pub fn get_aggressive_path(grid: &Grid, from: &Pos, to: &Pos) -> Vec<Pos> {
    // Implemented to match:
    // https://github.com/JesseEmond/blitz-2025-registration/blob/5bbcd84d0a74256ce00c82f9766528b2ac9efbba/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/aggressive.decomp.js#L17
    // To understand this optimized implementaion, note that the JS is
    // effectively doing:
    //   cost = {p: Infinity for p in empty_tiles}
    //   unseen = list(empty_tiles)
    //   while unseen:
    //     unseen.sort(function(a,b) { cost[b] - cost[a] })
    //     pos = unseen.pop()
    //     [...]
    // This sort for every frontier pop is very expensive.
    // When reading the code below, remember that we need to replicate the above
    // with the following properties:
    // - sort in modern JS is stable
    // - sort is called at the start of the loop, so any newly added nodes in
    //   the same loop will keep their initial relative order from 'empty_tiles'
    //   instead of being in the order seen
    // TODO: Refactor to a struct, impl old slower method, unit test verifying
    //       that the behavior is the same.
    const HIGH_COST: usize = 9999999;
    let mut cost = vec![HIGH_COST; grid.empty_tiles.len()];
    let mut came_from = vec![None; grid.empty_tiles.len()];
    // Frontier is nodes with cost N, next_frontier is nodes with cost N+1.
    let mut frontier = VecDeque::new();
    let mut next_frontier = VecDeque::new();
    let mut frontier_cost = 0;
    cost[grid.empty_tile_idx(from)] = 0;
    frontier.push_front(*from);
    while !frontier.is_empty() || !next_frontier.is_empty() {
        if frontier.is_empty() {
            std::mem::swap(&mut frontier, &mut next_frontier);
            frontier_cost += 1;
        }
        let pos = frontier.pop_back().unwrap();
        if pos == *to {
            // Early exit if we found the target
            break;
        }
        let mut frontier_adds = Vec::new();
        let mut next_frontier_adds = Vec::new();
        // Note: order is irrelevant, since we enforce order to match the JS
        // behavior below anyway.
        for d in Move::iter() {
            let next_pos = pos.moved(d);
            if !grid.is_empty(&next_pos) {
                continue;
            }
            let next_pos_idx = grid.empty_tile_idx(&next_pos);
            let current_cost = cost[next_pos_idx];
            let new_cost = cost[grid.empty_tile_idx(&pos)] + 1;
            if current_cost == HIGH_COST {
                cost[next_pos_idx] = new_cost;
                came_from[next_pos_idx] = Some(pos);
                assert!(new_cost == frontier_cost || new_cost == frontier_cost + 1);
                if new_cost == frontier_cost {
                    frontier_adds.push(next_pos);
                } else {
                    next_frontier_adds.push(next_pos);
                }
            } else {
                assert!(new_cost >= current_cost);
            }
        }
        // Because the JS code only sorts on new 'while' iterations, multiple
        // positions discovered on the same iteration will keep their same
        // initial ordering in the array, which comes from the 'empty_tiles'
        // creation order.
        frontier_adds.sort_by_key(|p| grid.empty_tile_idx(p));
        next_frontier_adds.sort_by_key(|p| grid.empty_tile_idx(p));
        // New additions move to the front. When the JS version sorts, all the
        // previously unseen positions are to the left of seen ones (from prev
        // Infinity cost value), and will preserve this relative order to
        // existing frontier items (from a stable sort).
        frontier_adds.into_iter().rev().for_each(|p| frontier.push_front(p));
        next_frontier_adds.into_iter().rev().for_each(|p| next_frontier.push_front(p));
    }
    let mut path = Vec::new();
    let mut node = *to;
    loop {
        if let Some(parent) = came_from[grid.empty_tile_idx(&node)] {
            path.push(node);
            node = parent;
        } else {
            break;
        }
    }
    path.reverse();
    path
}

#[derive(Clone, PartialEq, Debug)]
pub struct Threat {
    pub pos: Pos,
    /// Direction the threat is facing.
    pub dir: Move,
    pub style: Style,
    spawn: Pos,
    seed: usize,
}

impl Threat {
    pub fn new(pos: Pos, style: Style, dir: Move) -> Self {
        let mut t = Threat { pos, style, dir, spawn: pos.clone(), seed: 0 };
        t._next_rand();  // The initial direction was generated via randomness
        t
    }

    fn can_predict(style: Style) -> bool {
        // TODO: Remove this fn once all are supported!
        match style {
            Style::Goldfish | Style::Bull | Style::Deer | Style::Shark => true,
            _ => false,
        }
    }

    /// Returns whether we know how to simulate this threat.
    fn simulate(&mut self, tick: usize, player: &Pos, grid: &Grid) -> bool {
        if !Self::moves_on_tick(tick) {
            return false;
        }
        let next_move = match self.style {
            Style::Goldfish => {
                // See girouette.js
                let directions = self.get_possible_directions(grid);
                let o = self._next_rand() * directions.len() as f64;
                let idx = o.floor();
                Some(directions[idx as usize])
            },
            Style::Bull => {
                // See straight_ahead_threat.js
                let directions = self.get_possible_directions(grid);
                if directions.contains(&self.dir) {
                    Some(self.dir)
                } else {
                    let o = self._next_rand() * directions.len() as f64;
                    let idx = o.floor();
                    Some(directions[idx as usize])
                }
            },
            Style::Deer => {
                // See tse_le_fantome_orange_dans_pacman.js
                let directions = self.get_possible_directions(grid);
                if directions.len() == 1 {
                    Some(directions[0])
                } else {
                    let directions = directions.into_iter()
                        .filter(|&d| d != self.dir.opposite());
                    let target = if self.pos.dist_squared(&player) > 6 * 6 {
                        player
                    } else {
                        &self.spawn
                    };
                    Some(directions.min_by_key(|&d| {
                        self.pos.moved(d).dist_squared(target)
                    }).unwrap())
                }
            },
            Style::Shark => {
                // See aggressive.js
                let path = get_aggressive_path(&grid, &self.pos, &player);
                if !path.is_empty() {
                    let next = path[0];
                    assert!(next != self.pos);
                    assert!(self.pos.manhattan_dist(&next) <= 1);
                    if next.x > self.pos.x {
                        Some(Move::Right)
                    } else if next.x < self.pos.x {
                        Some(Move::Left)
                    } else if next.y < self.pos.y {
                        Some(Move::Up)
                    } else {
                        assert!(next.y > self.pos.y);
                        Some(Move::Down)
                    }
                } else {
                    None
                }
            },
            _ => {
                assert!(!Threat::can_predict(self.style));
                None  // TODO: implement other styles
            },
        };
        if let Some(m) = next_move {
            assert!(Threat::can_predict(self.style));
            self.pos = self.pos.moved(m);
            self.dir = m;
        }
        // TODO: remove return once we have 100% predictions
        // If we can predict it, we have enforced above that we have handled it.
        Threat::can_predict(self.style)
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

    pub fn moves_on_tick(tick: usize) -> bool {
        IS_MOVE_TICK[tick]
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
    prev_pos: Pos,
    pub threats: Vec<Threat>,
    pub game_over: bool,
    turn: usize,  // 0: player turn, 1+: turn for threat idx+1
}

impl State {
    pub fn new(game: Game) -> State {
        // Matches
        // https://github.com/JesseEmond/blitz-2025-registration/blob/dbe84ed80ebc441d071d5e6eb0d6a476d580a9e2/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L467
        let prev_pos = Pos { x: -1, y: -1 };
        let mut state = State {
            grid: Arc::new(game.grid),
            tick: game.tick,
            pos: game.pos,
            prev_pos,
            threats: game.threats.clone(),
            game_over: !game.alive,
            turn: 0,
        };
        state.check_game_over();
        state
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

    /// Advances the state by a single turn -- player or threat.
    /// Predictable turns are auto-applied and auto-advanced.
    pub fn apply(&mut self, action: Option<Move>) {
        if let Some(m) = action {
            if self.is_player_turn() {
                self.pos = self.pos.moved(m);
            } else {
                self.threat_turn_mut().pos = self.threat_turn().pos.moved(m);
                self.threat_turn_mut().dir = m;
            }
            self.check_game_over();
        }
        self.turn += 1;
        // While we know how to simulate a threat, skip it.
        while !self.is_turn_end() {
            if !self.threats[self.turn - 1].simulate(
                self.tick, &self.prev_pos, &self.grid) {
                break;
            }
            self.turn += 1;
        }
        if self.is_turn_end() {
            self.tick += 1;
            self.turn = 0;
            // Threats see the pos of the player before it moves. Only update
            // the player's seen position after we're done with a full turn.
            // See 'simulate_tick' for JS code pointers.
            self.prev_pos = self.pos;
        }
    }

    pub fn is_player_turn(&self) -> bool {
        self.turn == 0
    }

    /// Similar to 'apply', but directly replicates the server tick logic.
    pub fn simulate_tick(&mut self, action: Option<Move>) {
        self.check_game_over();
        if self.game_over {
            let killers: Vec<Style> = self.threats.iter().filter(|t| t.pos == self.pos)
                .map(|t| t.style).collect();
            println!("Got killed by {:?} on {:?}!", killers, self.pos)
        }
        if let Some(m) = action {
            self.pos = self.pos.moved(m);
        }
        for t in &mut self.threats {
            let prev_pos = t.pos;
            if t.simulate(self.tick, &self.prev_pos, &self.grid) {
                // TODO: remove once confident in preditions
                println!("{:?} will move from {:?} to {:?}", t.style, prev_pos, t.pos);
            }
        }
        // Threats only see the position of the character from th prev tick, see
        // https://github.com/JesseEmond/blitz-2025-registration/blob/dbe84ed80ebc441d071d5e6eb0d6a476d580a9e2/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/world.decomp.js#L206-L208
        self.prev_pos = self.pos;
        self.tick += 1;
    }

    /// Update our state based on what the server sent back.
    pub fn update_observed_state(&mut self, game: &Game) {
        // TODO: Replace with only asserts once we perfectly predict the game
        assert_eq!(self.tick, game.tick, "tick");
        assert_eq!(self.pos, game.pos, "pos");
        if self.game_over != !game.alive {
            self.game_over = !game.alive;
            println!("[TODO] Learn to predict all threats");
        }
        self.threats.iter_mut().zip(game.threats.iter()).for_each(|(threat, actual)| {
            assert_eq!(threat.style, actual.style);
            if Threat::can_predict(threat.style) {
                assert_eq!(threat.dir, actual.dir, "{:?} dir", threat.style);
                assert_eq!(threat.pos, actual.pos, "{:?} pos", threat.style);
            } else {
                println!("[TODO] Learn to predict {:?}", threat.style);
                threat.pos = actual.pos;
                threat.dir = actual.dir;
            }
        });
    }

    fn check_game_over(&mut self) {
        if !self.game_over {
            self.game_over = self.threats.iter().any(|t| t.pos == self.pos);
        }
    }

    fn are_threats_moving(&self) -> bool {
        Threat::moves_on_tick(self.tick)
    }

    fn is_turn_end(&self) -> bool {
        !self.are_threats_moving() || self.turn == 1 + self.threats.len()
    }
    
    fn threat_turn(&self) -> &Threat {
        assert!(self.turn > 0);
        &self.threats[self.turn - 1]
    }

    fn threat_turn_mut(&mut self) -> &mut Threat {
        assert!(self.turn > 0);
        &mut self.threats[self.turn - 1]
    }

}

#[allow(dead_code)] 
fn debug_print(grid: &Grid, highlights: Vec<(&Pos, char)>) {
    for y in 0..(grid.height as i16) {
        for x in 0..(grid.width as i16) {
            let pos = Pos { x, y };
            let highlight = highlights.iter()
                .filter(|(&p, _)| p == pos)
                .map(|(_, c)| c)
                .next();
            if let Some(c) = highlight {
                print!("{}", c);
            } else if grid.is_empty(&pos) {
                print!(" ");
            } else {
                print!("#");
            }
        }
        println!();
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn make_test_game() -> Game {
        let threats = Style::iter().filter(|&s| Threat::can_predict(s))
            .map(|s| Threat::new(Pos { x: 1, y: 4 }, s, Move::Right))
            .collect();
        Game {
            grid: make_grid(vec![
                "####",
                "#  #",
                "#  #",
                "####",
                "#  #",
                "#  #",
                "####",
            ]),
            alive: true,
            pos: Pos { x: 1, y: 1 },
            tick: 1,
            threats,
        }
    }

    #[test]
    fn test_apply_matches_simulate() {
        let mut simulated = State::new(make_test_game());
        let mut applied = simulated.clone();
        for _ in 0..1500 {
            let moves = simulated.generate_moves();
            let our_move = *moves.iter().next().unwrap();
            simulated.simulate_tick(our_move);
            applied.apply(our_move);
            // All predictable threats, should have moved to next turn.
            assert!(applied.is_player_turn());
            assert_eq!(simulated.tick, applied.tick);
            assert_eq!(simulated.game_over, applied.game_over);
            assert_eq!(simulated.pos, applied.pos);
            assert_eq!(simulated.threats, applied.threats);
        }
    }
}
