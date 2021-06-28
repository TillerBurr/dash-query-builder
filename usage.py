import dash_query_builder
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)
fields = [{"name": "test", "label": "test"}, {"name": "test2", "label": "test2"}]
app.layout = html.Div(
    [
        dash_query_builder.DashQueryBuilder(id="input", fields=fields),
        html.Div(id="output"),
        html.Hr(),
        html.Div(id="secondaryOut"),
    ]
)


@app.callback(
    [Output("output", "children"), Output("secondaryOut", "children")],
    [Input("input", "query"), Input("input", "formattedOut")],
)
def display_output(value, fmted):
    return "You have entered {}".format(value), f"The Sql statement is: {fmted}"


if __name__ == "__main__":
    app.run_server(debug=True)
