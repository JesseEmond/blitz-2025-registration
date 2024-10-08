use std::fs;
use std::io;

const MAPS_FOLDER: &str = "maps";
const LAYOUT_FILENAME: &str = "layout.png";

fn list_map_names() -> io::Result<Vec<String>> {
    let paths = fs::read_dir(MAPS_FOLDER)?;
    let mut paths: Vec<String> = paths.filter_map(|entry| {
        entry.ok().and_then(|e| {
            e.path().file_name()
                .and_then(|p| p.to_str().map(|s| String::from(s)))
        })
    }).collect();
    paths.sort();
    Ok(paths)
}

// TODO: Load maps!

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_list_map_names_returns_some() {
        let map_names = list_map_names();
        assert!(map_names.is_ok(), "{:?}", map_names);
        assert!(!map_names.unwrap().is_empty());
    }
}
