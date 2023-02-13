"""
WhereParser module.

Parse a SQL WHERE Clause string to generate a template string and
dictionary of values.
"""

from pyparsing import Forward, ParserElement, infix_notation, opAssoc, rest_of_line
from pyparsing.results import ParseResults

from .actions import AndAction, NotAction, OrAction
from .constants import AND, NOT, OR
from .operators import (
    BETWEEN_OPERATOR,
    COMPARISON_OPERATOR,
    EQUALITY_OPERATOR,
    IN_OPERATOR,
    NULL_OPERATOR,
)

ParserElement.enablePackrat()


class WhereParser:
    """
    The Where Clause Parser object.

    Contains methods to be able to take a SQL WHERE clause and return a
    parameterized/templated string in the ``pyformat`` style and dictionary
    of values for use with the Python DB API.
    """

    def __init__(self) -> None:
        """Initialize the ``WhereParser``."""
        self.parser = self._parser()

    def _parser(self) -> ParserElement:
        """
        Create the parser.

        Returns
        -------
        ParserElement
            The WHERE Clause parser.
        """
        where_parser = Forward()

        condition = (
            EQUALITY_OPERATOR
            | COMPARISON_OPERATOR
            | IN_OPERATOR
            | BETWEEN_OPERATOR
            | NULL_OPERATOR
        ).set_name("where_condition")

        (
            where_parser
            << infix_notation(
                condition,
                [
                    (NOT, 1, opAssoc.RIGHT, NotAction),
                    (AND, 2, opAssoc.LEFT, AndAction),
                    (OR, 2, opAssoc.LEFT, OrAction),
                ],
            ).set_name("where_expression")
        )

        # define Oracle comment format, and ignore them
        oracleSqlComment = "--" + rest_of_line
        where_parser.ignore(oracleSqlComment)
        return where_parser

    def parse(self, str_to_parse: str) -> ParseResults:
        """
        Parse a string to return the main ``ParseResults``.

        Parameters
        ----------
        str_to_parse : str
            SQL WHERE clause to parse.

        Returns
        -------
        ParseResults
            Parsed string.
        """
        return self.parser.parse_string(str_to_parse)[0]

    def create_diagram(self, save_location: str) -> None:
        """
        Create a railroad diagram of the parser.

        Parameters
        ----------
        save_location : str
            Location to save the diagram.
        """
        self.parser.create_diagram(save_location)
        return

    def generate_template(
        self, str_to_parse: str
    ) -> tuple[str, dict[str, str | int | float | bool]]:
        """
        Generate the template string and values of a given WHERE string.

        Returns
        -------
        Tuple[str, dict[str | int | float | bool]]
            A tuple consisting of the templated string in pyformat (:pyformat:) and
            a dictionary of the values that correspond to the string.
        """
        parse_results = self.parse(str_to_parse=str_to_parse)
        template_str, values = parse_results.generate_template()
        return template_str, values
