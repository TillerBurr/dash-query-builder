set dotenv-load := false

# Generate components and build the bundle
build:
    rm -rf dash_query_builder/js
    rm -rf dash_query_builder/*.js
    pnpm run build

# Build the webpack bundle
build-js:
    rm -rf dash_query_builder/js
    rm -rf dash_query_builder/*.js
    pnpm run build:js

# Generate the components
generate:
    pnpm run build:backends

# Rebuild the bundle on change
watch:
    pnpm run watch

# Install  pip requirements & node modules.
install:
    python -m pip install -r requirements.txt
    pnpm install

# Package the application for distribution using python wheel.
package: clean build
    python -m build --wheel

# Publish the package to pypi using twine.
publish: package
    pnpm publish
    twine upload dist/*

# Remove dist & build directories
clean:
    rm -rf dist
    rm -rf build
