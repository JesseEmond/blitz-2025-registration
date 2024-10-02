use pyo3::prelude::*;

#[pyfunction]
fn hello_world() -> PyResult<u128> {
    println!("Hello world, from Rust!");
    Ok(42)
}

#[pymodule]
fn devnull_bot(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(hello_world, m)?)?;
    Ok(())
}
