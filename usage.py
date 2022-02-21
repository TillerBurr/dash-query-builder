import dash_query_builder
from dash import html, dash, Input, Output, State
import json

app = dash.Dash(__name__)
fields = {
    "fields": {
        "main_report_data": {
            "type": "!struct",
            "label": "Fields",
            "subfields": {
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
            },
        }
    }
}
tree = {
    "id": "aa8abaa8-cdef-4012-b456-717f1e3484de",
    "type": "group",
    "children1": {
        "98a9baba-4567-489a-bcde-f17f1e35f74c": {
            "type": "rule",
            "properties": {
                "field": "main_report_data.qty",
                "operator": "equal",
                "value": [3],
                "valueSrc": ["value"],
                "valueType": ["number"],
            },
        },
        "a99b99aa-0123-4456-b89a-b17f1e3608b4": {
            "type": "rule",
            "properties": {
                "field": "main_report_data.price",
                "operator": "between",
                "value": [11, 30],
                "valueSrc": ["value", None],
                "valueType": ["number", "number"],
            },
        },
        "9a8b99a9-cdef-4012-b456-717f1e360a4c": {
            "type": "rule",
            "properties": {
                "field": "main_report_data.color",
                "operator": "select_any_in",
                "value": [["green", "yellow"]],
                "valueSrc": ["value"],
                "valueType": ["multiselect"],
            },
        },
    },
}
jsonLogicTree = {
    "errors": [],
    "logic": {
        "and": [
            {"==": [{"var": "main_report_data.qty"}, 3]},
            {"<=": [11, {"var": "main_report_data.price"}, 30]},
            {"in": [{"var": "main_report_data.color"}, ["green", "yellow"]]},
        ]
    },
    "data": {"main_report_data": {"qty": None, "price": None, "color": None}},
}
spelFormatTree = "(main_report_data.qty == 3 && main_report_data.price >= 11 && main_report_data.price <= 30 && {'green', 'yellow'}.?[true].contains(main_report_data.color))"
empty_ = {"id": "889239a8-cdef-4012-b456-717b503a0ffb", "type": "group"}
app.layout = html.Div(
    [
        dash_query_builder.DashQueryBuilder(
            id="input",
            fields=fields["fields"],
            theme="mui",
            tree=empty_,
            alwaysShowActionButtons=True,
        ),
        html.Div(id="output"),
        html.Hr(),
        html.Button(id="update-button", children="Click to Update Using Tree Input"),
        html.Button(
            id="update-button-json", children="Click to Update Using JSONLogic Input"
        ),
        html.Button(
            id="update-button-spel", children="Click to Update Using SPEL Input"
        ),
    ]
)


@app.callback(
    Output("output", "children"),
    [Input("input", "tree")],
    [
        State("input", "sqlFormat"),
        State("input", "jsonLogicFormat"),
        State("input", "spelFormat"),
    ],
)
def display_output(tree_value, sqlFormat, jsonLogicFormat, spelFormat):
    output = html.Div(
        children=[
            html.H1("tree"),
            html.Div(json.dumps(tree_value, indent=2)),
            html.Hr(),
            html.H1("sqlFormat"),
            html.Div(sqlFormat),
            html.Hr(),
            html.H1("jsonLogicFormat"),
            html.Div(json.dumps(jsonLogicFormat)),
            html.Hr(),
            html.H1("spelFormat"),
            html.Div(spelFormat),
        ]
    )
    return output


@app.callback(
    Output("input", "tree"),
    Input("update-button", "n_clicks"),
    # prevent_initial_call=True,
)
def update_tree_value(n):
    if n is not None and n % 2 == 1:
        rv = tree
    else:
        rv = empty_

    return rv


@app.callback(
    Output("input", "jsonLogicFormat"),
    Input("update-button-json", "n_clicks"),
    prevent_initial_call=True,
)
def update_json_tree_value(n):
    if n is not None and n % 2 == 1:
        rv = jsonLogicTree
    else:
        rv = {}

    return rv


@app.callback(
    Output("input", "spelFormat"),
    Input("update-button-spel", "n_clicks"),
    prevent_initial_call=True,
)
def update_spel_tree_value(n):
    if n is not None and n % 2 == 1:
        rv = spelFormatTree
    else:
        rv = None

    return rv


if __name__ == "__main__":
    app.run_server(debug=True)
