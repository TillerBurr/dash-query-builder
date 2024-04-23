import pytest
from dash import Dash, Input, Output, callback, html
from selenium.common.exceptions import TimeoutException

from dash_query_builder import DashQueryBuilder


def test_show(dash_duo, fields):
    app = Dash(__name__)
    app.layout = html.Div(
        children=[
            DashQueryBuilder(
                id="dash-query-builder",
                fields=fields["fields1"],
                alwaysShowActionButtons=True,
            ),
            html.Button("Show", id="show"),
        ]
    )

    @callback(
        Output("dash-query-builder", "alwaysShowActionButtons"),
        [Input("show", "n_clicks")],
        prevent_initial_call=True,
    )
    def update_action_button(n):
        if n % 2 == 0:
            return True
        return False

    dash_duo.start_server(app)
    with pytest.raises(TimeoutException):
        dash_duo.wait_for_contains_class(".query-builder", "qb-lite", 3)

    dash_duo.wait_for_element("#show").click()

    dash_duo.wait_for_contains_class(".query-builder", "qb-lite")
