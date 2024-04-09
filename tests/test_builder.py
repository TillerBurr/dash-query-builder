import json
from dash import State, html, Dash, Output, Input
from dash_query_builder import DashQueryBuilder
from selenium.webdriver.common.keys import Keys

add_rule_selector = "#dqb > div > div > div > div > div.group--header.one--child.hide--line > div.group--actions.group--actions--tr > button:nth-child(1)"

rule_field_selector = "#dqb > div > div > div > div > div.group--children.hide--line.one--child > div > div > div.rule--body--wrapper > div > div > div > select"
rule_value_selector = "#dqb > div > div > div > div > div.group--children.hide--line.one--child > div > div > div.rule--body--wrapper > div > div.rule--value > div > div > select "


def test_query_builder(dash_duo_with_hold, fields, trees):
    app = Dash(__name__)
    app.layout = html.Div(
        children=[
            DashQueryBuilder(id="dqb", fields=fields["fields1"]),
            html.Div(id="sql-output"),
            html.Div(id="json-logic"),
            html.Div(id="spel-format"),
            html.Div(id="query-string"),
            html.Div(id="mongo-format"),
            html.Div(id="query-builder"),
            html.Div(id="elastic-format"),
            html.Button(id="reset-tree", children="Reset Tree"),
        ]
    )

    @app.callback(
        Output("dqb", "tree"),
        Input("reset-tree", "n_clicks"),
        prevent_initial_call=True,
    )
    def reset_tree(n_clicks):
        if n_clicks:
            return trees["empty"]

    @app.callback(
        Output("sql-output", "children"),
        Output("json-logic", "children"),
        Output("spel-format", "children"),
        Output("mongo-format", "children"),
        Output("query-string", "children"),
        Output("elastic-format", "children"),
        Output("query-builder", "children"),
        Input("dqb", "tree"),
        State("dqb", "sqlFormat"),
        State("dqb", "jsonLogicFormat"),
        State("dqb", "spelFormat"),
        State("dqb", "mongoDBFormat"),
        State("dqb", "queryString"),
        State("dqb", "elasticSearchFormat"),
        State("dqb", "queryBuilderFormat"),
    )
    def update_output(
        tree,
        sqlFormat,
        jsonLogicFormat,
        spelFormat,
        mongoDBFormat,
        queryString,
        elasticSearchFormat,
        queryBuilderFormat,
    ):
        return (
            sqlFormat,
            json.dumps(jsonLogicFormat),
            spelFormat,
            json.dumps(mongoDBFormat),
            queryString,
            json.dumps(elasticSearchFormat),
            json.dumps(queryBuilderFormat),
        )

    dash_duo_with_hold.start_server(app)
    add_rule = dash_duo_with_hold.wait_for_element(add_rule_selector)

    add_rule.click()
    rule_field = dash_duo_with_hold.find_element(rule_field_selector)

    rule_field.click()
    rule_field.send_keys(Keys.DOWN)
    rule_field.send_keys(Keys.DOWN)
    rule_field.send_keys(Keys.DOWN)
    rule_field.send_keys(Keys.ENTER)
    rule_value = dash_duo_with_hold.find_element(rule_value_selector)
    rule_value.click()
    rule_value.send_keys(Keys.DOWN)
    rule_value.send_keys(Keys.ENTER)

    dash_duo_with_hold.wait_for_text_to_equal("#sql-output", "color = 'yellow'")
    dash_duo_with_hold.wait_for_text_to_equal(
        "#json-logic", '{"and": [{"==": [{"var": "color"}, "yellow"]}]}'
    )
    dash_duo_with_hold.wait_for_text_to_equal("#spel-format", "color == 'yellow'")
    dash_duo_with_hold.wait_for_text_to_equal("#mongo-format", '{"color": "yellow"}')
    dash_duo_with_hold.wait_for_text_to_equal("#query-string", 'color == "yellow"')
    dash_duo_with_hold.wait_for_text_to_equal(
        "#elastic-format", '{"bool": {"must": [{"term": {"color": "yellow"}}]}}'
    )
    dash_duo_with_hold.wait_for_contains_text(
        "#query-builder",
        '"fieldName": "color", "type": "select", "input": "select", "operator": "select_equals", "values": [{"type": "select", "value": "yellow"}]}], "condition": "AND", "usedFields": ["color"]',
    )

    add_rule = dash_duo_with_hold.wait_for_element(add_rule_selector)
    add_rule.click()
    new_field = dash_duo_with_hold.find_element(
        "#dqb > div > div > div > div > div.group--children > div:nth-child(2) > div > div.rule--body--wrapper > div > div > div > select"
    )
    new_field.click()
    new_field.send_keys(Keys.DOWN)
    new_field.send_keys(Keys.ENTER)
    new_operator = dash_duo_with_hold.find_element(
        "#dqb > div > div > div > div > div.group--children > div:nth-child(2) > div > div.rule--body--wrapper > div > div.rule--operator > select"
    )
    new_operator.click()
    new_operator.send_keys(Keys.DOWN)
    new_operator.send_keys(Keys.DOWN)
    new_operator.send_keys(Keys.DOWN)
    new_operator.send_keys(Keys.DOWN)
    new_operator.send_keys(Keys.ENTER)

    new_value = dash_duo_with_hold.find_element(
        "#dqb > div > div > div > div > div.group--children > div:nth-child(2) > div > div.rule--body--wrapper > div > div.rule--value > div > div > input[type=number]"
    )
    new_value.send_keys(10)

    dash_duo_with_hold.wait_for_text_to_equal(
        "#sql-output", "(color = 'yellow' AND qty > 10)"
    )
    dash_duo_with_hold.wait_for_text_to_equal(
        "#json-logic",
        '{"and": [{"==": [{"var": "color"}, "yellow"]}, {">": [{"var": "qty"}, 10]}]}',
    )

    dash_duo_with_hold.wait_for_text_to_equal(
        "#spel-format", "(color == 'yellow' && qty > 10)"
    )
    dash_duo_with_hold.wait_for_text_to_equal(
        "#mongo-format", '{"color": "yellow", "qty": {"$gt": 10}}'
    )
    dash_duo_with_hold.wait_for_text_to_equal(
        "#query-string", '(color == "yellow" && qty > 10)'
    )
    dash_duo_with_hold.wait_for_text_to_equal(
        "#elastic-format",
        '{"bool": {"must": [{"term": {"color": "yellow"}}, {"range": {"qty": {"gt": "10"}}}]}}',
    )
    dash_duo_with_hold.wait_for_contains_text(
        "#query-builder",
        ' "fieldName": "qty", "type": "number", "input": "number", "operator": "greater", "values": [{"type": "number", "value": 10}]}], "condition": "AND", "usedFields": ["color", "qty"]',
    )
    dash_duo_with_hold.wait_for_contains_text(
        "#query-builder",
        '"fieldName": "color", "type": "select", "input": "select", "operator": "select_equals", "values": [{"type": "select", "value": "yellow"}',
    )
