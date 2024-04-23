# Dash Query Builder

Component for Dash based on [react-awesome-query-builder](https://github.com/ukrbublik/react-awesome-query-builder).
The component is a way to graphically generate WHERE clauses for SQL queries.

## Install

```shell
pip install dash_query_builder
```

## Usage

To use Dash Query Builder (DQB), you need to have a Dash app and a dictionary of fields.
The fields property is a dictionary of fields and their properties, following the
[config.fields docs](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields).
The only caveat is that JavaScript cannot be used as in the example.

For instance the following dictionary is valid:

```python
fields = {
    "qty": {
        "label": "Qty",
        "type": "number",
        "fieldSettings": {"min": 0},
        "valueSources": ["value"],
        "preferWidgets": ["number"],
    },
    "price": {
        "label": "Price",
        "type": "number",
        "valueSources": ["value"],
        "fieldSettings": {"min": 10, "max": 100},
        "preferWidgets": ["slider", "rangeslider"],
        "operators": ["equal", "between"],
    },
    "color": {
        "label": "Color",
        "type": "select",
        "valueSources": ["value"],
        "fieldSettings": {
            "listValues": [
                {"value": "yellow", "title": "Yellow"},
                {"value": "green", "title": "Green"},
                {"value": "orange", "title": "Orange"},
            ]
        },
    },
    "is_promotion": {
        "label": "Promo?",
        "type": "boolean",
        "operators": ["equal", "is_empty"],
        "valueSources": ["value"],
    },
}
```

The basic component can be created via:

```python
from dash import Dash, html
import dash_query_builder as dqb
fields =...
app=Dash(__name__)
app.layout=html.Div([dqb.DashQueryBuilder(fields=fields)])
app.run_server()
```

This will run the app similar to this:

https://github.com/TillerBurr/dash-query-builder/assets/49296311/1fdc9663-fde7-4c26-a706-00b5edc9f902

There are other properties available as well, with defaults in parentheses.

-   config({}): see [CONFIG.adoc](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc) for full options
-   theme("basic"): one of "antd", "mui", "fluent", "bootstrap", "basic"
-   loadFormat("tree"): one of "tree", "spelFormat", "jsonLogicFormat"
-   alwaysShowActionButtons(True): A boolean whether to always show action buttons, e.g. "Add Rule", "Add Group", etc.

With the above parameters, a query builder will be created with an empty tree. To pre-populate the query builder,
there are several ways to do so:

1. `loadFormat=="tree"`: Set `tree` to a valid tree object.
1. `loadFormat=="spelFormat"`: Set `spelFormat` to a valid SpEL string.
1. `loadFormat=="jsonLogicFormat"`: Set `jsonLogicFormat` to a valid jsonLogic object.

Once `loadFormat` is set, the tree/query builder will update when the query is changed or when the corresponding property is changed.
The `loadFormat` can be changed via a callback, while keeping the same tree.

Here's an example using `usage.py`:

https://github.com/TillerBurr/dash-query-builder/assets/49296311/1191a643-27c0-4a4f-8032-2eb5d4b1d88e

## Where Parser

DQB has a built-in parser for SQL queries. The parser is relatively simple as far as parsers go, but it does what I need it to.
It will parse the query and return a template string and a parameter dictionary. The template string will be in `pyformat` style, as
specified in [PEP 249](https://peps.python.org/pep-0249/#paramstyle).

### Example

```python
from dash_query_builder.where_parser import WhereParser
where_parser = WhereParser()
template, params = where_parser.get_template("qty > 15 and price between 10 and 20")
print(template) # (qty > %(YSaAddDFs27s)s AND price BETWEEN %(W5PRwTGpFqqF)s AND %(N2nGExcGaUSt)s)
print(params) # {'YSaAddDFs27s': 15, 'W5PRwTGpFqqF': 10, 'N2nGExcGaUSt': 20}
```

Currently, only `pyformat` is supported. PRs are welcome!

## Tools Used

-   [uv](https://github.com/astral-sh/uv) for Python virtual environment and dependencies.
-   [just](https://github.com/casey/just) for common commands
-   [mise-en-place](https://mise.jdx.dev) to manage the toolchain.

## Development

### Getting Started

1. Create a Python environment from previous step 1 and install:
    ```shell
    just sync
    ```
1. Update the requirements and dev requirements
    ```shell
    just compile
    ```
1. Build
    ```shell
    just build
    ```
1. Publish
    ```shell
    just publish
    ```
1. See all commands with `just -l`
