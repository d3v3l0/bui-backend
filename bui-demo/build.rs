extern crate bui_backend_codegen;

#[cfg(feature = "frontend_js")]
fn main() {
    bui_backend_codegen::codegen("frontend_js", "public.rs").expect("codegen failed");
}

#[cfg(feature = "frontend_elm")]
fn main() {
    let files_dir: std::path::PathBuf = ["frontend_elm", "dist"].iter().collect();
    bui_backend_codegen::codegen(&files_dir, "public.rs").expect("codegen failed");
}