import json
import dash_query_builder
import dash
from dash import Output, callback, html, Input, State, no_update, callback_context

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
        }
    },
    "fields2": {
        "main_report_data": {
            "type": "!struct",
            "label": "Fields",
            "subfields": {
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
                "field": "main_report_data.qty",
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
                "field": "main_report_data.price",
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
                "field": "main_report_data.color",
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
        {"==": [{"var": "main_report_data.qty"}, 3]},
        {"<=": [11, {"var": "main_report_data.price"}, 30]},
        {"in": [{"var": "main_report_data.color"}, ["green", "yellow"]]},
    ]
    # },
    # "data": {"main_report_data": {"qty": None, "price": None, "color": None}},
}
broken_jsonLogic = {
    "errors": [],
    "logic": {
        "and": [
            {"==": [{"var": "main_report_data.doesntExist"}, 3]},
        ]
    },
    "data": {"main_report_data": {"doesntExist": None}},
}

spelFormat = (
    "(main_report_data.qty == 3 && main_report_data.price >= 11 &&"
    + " main_report_data.price <= 30 &&"
    + " {'green', 'yellow'}.?[true].contains(main_report_data.color))"
)
broken_spelFormat = "(doesntExist == 3)"
empty_ = {"id": "889239a8-cdef-4012-b456-717b503a0ffb", "type": "group"}
app.layout = html.Div(
    [
        dash_query_builder.DashQueryBuilder(
            id="component", fields=fields["fields"], tree=tree, theme="bootstrap"
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
    Output("component", "loadFormat"),
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
    Output("component", "tree"),
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
    Output("component", "jsonLogicFormat"),
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
    Output("component", "spelFormat"),
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
    Input("component", "tree"),
    [
        State("component", "sqlFormat"),
        State("component", "jsonLogicFormat"),
        State("component", "spelFormat"),
    ],
)
def update_output(tree, sql_format, jsonL, spel):
    val = html.Div(
        [
            json.dumps(tree),
            html.Hr(),
            html.Div(sql_format),
            html.Hr(),
            html.Div(json.dumps(jsonL)),
            html.Hr(),
            html.Div(json.dumps(spel)),
        ]
    )
    return val


@callback(
    Output("component", "fields"),
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
