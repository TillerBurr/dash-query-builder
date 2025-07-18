#!/usr/bin/env just --justfile
set dotenv-load := false

# Clean js assets
clean-js:
    rm -rf dash_query_builder/js
    rm -rf dash_query_builder/*.js
    rm -rf dash_query_builder/*.txt

# Generate components and build the bundle
build: clean-js
    python scripts/make_version.py
    pnpm run build

# Build the webpack bundle
build-js: clean-js
    pnpm run build:js

# Generate the components
generate:
    pnpm run build:backends

# Build the webpack bundle in dev mode
build-dev: clean-js
    pnpm run build:js::dev
# Rebuild the bundle on change
watch: clean-js
    pnpm run watch

# Create venv
venv:
    uv venv
    uv pip sync requirements-dev.txt
    uv pip install -e .[test]

# Sync the venv
sync: venv
	uv pip sync requirements-dev.txt
	uv pip install -e .[test]

# Compile the dependencies
compile:
	uv pip compile -U -q pyproject.toml -o requirements.txt
	uv pip compile -U -q --all-extras pyproject.toml -o requirements-dev.txt


# Package the application for distribution using python wheel.
package: clean build
    python -m build --wheel

# Remove dist & build directories
clean:
    rm -rf dist
    rm -rf build
