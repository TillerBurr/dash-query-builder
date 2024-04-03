import json
import dash_query_builder
import dash
from dash import Output, callback, html, Input, State

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
app.layout = html.Div(
    [
        dash_query_builder.DashQueryBuilder(
            id="component",
            fields=fields["fields"],
            tree=tree,
        ),
        html.Button("Change Fields", id="fields-button"),
        html.Div(id="output"),
    ]
)


@callback(
    Output("output", "children"),
    Input("component", "tree"),
    State("component", "sqlFormat"),
)
def update_output(tree, sql_format):
    val = html.Div([json.dumps(tree), html.Hr(), html.Div(sql_format)])
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
