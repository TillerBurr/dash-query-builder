import dash_query_builder
import dash

app = dash.Dash(__name__)

app.layout = dash_query_builder.DashQueryBuilder(id='component')


if __name__ == '__main__':
    app.run_server(debug=True)
