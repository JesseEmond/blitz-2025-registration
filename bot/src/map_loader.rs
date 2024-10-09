use std::fs;
use std::path::Path;

use image::{ImageReader, Rgb};

use crate::grid::{Grid, Pos};
use crate::simulation::{Game, Style, Threat};

const MAPS_FOLDER: &str = "maps";
const LAYOUT_FILENAME: &str = "layout.png";

#[derive(Clone, Debug)]
enum TileType {
    NonWalkable,
    Walkable,
    Character,
    Threat(Style),
}

const TILE_LOOKUPS: &'static [(TileType, Rgb<u8>)] = &[
    (TileType::NonWalkable, Rgb([0, 0, 0])),
    (TileType::Walkable, Rgb([255, 255, 255])),
    (TileType::Character, Rgb([0, 0, 255])),
    (TileType::Threat(Style::Bull), Rgb([255, 0, 0])),
    (TileType::Threat(Style::Goldfish), Rgb([255, 125, 0])),
    (TileType::Threat(Style::Shark), Rgb([255, 255, 0])),
    (TileType::Threat(Style::Owl), Rgb([0, 125, 0])),
    (TileType::Threat(Style::Deer), Rgb([0, 255, 0])),
    (TileType::Threat(Style::Hawk), Rgb([125, 125, 0])),
];

pub type Result<T> = std::result::Result<T, MapLoadingError>;

#[derive(Debug)]
pub enum MapLoadingError {
    NoMapsFolder(std::io::Error),
    FileLoadingError(std::io::Error),
    LayoutDecodingError(image::error::ImageError),
    NoSpawnPoint,
}

pub struct Map {
    pub name: String,
    pub game: Game,
}

pub fn list_map_names() -> Result<Vec<String>> {
    let paths = fs::read_dir(MAPS_FOLDER)
        .map_err(|e| MapLoadingError::NoMapsFolder(e))?;
    let mut paths: Vec<String> = paths.filter_map(|entry| {
        entry.ok().and_then(|e| {
            e.path().file_name()
                .and_then(|p| p.to_str().map(|s| String::from(s)))
        })
    }).collect();
    paths.sort();
    Ok(paths)
}

pub fn load_map(map_name: &str) -> Result<Map> {
    let layout_path = Path::new(MAPS_FOLDER).join(map_name).join(LAYOUT_FILENAME);
    let reader = ImageReader::open(layout_path)
        .map_err(|e| MapLoadingError::FileLoadingError(e))?;
    let layout = reader.decode()
        .map_err(|e| MapLoadingError::LayoutDecodingError(e))?;
    let width = layout.width();
    let height = layout.height();
    let rgb = layout.to_rgb8();
    // Following
    // https://github.com/JesseEmond/blitz-2025-registration/blob/971949e077a937a51844f98a9a02f2855c80cdc4/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/maps/map_loader.decomp.js#L243
    // default to walkable
    let mut tiles = vec![vec![false; height as usize]; width as usize];
    let mut pos = None;
    let mut threats = vec![];
    for x in 0..width as usize {
        for y in 0..height as usize {
            let p = Pos { x: x as i16, y: y as i16 };
            let pixel = rgb.get_pixel(x as u32, y as u32);
            if let Some(tile_type) = get_best_match(*pixel) {
                match tile_type {
                    TileType::Character => pos = Some(p),
                    TileType::Walkable => tiles[x][y] = false,
                    TileType::NonWalkable => tiles[x][y] = true,
                    TileType::Threat(style) => threats.push(Threat::spawn(p, style)),
                }
            }
        }
    }
    if pos.is_none() {
        return Err(MapLoadingError::NoSpawnPoint);
    }
    Ok(Map {
        name: String::from(map_name),
        game: Game {
            tick: 1,
            alive: true,
            grid: Grid::new(width as u8, height as u8, tiles),
            pos: pos.unwrap(),
            threats,
        },
    })
}

pub fn load_all_maps() -> Result<Vec<Map>> {
    list_map_names()?.iter()
        .map(|name| load_map(name))
        .collect()
}

fn get_best_match(pixel: Rgb<u8>) -> Option<TileType> {
    // Reference:
    // https://github.com/JesseEmond/blitz-2025-registration/blob/971949e077a937a51844f98a9a02f2855c80cdc4/disassembled_js/490a918d96484178d4b23d814405ac87/challenge/maps/map_loader.decomp.js#L182-L202
    TILE_LOOKUPS.iter().cloned()
        .map(|(t, color)| (t, color, color_distance(color, pixel)))
        .min_by_key(|&(_, _, dist)| dist)
        .filter(|&(_, _, dist)| dist < 20)
        .map(|(tile_type, _, _)| tile_type)
}

fn color_distance(a: Rgb<u8>, b: Rgb<u8>) -> usize {
    let a = a.0;
    let b = b.0;
    ((a[0] as i16 - b[0] as i16).abs() + (a[1] as i16 - b[1] as i16).abs()
        + (a[2] as i16 - b[2] as i16).abs()) as usize
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_list_map_names_returns_some() {
        let map_names = list_map_names().expect("map_names");
        assert!(!map_names.is_empty());
    }

    #[test]
    fn test_load_map_challenge1() {
        let map = load_map("challenge1").expect("map");
        assert_eq!(map.name, "challenge1");
        assert_eq!((map.game.grid.width, map.game.grid.height), (22, 15));
        assert_eq!(map.game.tick, 1);  // Starting tick
        assert!(map.game.alive);
        // Corners should be walls
        assert!(!map.game.grid.is_empty(&Pos { x: 0, y: 0 }));
        // (1, 1) is walkable
        assert!(map.game.grid.is_empty(&Pos { x: 1, y: 1 }));
        assert_eq!(map.game.pos, Pos { x: 9, y: 7 });
        assert_eq!(map.game.threats.len(), 6);
    }

    #[test]
    fn test_load_all_maps_returns_some() {
        let maps = load_all_maps().expect("maps");
        assert!(!maps.is_empty());
    }
}
