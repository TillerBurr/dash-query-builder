import contextlib

import pytest
from selenium.webdriver.common.action_chains import ActionChains


@pytest.fixture
def fields():
    return {
        "fields1": {
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
        "fields2": {
            "qty2": {
                "label": "Qty2",
                "type": "number",
                "fieldSettings": {"min": 0},
                "valueSources": ["value"],
                "preferWidgets": ["number"],
            },
            "price2": {
                "label": "Price2",
                "type": "number",
                "valueSources": ["value"],
                "fieldSettings": {"min": 0, "max": 100},
                "preferWidgets": ["slider", "rangeslider"],
                "operators": ["equal", "between"],
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
            "is_promotion2": {
                "label": "Promo2?",
                "type": "boolean",
                "operators": ["equal", "is_empty"],
                "valueSources": ["value"],
            },
        },
    }


@pytest.fixture
def trees():
    return {
        "tree1": {
            "id": "aa8abaa8-cdef-4012-b456-717f1e3484de",
            "type": "group",
            "children1": [
                {
                    "id": "98a9baba-4567-489a-bcde-f17f1e35f74c",
                    "type": "rule",
                    "properties": {
                        "field": "qty",
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
                        "field": "price",
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
                        "field": "color",
                        "operator": "select_any_in",
                        "value": [["green", "yellow"]],
                        "valueSrc": ["value"],
                        "valueType": ["multiselect"],
                    },
                },
            ],
        },
        "tree2": {
            "id": "b88bb898-0123-4456-b89a-b18ebf4b9f6d",
            "type": "group",
            "children1": [
                {
                    "type": "rule",
                    "id": "b89aab9a-0123-4456-b89a-b18ebf4bb7f0",
                    "properties": {
                        "fieldSrc": "field",
                        "field": "qty2",
                        "operator": "equal",
                        "value": [5],
                        "valueSrc": ["value"],
                        "valueType": ["number"],
                    },
                },
                {
                    "type": "rule",
                    "id": "89bbb99b-89ab-4cde-b012-318ebf4c0432",
                    "properties": {
                        "fieldSrc": "field",
                        "field": "color2",
                        "operator": "select_any_in",
                        "value": [["green", "orange"]],
                        "valueSrc": ["value"],
                        "valueType": ["multiselect"],
                    },
                },
            ],
        },
        "empty": {
            "id": "889239a8-cdef-4012-b456-717b503a0ffb",
            "type": "group",
            "children1": [],
        },
    }


@pytest.fixture
def dash_duo_with_hold(dash_duo):
    actions = ActionChains(dash_duo._driver)

    @contextlib.contextmanager
    def hold(key):
        try:
            actions.key_down(key).perform()
            yield
        finally:
            actions.key_up(key).perform()

    def send_keys(key, selector):
        dash_duo.find_element(selector).send_keys(key)

    dash_duo.hold = hold
    dash_duo.send_keys = send_keys
    return dash_duo
