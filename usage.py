import json
import dash_query_builder
import dash
from dash import Output, callback, html, Input, State, no_update, callback_context

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
    },
    "fields2": {
        "qty2": {
            "label": "qty2",
            "type": "number",
            "fieldSettings": {"min": 0},
            "valueSources": ["value"],
            "preferWidgets": ["number"],
        },
        "Price2": {
            "label": "Price2",
            "type": "number",
            "valueSources": ["value"],
            "fieldSettings": {"min": 10, "max": 100},
            "preferWidgets": ["slider", "rangeslider"],
        },
        "color2": {
            "label": "Color2",
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
    },
}
tree = {
    "id": "aa8abaa8-cdef-4012-b456-717f1e3484de",
    "type": "group",
    "children1": [
        {
            "id": "98a9baba-4567-489a-bcde-f17f1e35f74c",
            "type": "rule",
            "properties": {
                "field": "qty",
                "operator": "equal",
                "value": [3],
                "valueSrc": ["value"],
                "valueType": ["number"],
            },
        },
        {
            "id": "a99b99aa-0123-4456-b89a-b17f1e3608b4",
            "type": "rule",
            "properties": {
                "field": "price",
                "fieldSrc": "field",
                "operator": "between",
                "value": [11, 30],
                "valueSrc": ["value", None],
                "valueType": ["number", "number"],
            },
        },
        {
            "id": "9a8b99a9-cdef-4012-b456-717f1e360a4c",
            "type": "rule",
            "properties": {
                "field": "color",
                "operator": "select_any_in",
                "value": [["green", "yellow"]],
                "valueSrc": ["value"],
                "valueType": ["multiselect"],
            },
        },
    ],
}
jsonLogic = {
    # "errors": [],
    # "logic": {
    "and": [
        {"==": [{"var": "qty"}, 3]},
        {"<=": [11, {"var": "price"}, 30]},
        {"in": [{"var": "color"}, ["green", "yellow"]]},
    ]
    # },
    # "data": {": {"qty": None, "price": None, "color": None}},
}
broken_jsonLogic = {
    "errors": [],
    "logic": {
        "and": [
            {"==": [{"var": "doesntExist"}, 3]},
        ]
    },
}

spelFormat = (
    "(qty == 3 && price >= 11 &&"
    + " price <= 30 &&"
    + " {'green', 'yellow'}.?[true].contains(color))"
)
broken_spelFormat = "(doesntExist == 3)"
empty_ = {
    "id": "889239a8-cdef-4012-b456-717b503a0ffb",
    "type": "group",
    "children1": [],
}
app.layout = html.Div(
    [
        dash_query_builder.DashQueryBuilder(
            id="dqb",
            fields=fields["fields"],
            # tree=tree,
            spelFormat=spelFormat,
            loadFormat="spelFormat",
            theme="basic",
        ),
        html.Button("Change Fields", id="fields-button"),
        html.Hr(),
        html.Button(id="update-format-tree", children="Change loadFormat to Tree"),
        html.Button(id="update-format-json", children="Change loadFormat to JSONLogic"),
        html.Button(id="update-format-spel", children="Change loadFormat to SPEL"),
        html.Hr(),
        html.Button(id="update-tree-prop", children="Click to Update Using Tree Input"),
        html.Button(
            id="update-json-prop", children="Click to Update Using JSONLogic Input"
        ),
        html.Button(id="update-spel-prop", children="Click to Update Using SPEL Input"),
        html.Hr(),
        html.Div(id="output"),
    ]
)


@callback(
    Output("dqb", "loadFormat"),
    [
        Input("update-format-tree", "n_clicks"),
        Input("update-format-json", "n_clicks"),
        Input("update-format-spel", "n_clicks"),
    ],
)
def update_load_format(n_clicks_tree, n_clicks_json, n_clicks_spel):
    if not callback_context.triggered:
        return no_update
    else:
        button_id = callback_context.triggered[0]["prop_id"].split(".")[0]
        if button_id == "update-format-tree":
            return "tree"
        if button_id == "update-format-json":
            return "jsonLogicFormat"
        if button_id == "update-format-spel":
            return "spelFormat"


@callback(
    Output("dqb", "tree"),
    Input("update-tree-prop", "n_clicks"),
    prevent_initial_call=True,
)
def update_tree_value(n):
    if n is not None and n % 2 == 1:
        rv = tree
    else:
        rv = empty_

    return rv


@callback(
    Output("dqb", "jsonLogicFormat"),
    Input("update-json-prop", "n_clicks"),
    prevent_initial_call=True,
)
def update_json_tree_value(n):
    if n is not None and n % 2 == 1:
        rv = jsonLogic
    else:
        rv = {}

    return rv


@callback(
    Output("dqb", "spelFormat"),
    Input("update-spel-prop", "n_clicks"),
    prevent_initial_call=True,
)
def update_spel_tree_value(n):
    if n is not None and n % 2 == 1:
        rv = spelFormat
    else:
        rv = None

    return rv


@callback(
    Output("output", "children"),
    Input("dqb", "tree"),
    [
        State("dqb", "sqlFormat"),
        State("dqb", "jsonLogicFormat"),
        State("dqb", "spelFormat"),
        State("dqb", "queryString"),
        State("dqb", "queryBuilderFormat"),
        State("dqb", "mongoDBFormat"),
        State("dqb", "elasticSearchFormat"),
    ],
)
def update_output(
    tree,
    sql_format,
    jsonL,
    spel,
    queryString,
    queryBuilderFormat,
    mongoDBFormat,
    elasticSearchFormat,
):
    val = html.Div(
        [
            html.H1("tree"),
            json.dumps(tree),
            html.Hr(),
            html.H1("sqlFormat"),
            html.Div(sql_format),
            html.Hr(),
            html.H1("jsonLogicFormat"),
            html.Div(json.dumps(jsonL)),
            html.Hr(),
            html.H1("spelFormat"),
            html.Div(spel),
            html.Hr(),
            html.H1("queryString"),
            html.Div(queryString),
            html.Hr(),
            html.H1("queryBuilderFormat"),
            html.Div(json.dumps(queryBuilderFormat)),
            html.Hr(),
            html.H1("mongoDBFormat"),
            html.Div(json.dumps(mongoDBFormat)),
            html.Hr(),
            html.H1("elasticSearchFormat"),
            html.Div(json.dumps(elasticSearchFormat)),
        ]
    )
    return val


@callback(
    Output("dqb", "fields"),
    Input("fields-button", "n_clicks"),
    prevent_initial_call=True,
)
def update_fields(n):
    if n is not None and n % 2 == 1:
        return fields["fields2"]
    else:
        return fields["fields"]


if __name__ == "__main__":
    app.run_server(debug=True)
