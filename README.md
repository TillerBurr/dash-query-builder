# Dash Query Builder

Component for Dash based on react-awesome-query-builder

## Install

```shell
pip install dash_query_builder
```

## Development

### Getting Started

1. Optional: Use [mise-en-place](https://mise.jdx.dev) to manage the toolchain.

    ```shell
    mise install
    ```

    1. Or use [nvm](https://github.com/nvm-sh/nvm) to manage node version:
        ```shell
        nvm install
        nvm use
        ```

2. Create a new python environment:

    ```shell
    python -m venv .venv
    . .venv/bin/activate
    ```

    _Note: .venv\Scripts\activate for windows_

3. Install python dependencies:
    ```shell
    python -m pip install -r requirements.txt
    ```
4. Install pnpm packages:
    ```shell
    pnpm install
    ```
5. Build:
    ```shell
    pnpm run build
    ```

### Component Code

### Publish

If publish on pnpm:

```shell
pnpm build
pnpm publish
```

### Justfile

Alternatively, use the provided [just](https://github.com/casey/just) commands:

1. Create a Python environment from previous step 1 and install:
    ```shell
    just install
    ```
2. Build
    ```shell
    just build
    ```
3. Publish
    ```shell
    just publish
    ```
4. See all commands with `just -l`
