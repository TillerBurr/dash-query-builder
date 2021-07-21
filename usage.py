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
    }
}
app.layout = html.Div(
    [
        dash_query_builder.DashQueryBuilder(
            id="input", fields=fields["fields"], theme="antd"
        ),
        html.Div(id="output"),
        html.Hr(),
        html.Div(id="secondaryOut"),
    ]
)


@app.callback(
    Output("output", "children"), [Input("input", "sqlFormat"), Input("input", "tree")],
)
def display_output(fmt: str, tree: str):
    # with open("test.txt", "w") as f:
    #     json.dump(json.dumps(tree), f)
    new_fmt = fmt.replace("EMPTY", "NULL") if fmt is not None else None
    return new_fmt


if __name__ == "__main__":
    app.run_server(debug=True)
