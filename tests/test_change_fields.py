from dash import Dash, State, html, Output, Input, callback
from dash_query_builder import DashQueryBuilder


def test_change_fields(dash_duo, fields, trees):
    app = Dash(__name__)
    app.layout = html.Div(
        children=[
            DashQueryBuilder(
                id="dash-query-builder", fields=fields["fields1"], tree=trees["empty"]
            ),
            html.Div(id="output"),
            html.Button(id="change-fields", children="change fields"),
            html.Button(id="update-tree", children="update tree"),
        ]
    )

    @callback(
        Output("dash-query-builder", "tree"),
        Input("update-tree", "n_clicks"),
        State("dash-query-builder", "fields"),
        State("dash-query-builder", "tree"),
        prevent_initial_call=True,
    )
    def update_tree(n_clicks, curr_fields, curr_tree):
        if curr_fields == fields["fields1"]:
            if curr_tree == trees["tree1"]:
                return trees["empty"]
            return trees["tree1"]
        else:
            if curr_tree == trees["tree2"]:
                return trees["empty"]
            return trees["tree2"]

    @callback(
        Output("dash-query-builder", "fields"),
        [Input("change-fields", "n_clicks"), State("dash-query-builder", "fields")],
        prevent_initial_call=True,
    )
    def update_action_button(n, curr_fields):
        if curr_fields == fields["fields1"]:
            return fields["fields2"]
        return fields["fields1"]

    @callback(Output("output", "children"), [Input("dash-query-builder", "sqlFormat")])
    def update_output(sql_format):
        return sql_format

    dash_duo.start_server(app)
    dash_duo.wait_for_text_to_equal("#output", "")
    dash_duo.find_element("#update-tree").click()

    dash_duo.wait_for_text_to_equal(
        "#output",
        "(qty = 3 AND price BETWEEN 11 AND 30 AND color IN ('green', 'yellow'))",
    )

    dash_duo.find_element("#change-fields").click()
    dash_duo.wait_for_text_to_equal("#output", "")
    dash_duo.find_element("#update-tree").click()
    dash_duo.wait_for_text_to_equal(
        "#output",
        "(qty2 = 5 AND color2 IN ('green', 'orange'))",
    )
