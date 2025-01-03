use std::sync::Arc;

use itertools::chain;
use once_cell::sync::Lazy;
use strum_macros::EnumIter;

use crate::grid::{Grid, Move, Pos};
use crate::pathfinding::{PathfindingGrid};

// TODO: No longer need to precompute this, don't need to be stateless
const MAX_TICKS: usize = 10000;

// Max tick matching the server's. Once tick > this, stop.
const GAME_END_TICKS: usize = 2000;

pub enum SimulationAction {
    Move { direction: Option<Move> },
    MoveTo { position: Pos },
}

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

#[derive(Debug, PartialEq, Clone)]
enum ThreatStorage {
    Owl { target_last_seen: Pos },
    Hawk {
        target_last_seen: Option<Pos>,
        idle_position: Option<Pos>,
        idle_rounds: i32,
    },
}

#[derive(Clone, PartialEq, Debug)]
pub struct Threat {
    pub pos: Pos,
    /// Direction the threat is facing.
    pub dir: Move,
    pub style: Style,
    spawn: Pos,
    seed: usize,
    /// Used by some threat styles to remember things.
    storage: Option<ThreatStorage>,
}

impl Threat {
    pub fn spawn(pos: Pos, style: Style) -> Self {
        let mut t = Threat {
            pos, style, spawn: pos.clone(), seed: 0, storage: None,
            // Put a temporary value before generating it
            dir: Move::Up
        };
        t.dir = t.get_random_direction();
        t
    }

    /// Returns whether we know how to simulate this threat.
    fn simulate(&mut self, tick: usize, player: &Pos, player_prev: &Pos,
                grid: &PathfindingGrid) {
        if !Self::moves_on_tick(tick) { return; }
        if let Some(m) = self.next_move(tick, player, player_prev, grid) {
            self.pos = self.pos.moved(m);
            self.dir = m;
        }
    }

    fn next_move(&mut self, tick: usize, player: &Pos, player_prev: &Pos,
                 grid: &PathfindingGrid) -> Option<Move> {
        match self.style {
            Style::Goldfish => {
                // See girouette.js
                let rand = self._next_rand();
                let directions = self.get_possible_directions(&grid.grid);
                let idx = (rand * directions.len() as f64).floor();
                Some(directions[idx as usize])
            },
            Style::Bull => {
                // See straight_ahead_threat.js
                if self.get_possible_directions(&grid.grid).contains(&self.dir) {
                    Some(self.dir)
                } else {
                    let rand = self._next_rand();
                    let directions = self.get_possible_directions(&grid.grid);
                    let o = rand * directions.len() as f64;
                    let idx = o.floor();
                    Some(directions[idx as usize])
                }
            },
            Style::Deer => {
                // See tse_le_fantome_orange_dans_pacman.js
                let directions = self.get_possible_directions(&grid.grid);
                if directions.len() == 1 {
                    Some(directions[0])
                } else {
                    let directions = directions.into_iter()
                        .filter(|&&d| d != self.dir.opposite());
                    let target = if self.pos.dist_squared(&player_prev) > 6 * 6 {
                        player_prev
                    } else {
                        &self.spawn
                    };
                    Some(directions.min_by_key(|&&d| {
                        self.pos.moved(d).dist_squared(target)
                    }).cloned().unwrap())
                }
            },
            Style::Shark => {
                // See aggressive.js
                grid.get_aggressive_next_move(&self.pos, &player_prev)
            },
            Style::Owl => {
                // Not fully sure why, but this is looking at the previous tick.
                // This does not align with my reading of the code, but appears
                // to be the case when testing.
                let tick = tick - 1;
                if tick % 60 < 10 {
                    // Note: _lastTargetSeenPosition reads directly from
                    // character.position, so it is the current position.
                    self.storage = Some(
                        ThreatStorage::Owl { target_last_seen: *player }
                    );
                }
                self.storage.as_ref().and_then(|storage| {
                    let target = match storage {
                        ThreatStorage::Owl { target_last_seen } => target_last_seen,
                        _ => unreachable!(),
                    };
                    grid.get_pathfinding_next_move(&self.pos, &target)
                })
            },
            Style::Hawk => {
                if self.storage.is_none() {
                    self.storage = Some(ThreatStorage::Hawk {
                        target_last_seen: None,
                        idle_position: None,
                        idle_rounds: 0,
                    });
                }
                let mut storage = self.storage.clone().unwrap();
                let action;
                if let ThreatStorage::Hawk {
                    target_last_seen, idle_position, idle_rounds
                } = &mut storage {
                    // Note: 'isPlayerInDirectLineOfSight' reads directly from
                    // character.position, i.e. the current position.
                    if grid.grid.line_of_sight(&self.pos, player) {
                        *target_last_seen = Some(*player);
                        *idle_position = None;
                        *idle_rounds = 0;
                    }
                    action = if let Some(target) = target_last_seen {
                        if self.pos == *target {
                            *target_last_seen = None;
                            *idle_rounds = 0;
                            None
                        } else {
                            grid.get_pathfinding_next_move(&self.pos, &target)
                        }
                    } else if let Some(target) = idle_position {
                        if self.pos == *target {
                            *idle_position = None;
                            *idle_rounds = -5;
                            None
                        } else {
                            grid.get_pathfinding_next_move(&self.pos, &target)
                        }
                    } else {
                        *idle_rounds += 1;
                        if *idle_rounds > 5 {
                            *idle_position = Some(self.get_random_intersection(&grid.grid));
                            *idle_rounds = 0;
                        }
                        None
                    };
                } else { unreachable!(); }
                self.storage = Some(storage);
                action
            },
        }
    }

    fn get_random_intersection(&mut self, grid: &Grid) -> Pos {
        assert!(!grid.best_intersections.is_empty());
        let o = self._next_rand() * grid.best_intersections.len() as f64;
        let idx = o.floor();
        grid.best_intersections[idx as usize]
    }

    fn get_random_direction(&mut self) -> Move {
        // Reference:
        // https://github.com/JesseEmond/blitz-2025-registration/blob/971949e077a937a51844f98a9a02f2855c80cdc4/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L381-L401
        let idx = (self._next_rand() * 4.0).floor() as usize;
        [Move::Up, Move::Down, Move::Left, Move::Right][idx]
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

    fn get_possible_directions<'a>(&'a self, grid: &'a Grid) -> &Vec<Move> {
        // Grid precomputed moves are created following getPossibleDirections
        grid.available_moves(&self.pos)
    }

    fn _next_rand(&mut self) -> f64 {
        let seed = self.seed;
        self.seed += 1;
        let x = (seed as f64).sin() * 10000.0;
        x - x.floor()
    }
}

#[derive(Clone)]
pub enum GameOverCheck {
    /// Only check if the player has a collision at the start of a tick.
    StartOfTick,
    /// Check if the player has a collision at the start of a tick and after the
    /// player has moved.
    StartOfTickAndAfterPlayerMove,
}

/// Game options to customize the game's logic.
#[derive(Clone)]
pub struct GameOptions {
    /// How to check for the end of a game.
    pub game_over: GameOverCheck,
}
impl GameOptions {
    pub fn default() -> Self {
        Self { game_over: GameOverCheck::StartOfTick }
    }
}

#[derive(PartialEq, Clone)]
pub struct Game {
    pub tick: usize,
    pub pos: Pos,
    pub grid: Grid,
    pub threats: Vec<Threat>,
    pub alive: bool,
}

#[derive(Clone)]
pub struct State {
    pub grid: Arc<PathfindingGrid>,
    options: GameOptions,
    pub tick: usize,
    pub pos: Pos,
    prev_pos: Pos,
    pub threats: Vec<Threat>,
    pub game_over: bool,
}

impl State {
    pub fn new(game: Game) -> State {
        Self::new_custom(game, GameOptions::default())
    }

    pub fn new_custom(game: Game, options: GameOptions) -> Self {
        // Matches
        // https://github.com/JesseEmond/blitz-2025-registration/blob/dbe84ed80ebc441d071d5e6eb0d6a476d580a9e2/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/threats/threat.decomp.js#L467
        let prev_pos = Pos { x: -1, y: -1 };
        State {
            grid: Arc::new(PathfindingGrid::new(game.grid)),
            tick: game.tick,
            pos: game.pos,
            prev_pos,
            threats: game.threats.clone(),
            game_over: !game.alive,
            options,
        }
    }

    pub fn generate_moves(&self) -> impl Iterator<Item = Option<Move>> + '_ {
        assert!(!self.game_over);
        chain(
            self.grid.grid.available_moves(&self.pos).iter().map(|&m| Some(m)),
            std::iter::once(None))
    }

    /// Simulate one tick from the server-side, applying a player action.
    pub fn simulate_tick(&mut self, action: SimulationAction) {
        self.game_over = self.check_game_over();  // Note: server also only checks at the start.
        if self.game_over { return; }
        assert!(self.grid.grid.is_empty(&self.pos));
        match action {
            SimulationAction::Move { direction } => {
                if let Some(m) = direction {
                    self.pos = self.pos.moved(m);
                }
            },
            SimulationAction::MoveTo { position } => {
                if let Some(m) = self.grid.get_pathfinding_next_move(&self.pos, &position) {
                    self.pos = self.pos.moved(m);
                }
            },
        }
        assert!(self.grid.grid.is_empty(&self.pos));
        if matches!(self.options.game_over, GameOverCheck::StartOfTickAndAfterPlayerMove) {
            // Note: this is not in the real game. This allows testing the game
            // without being able to "jump over" enemies.
            self.game_over = self.check_game_over();
            if self.game_over { return; }
        }
        for t in &mut self.threats {
            t.simulate(self.tick, &self.pos, &self.prev_pos, &self.grid);
        }
        // Some threats only see the character position from the prev tick, see
        // https://github.com/JesseEmond/blitz-2025-registration/blob/dbe84ed80ebc441d071d5e6eb0d6a476d580a9e2/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/world.decomp.js#L206-L208
        self.prev_pos = self.pos;
        self.tick += 1;
    }

    /// Update our state based on what the server sent back.
    pub fn verify_predictions(&self, game: &Game) {
        println!("Tick: {}", self.tick);
        println!("Player: {:?}", self.pos);
        assert_eq!(self.tick, game.tick, "tick");
        assert_eq!(self.pos, game.pos, "pos");
        assert_eq!(self.game_over, !game.alive, "alive");
        self.threats.iter().zip(game.threats.iter()).for_each(|(threat, actual)| {
            assert_eq!(threat.style, actual.style);
            assert_eq!(threat.dir, actual.dir, "{:?} dir (@{:?})",
                       threat.style, actual.pos);
            assert_eq!(threat.pos, actual.pos, "{:?} pos", threat.style);
        });
    }

    pub fn check_game_over(&self) -> bool {
        let mut game_over = self.game_over;
        game_over |= self.threats.iter().any(|t| t.pos == self.pos);
        game_over |= self.player_won();
        game_over
    }

    pub fn player_won(&self) -> bool {
        self.tick > GAME_END_TICKS
    }
    
    pub fn score(&self) -> usize {
        self.tick * 5
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use super::super::grid::{make_grid};

    #[test]
    fn test_owl_prediction_misprediction_repro() {
        let grid = PathfindingGrid::new(make_grid(vec![
            "######################",
            "#                    #",
            "# ########  ######## #",
            "# #                # #",
            "# #### ###  # #### # #",
            "# ####      # #### # #",
            "# #### ###  # #### # #",
            "#           # #      #",
            "# #### ###  # # #### #",
            "# #  #      # # #  # #",
            "# #    ###  # #    # #",
            "# #                # #",
            "# ########  ######## #",
            "#                    #",
            "######################",
        ]));
        let player = Pos { x: 20, y: 1 };
        let prev_player = player;  // not important
        let owl = Pos { x: 10, y: 12 };
        let mut threat = Threat::spawn(owl, Style::Owl);
        // On tick 5, we saw player at (7, 7)
        let old_player_seen = Pos { x: 7, y: 7 };
        threat.next_move(5, &old_player_seen, &old_player_seen, &grid);
        // Then saw player on a new tick
        let tick = 60;
        assert_eq!(threat.next_move(tick, &player, &prev_player, &grid),
                   Some(Move::Up));
    }
}
