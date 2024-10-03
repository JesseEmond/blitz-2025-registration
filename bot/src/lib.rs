/// Boilerplate for Python code calling into this library.
/// A lot of duplication here, do this so that other parts of the Rust code can
/// ignore that it can run inside Python.

pub mod search;
pub mod simulation;

use pyo3::prelude::*;

use crate::search::Bot;
use crate::simulation::{Game, Grid, Move, Pos, State, Style, Threat};

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
    fn from_move(m: Move) -> Self {
        match m {
            Move::Up => Self::Up,
            Move::Down => Self::Down,
            Move::Left => Self::Left,
            Move::Right => Self::Right,
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

#[pymethods]
impl GamePosition {
    #[new]
    pub fn new(x: i32, y: i32) -> GamePosition {
        GamePosition { x, y }
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
            pos: Pos { x: self.position.x as i16, y: self.position.y as i16 },
            grid: Grid {
                width: self.map.width as u8,
                height: self.map.height as u8,
                tiles: self.map.tiles.clone(),
            },
            threats: self.threats.iter().map(
                |t| Threat::new(Pos { x: t.position.x as i16, y: t.position.y as i16 },
                                from_style_name(&t.style),
                                t.direction.to_move()))
                .collect(),
            alive: self.alive,
        }
    }

    fn from_game(game: &Game, prev_state: &Self) -> Self {
        GameState {
            position: GamePosition { x: game.pos.x as i32, y: game.pos.y as i32 },
            tick: game.tick as u32,
            threats: game.threats.iter().zip(prev_state.threats.iter())
                .map(|(t, prev_t)| GameThreat {
                    position: GamePosition { x: t.pos.x as i32, y: t.pos.y as i32 },
                    direction: GameDirection::from_move(t.dir),
                    style: prev_t.style.clone(),  // That doesn't change.
                })
                .collect(),
            alive: game.alive,
            map: prev_state.map.clone(),  // That doesn't change.
        }
    }
}

#[pyclass]
pub struct GameSimulator {
    state: State,
    init_state: GameState,
}
#[pymethods]
impl GameSimulator {
    #[new]
    pub fn new(game_state: &GameState) -> Self {
        let init_state = game_state.clone();
        GameSimulator { state: State::new(game_state.to_game()), init_state }
    }

    pub fn predict_next_tick(&mut self, action: Action) -> PyResult<GameState> {
        self.state.simulate_tick(to_move(action));
        Ok(GameState::from_game(&Game {
            tick: self.state.tick,
            pos: self.state.pos,
            grid: Grid::clone(&self.state.grid),
            threats: self.state.threats.clone(),
            alive: !self.state.game_over,
        }, &self.init_state))
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
fn to_move(action: Action) -> Option<Move> {
    match action {
        Action::Idle => None,
        Action::Up => Some(Move::Up),
        Action::Down => Some(Move::Down),
        Action::Left => Some(Move::Left),
        Action::Right => Some(Move::Right),
    }
}

#[pyfunction]
fn pick_action(game_state: &GameState) -> PyResult<Action> {
    let bot = Bot {};
    Ok(from_move(bot.pick_move(game_state.to_game())))
}

#[pymodule]
fn devnull_bot(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(pick_action, m)?)?;
    m.add_class::<GamePosition>()?;
    m.add_class::<GameDirection>()?;
    m.add_class::<GameThreat>()?;
    m.add_class::<GameMap>()?;
    m.add_class::<GameState>()?;
    m.add_class::<Action>()?;
    m.add_class::<GameSimulator>()?;
    Ok(())
}
