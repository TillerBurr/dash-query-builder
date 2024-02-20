"""
Operators used in the Parser.

These are the relational operators used in the ``where_parser``, including the various
comparison operators (such as >,==,=,!=,etc.), the 'BETWEEN' operator, the 'IS NULL'
operator and the "IN" operator.
"""

import pyparsing as pp

from .actions import BetweenAction, InAction, NullAction, RelationalAction
from .constants import (
    AND,
    BETWEEN,
    IN,
    IS,
    LPAR,
    NOT_BETWEEN,
    NOT_IN,
    NOT_NULL,
    NULL,
    RPAR,
    column_value,
    identifier,
    number_or_identifier,
    number_string_bool,
)

equality_operator = pp.oneOf(("=", "==" "!=", "<>")).set_name("equality_operator")
comparison_operator = pp.oneOf((">", ">=", "<", "<=")).set_name("inequality_operator")
EQUALITY_OPERATOR = (
    (identifier + equality_operator + column_value)
    .set_name("equality_condition")
    .set_parse_action(RelationalAction)
)

COMPARISON_OPERATOR = (
    (identifier + comparison_operator + number_or_identifier)
    .set_name("comparison_condition")
    .set_parse_action(RelationalAction)
)

IN_OPERATOR = (
    (
        identifier
        + pp.Group(IN | NOT_IN)
        + LPAR
        + pp.delimited_list(number_string_bool)
        + RPAR
    )
    .set_name("in_condition")
    .set_parse_action(InAction)
)

BETWEEN_OPERATOR = (
    (
        identifier
        + pp.Group(BETWEEN | NOT_BETWEEN)
        + number_or_identifier
        + AND
        + number_or_identifier
    )
    .set_name("between_condition")
    .set_parse_action(BetweenAction)
)

NULL_OPERATOR = (
    (identifier + IS + pp.Group(NULL | NOT_NULL))
    .set_name("null_condition")
    .set_parse_action(NullAction)
)
