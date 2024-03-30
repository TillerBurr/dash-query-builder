import dash_query_builder
import dash

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
app.layout = dash_query_builder.DashQueryBuilder(
    id="component", fields=fields, tree=tree, config={}
)


if __name__ == "__main__":
    app.run_server(debug=True)
