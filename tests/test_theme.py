import pytest
from dash import Dash, html

from dash_query_builder.DashQueryBuilder import DashQueryBuilder

antd_selector = "#dash-query-builder > div > div > div > div > div.group--header.one--child.hide--line.no--children > div.group--actions.group--actions--tr > div"
bootstrap_selector = "#dash-query-builder > div > div > div > div > div.group--header.one--child.hide--line.no--children > div.group--actions.group--actions--tr > div"
mui_selector = "#dash-query-builder > div > div > div > div > div > div.group--header.one--child.hide--line.no--children > div.group--actions.group--actions--tr > button:nth-child(1)"
fluent_selector = "#dash-query-builder > div > div > div > div > div.group--header.one--child.hide--line.no--children > div.group--actions.group--actions--tr > button:nth-child(1)"


@pytest.mark.parametrize(
    "theme,cls,selector",
    [
        ("antd", "ant-btn-group", antd_selector),
        ("bootstrap", "btn-group", bootstrap_selector),
        ("mui", "MuiButtonBase-root", mui_selector),
        ("fluent", "ms-Button", fluent_selector),
    ],
)
def test_antd(dash_duo, fields, trees, theme, cls, selector):
    app = Dash(__name__)
    app.layout = html.Div(
        id="root",
        children=DashQueryBuilder(
            fields=fields["fields1"],
            id="dash-query-builder",
            theme=theme,
            tree=trees["empty"],
        ),
    )
    dash_duo.start_server(app)
    dash_duo.wait_for_contains_class(selector, cls)
