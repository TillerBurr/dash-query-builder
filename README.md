# Dash Query Builder

Dash Query Builder is a Dash component library.

This project uses [Poetry](https://python-poetry.org/docs/) and [pnpm](https://pnpm.io/).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Install dependencies

1. Install pnpm packages
    ```
    $ pnpm install
    ```

2. Install python packages required to build components.
    ```
    $ poetry install
    ```

### Write your component code in `src/lib/components/DashQueryBuilder.react.js`.

- Test your code in a Python environment:
    1. Build your code

        ```bash
        pnpm run build
        ```

    2. Run and modify the `usage.py` sample dash app:

        ```bash
        poetry run python usage.py
        ```

- Write tests for your component. (There are currently no tests for this package. The component has some finicky selectors that I still need to figure out.)
  - A sample test is available in `tests/test_usage.py`, it will load `usage.py` and you can then automate interactions with selenium.
  - Run the tests with `$ pytest tests`.
  - The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)
- Add custom styles to your component by putting your custom CSS files into your distribution folder (`dash_query_builder`).
  - Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
  - Make sure the stylesheets are added to the `_css_dist` dict in `dash_query_builder/__init__.py` so dash will serve them automatically when the component suite is requested.
- [Review your code](./review_checklist.md)

### Create a production build and publish:

1. Build your code:
    ```
    $ pnpm run build
    ```
2. Create a Python distribution
    ```
    $ poetry build
    ```
    This will create source and wheel distribution in the generated the `dist/` folder.

3. Publish the component to PyPI:
    1. Publish on PyPI
        ```
        $ poetry publish
        ```
