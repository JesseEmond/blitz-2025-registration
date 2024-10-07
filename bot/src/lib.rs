/// Boilerplate for Python code calling into this library.
/// A lot of duplication here, do this so that other parts of the Rust code can
/// ignore that it can run inside Python.

pub mod grid;
pub mod mcts;
pub mod pathfinding;
pub mod search;
pub mod simulation;

use pyo3::prelude::*;

use crate::grid::{Grid, Move, Pos};
use crate::search::Bot;
use crate::simulation::{Game, State, Style, Threat};

#[pyclass]
#[derive(Clone)]
pub enum Action {
    /// Send no action -- do not move.
    Idle,
    Up,
    Down,
    Left,
    Right,
}

impl Action {
    fn to_move(&self) -> Option<Move> {
        match self {
            Action::Idle => None,
            Action::Up => Some(Move::Up),
            Action::Down => Some(Move::Down),
            Action::Left => Some(Move::Left),
            Action::Right => Some(Move::Right),
        }
    }
}

#[pyclass]
#[derive(Clone)]
pub enum GameDirection {
    Up,
    Down,
    Left,
    Right,
}

impl GameDirection {
    fn to_move(&self) -> Move {
        match self {
            Self::Up => Move::Up,
            Self::Down => Move::Down,
            Self::Left => Move::Left,
            Self::Right => Move::Right,
        }
    }
}

#[pyclass]
#[derive(Clone)]
pub struct GamePosition {
    #[pyo3(get, set)]
    pub x: i32,
    #[pyo3(get, set)]
    pub y: i32,
}

impl GamePosition {
    fn to_pos(&self) -> Pos {
        Pos { x: self.x as i16, y: self.y as i16 }
    }
}

#[pymethods]
impl GamePosition {
    #[new]
    pub fn new(x: i32, y: i32) -> GamePosition {
        GamePosition { x, y }
    }
}

impl GamePosition {
    #[allow(dead_code)] 
    fn from_pos(pos: &Pos) -> Self {
        Self::new(pos.x as i32, pos.y as i32)
    }
}

#[pyclass]
#[derive(Clone)]
pub struct GameThreat {
    #[pyo3(get, set)]
    pub position: GamePosition,
    #[pyo3(get, set)]
    pub direction: GameDirection,
    #[pyo3(get, set)]
    pub style: String,
}

#[pymethods]
impl GameThreat {
    #[new]
    pub fn new(position: GamePosition, direction: GameDirection, style: String) -> GameThreat {
        GameThreat { position, direction, style }
    }
}

#[pyclass]
#[derive(Clone)]
pub struct GameMap {
    #[pyo3(get, set)]
    pub width: u32,
    #[pyo3(get, set)]
    pub height: u32,
    /// Dims: [x][y], true if wall, false if empty.
    #[pyo3(get, set)]
    pub tiles: Vec<Vec<bool>>,
}

#[pymethods]
impl GameMap {
    #[new]
    pub fn new(width: u32, height: u32, tiles: Vec<Vec<bool>>) -> GameMap {
        GameMap { width, height, tiles }
    }
}

#[pyclass]
#[derive(Clone)]
pub struct GameState {
    #[pyo3(get, set)]
    pub tick: u32,
    #[pyo3(get, set)]
    pub position: GamePosition,
    #[pyo3(get, set)]
    pub threats: Vec<GameThreat>,
    #[pyo3(get, set)]
    pub map: GameMap,
    #[pyo3(get, set)]
    pub alive: bool,
}

#[pymethods]
impl GameState {
    #[new]
    pub fn new(tick: u32, position: GamePosition, threats: Vec<GameThreat>,
               map: GameMap, alive: bool) -> GameState {
        GameState { tick, position, threats, map, alive }
    }
}

impl GameState {
    fn to_game(&self) -> Game {
        Game {
            tick: self.tick as usize,
            pos: self.position.to_pos(),
            grid: Grid::new(self.map.width as u8, self.map.height as u8, self.map.tiles.clone()),
            threats: self.threats.iter().map(
                |t| Threat::new(t.position.to_pos(), from_style_name(&t.style),
                                t.direction.to_move()))
                .collect(),
            alive: self.alive,
        }
    }
}

#[pyclass]
pub struct DevnullBot {
    bot: Bot,
}
#[pymethods]
impl DevnullBot {
    #[new]
    pub fn new(game_state: &GameState) -> Self {
        Self { bot: Bot { state: State::new(game_state.to_game()) } } 
    }

    pub fn pick_action(&mut self, game_state: &GameState) -> PyResult<Action> {
        Ok(from_move(self.bot.pick_move(&game_state.to_game())))
    }

    /// Replay an action after seeing a state. For offline replay.
    pub fn simulate(&mut self, game_state: &GameState, action: Action) -> PyResult<()> {
        self.bot.simulate(&game_state.to_game(), action.to_move());
        Ok(())
    }

    /// Replay a "move-to" action after seeing a state. For offline replay.
    pub fn simulate_move_to(&mut self, game_state: &GameState, move_to: &GamePosition) -> PyResult<()> {
        self.bot.simulate_move_to(&game_state.to_game(), &move_to.to_pos());
        Ok(())
    }
}

fn from_style_name(style: &str) -> Style {
    match style {
        "goldfish" => Style::Goldfish,
        "bull" => Style::Bull,
        "shark" => Style::Shark,
        "owl" => Style::Owl,
        "deer" => Style::Deer,
        "hawk" => Style::Hawk,
        &_ => panic!("Unsupported style name: {}", style),
    }
}

fn from_move(m: Option<Move>) -> Action {
    match m {
        Some(bot_move) => match bot_move {
            Move::Up => Action::Up,
            Move::Down => Action::Down,
            Move::Left => Action::Left,
            Move::Right => Action::Right,
        },
        None => Action::Idle,
    }
}

#[pymodule]
fn devnull_bot(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_class::<GamePosition>()?;
    m.add_class::<GameDirection>()?;
    m.add_class::<GameThreat>()?;
    m.add_class::<GameMap>()?;
    m.add_class::<GameState>()?;
    m.add_class::<Action>()?;
    m.add_class::<DevnullBot>()?;
    Ok(())
}
