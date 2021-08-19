import dash_query_builder
import dash
import json
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)
fields = {
    "fields": {
        "qty": {
            "label": "Qty",
            "type": "number",
            "fieldSettings": {"min": 0},
            "valueSources": ["value"],
            "preferWidgets": ["number"],
        },
        "main_report_data.price": {
            "label": "Price",
            "type": "number",
            "valueSources": ["value"],
            "fieldSettings": {"min": 10, "max": 100},
            "preferWidgets": ["slider", "rangeslider"],
        },
        "main_report_data.color": {
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
        "main_report_data.is_promotion": {
            "label": "Promo?",
            "type": "boolean",
            "operators": ["equal", "is_empty"],
            "valueSources": ["value"],
        },
    }
}
tree = {
    "id": "89a89ab9-0123-4456-b89a-b17b50335ea0",
    "type": "group",
    "path": ["89a89ab9-0123-4456-b89a-b17b50335ea0"],
    "children1": {
        "889899a8-cdef-4012-b456-717b503a0ffb": {
            "type": "rule",
            "id": "889899a8-cdef-4012-b456-717b503a0ffb",
            "properties": {
                "field": "main_report_data.color",
                "operator": "select_any_in",
                "value": [["green", "yellow"]],
                "valueSrc": ["value"],
                "operatorOptions": None,
                "valueType": ["multiselect"],
            },
            "path": [
                "89a89ab9-0123-4456-b89a-b17b50335ea0",
                "889899a8-cdef-4012-b456-717b503a0ffb",
            ],
        }
    },
}

empty_ = {"id": "889239a8-cdef-4012-b456-717b503a0ffb", "type": "group"}
app.layout = html.Div(
    [
        dash_query_builder.DashQueryBuilder(
            id="input",
            fields=fields["fields"],
            theme="material",
            # tree=json.dumps(tree),
            # sqlFormat="main_report_data.color IN ('green', 'yellow')",
        ),
        html.Div(id="output"),
        html.Hr(),
        html.Button(id="update-button", children="Click to Update"),
    ]
)


@app.callback(
    Output("output", "children"), [Input("input", "sqlFormat")],
)
def display_output(fmt: str):
    # with open("test.txt", "w") as f:
    #     json.dump(json.dumps(tree), f)
    new_fmt = fmt.replace("EMPTY", "NULL") if fmt is not None else None
    return new_fmt


@app.callback(
    Output("input", "tree"),
    Input("update-button", "n_clicks"),
    # prevent_initial_call=True,
)
def update_tree_value(n):
    if n is None:
        rv = empty_
    elif n % 2 == 1:
        rv = tree
    elif n % 2 == 0:
        rv = empty_
    else:
        rv = empty_

    return rv


if __name__ == "__main__":
    app.run_server(debug=True)
