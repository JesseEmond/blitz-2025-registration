/// Boilerplate for Python code calling into this library.
/// A lot of duplication here, do this so that other parts of the Rust code can
/// ignore that it can run inside Python.

pub mod search;
pub mod simulation;

use pyo3::prelude::*;

use crate::search::Bot;
use crate::simulation::{Game, Grid, Move, Pos, Threat};

#[pyclass]
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
    pub style: String,
}

#[pymethods]
impl GameThreat {
    #[new]
    pub fn new(position: GamePosition, style: String) -> GameThreat {
        GameThreat { position, style }
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
pub struct GameState {
    #[pyo3(get, set)]
    pub tick: u32,
    #[pyo3(get, set)]
    pub position: GamePosition,
    #[pyo3(get, set)]
    pub threats: Vec<GameThreat>,
    #[pyo3(get, set)]
    pub map: GameMap,
}

#[pymethods]
impl GameState {
    #[new]
    pub fn new(tick: u32, position: GamePosition, threats: Vec<GameThreat>,
               map: GameMap) -> GameState {
        GameState { tick, position, threats, map }
    }
}

#[pyfunction]
fn pick_action(game: &GameState) -> PyResult<Action> {
    let bot = Bot {};
    let bot_game = Game {
        tick: game.tick as usize,
        pos: Pos { x: game.position.x as i16, y: game.position.y as i16 },
        grid: Grid {
            width: game.map.width as u8,
            height: game.map.height as u8,
            tiles: game.map.tiles.clone(),
        },
        threats: game.threats.iter().map(
            |t| Threat { pos: Pos { x: t.position.x as i16, y: t.position.y as i16 } })
            .collect(),
    };
    Ok(match bot.pick_move(&bot_game) {
        Some(bot_move) => match bot_move {
            Move::Up => Action::Up,
            Move::Down => Action::Down,
            Move::Left => Action::Left,
            Move::Right => Action::Right,
        },
        None => Action::Idle,
    })
}

#[pymodule]
fn devnull_bot(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(pick_action, m)?)?;
    m.add_class::<GamePosition>()?;
    m.add_class::<GameThreat>()?;
    m.add_class::<GameMap>()?;
    m.add_class::<GameState>()?;
    m.add_class::<Action>()?;
    Ok(())
}
