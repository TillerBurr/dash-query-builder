import re
from dash_query_builder.where_parser import WhereParser
import pytest
import json


@pytest.mark.parametrize(
    "where_clause,template",
    [
        ("x.a = 1", "x.a = %s"),
        ("a == 1", "a == %s"),
        ("a > 1", "a > %s"),
        ("a >= 1", "a >= %s"),
        ("a != 1", "a != %s"),
        ("a <> 1", "a <> %s"),
        ("a < 1", "a < %s"),
        ("a <= 1", "a <= %s"),
        ("NOT (a <= 1)", "NOT (a <= %s)"),
        ("(a = 1 AND b = 'g')", "(a = %s AND b = %s)"),
        ("(a = 1 OR b = 'g')", "(a = %s OR b = %s)"),
        (
            "NOT (i = 1 AND a = 31 AND (j = 13 OR c = 32))",
            "NOT (i = %s AND a = %s AND (j = %s OR c = %s))",
        ),
    ],
)
def test_basic(where_clause, template):
    where_parser = WhereParser()
    r_template, r_params = where_parser.generate_template(where_clause)
    r_params = {k: json.dumps(v).replace('"', "'") for k, v in r_params.items()}
    uuid_removed = re.sub(r"\([^()]*\)", "", r_template)
    assert template == uuid_removed
    assert r_template % r_params == where_clause
