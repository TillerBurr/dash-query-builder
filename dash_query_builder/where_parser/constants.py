"""Constants used in creating the Parser."""

from pyparsing import (
    CaselessKeyword,
    OneOrMore,
    Optional,
    ParseResults,
    QuotedString,
    Suppress,
    Word,
    alphanums,
    alphas,
    nums,
)

LPAR, RPAR, COMMA = map(Suppress, "(),")
# define SQL tokens
SELECT, FROM, WHERE, AND, OR, IN, IS, NOT, NULL, BETWEEN, TRUE, FALSE = map(
    CaselessKeyword,
    "select from where and or in is not null between true false".split(),
)
NOT_NULL = NOT + NULL
IS_NULL = IS + NULL
NOT_BETWEEN = NOT + BETWEEN
NOT_IN = NOT + IN


class String:
    """
    String Token Class.

    Represents a string in the parsed result.
    """

    def __init__(self, result: ParseResults) -> None:
        """
        Initialize the :obj:`String` class.

        Parameters
        ----------
        result : ParseResults
            The :pyparsing_parseresults:`ParseResults<>` of the string.
            This is a string enclosed with single quotes, "'" within the SQL string.
        """
        self.value = result[0]

    def __repr__(self) -> str:
        """
        Return the ``__repr__`` of :obj:`String`.

        Returns
        -------
        str
            Representation of the :obj:`String` object.
        """
        return f"String[{self.value}]"

    def generate(self) -> str:
        """
        Generate the SQL value of the object.

        Returns
        -------
        str
            Single quoted string.
        """
        return f"'{self.value}'"

    def generate_template(self) -> str:
        """
        Generate the template value of the :obj:`String` object.

        Returns
        -------
        str
            Unquoted string.
        """
        return self.value


class Boolean:
    """
    Boolean Token Class.

    Represents a boolean value in the SQL string.
    """

    def __init__(self, result: ParseResults) -> None:
        """
        Initialize a Number Token.

        Parameters
        ----------
        result : ParseResults
            The :pyparsing_parseresults:`ParseResults<>` of the Boolean.
            This is either ``TRUE`` or ``FALSE``.
        """
        self.value = "".join(result)

    def __repr__(self) -> str:
        """
        Return the ``__repr__`` of the :obj:`Boolean`.

        Returns
        -------
        str
            ``Boolean[self.value]``
        """
        return f"Boolean[{self.value}]"

    def generate(self) -> str:
        """
        Generate the SQL value of :obj:`Boolean`.

        Returns
        -------
        str
            A string containing the Boolean this object represents.
        """
        return self.value

    def generate_template(self) -> bool:
        """
        Generate a ``bool`` based on the value.

        Returns
        -------
        bool
            A boolean corresponding to value.
        """
        if self.value.lower() == "true":
            return True
        else:
            return False


class Number:
    """
    Number Token Class.

    Represents a number in the SQL string.
    """

    def __init__(self, result: ParseResults) -> None:
        """
        Initialize a Number Token.

        Parameters
        ----------
        result : ParseResults
            The :pyparsing_parseresults:`ParseResults<>` of the Number.
            This is an optional "-", followed by an integer with an optional "." and
            optional integers.
        """
        self.value = "".join(result)

    def __repr__(self) -> str:
        """
        Return the ``__repr__`` of the :obj:`Number`.

        Returns
        -------
        str
            ``Number[self.value]``
        """
        return f"Number[{self.value}]"

    def generate(self) -> str:
        """
        Generate the SQL value of :obj:`Number`.

        Returns
        -------
        str
            A string containing the number this object represents.
        """
        return self.value

    def generate_template(self) -> int | float:
        """
        Generate a number based on the value.

        Returns
        -------
        int|float
            An integer or float corresponding to the number the object
            represents.
        """
        if "." in self.value:
            return float(self.value)
        else:
            return int(self.value)


class Identifier:
    """
    Identifier Token Class.

    Represents a dotted column name, e.g. 'table_name.column_name'.
    The values of 'table_name' and 'column_name' can only
    consist of alphanumeric characters or underscore, '_'.
    """

    def __init__(self, result: ParseResults) -> None:
        """
        Initialize the ``Identifier`` class.

        Parameters
        ----------
        result : ParseResults
            The ``ParseResults`` of the Identifier.
        """
        self.value = "".join(result)

    def __repr__(self) -> str:
        """
        Return the ``__repr__`` method of the :obj:`Identifier` class.

        Returns
        -------
        str
            Identifier[self.name]
        """
        return f"Identifier[{self.value}]"

    def generate(self) -> str:
        """
        Generate the string of the ``Identifier``.

        Returns
        -------
        str
            The :obj:`Identifier`
        """
        return self.value

    def generate_template(self) -> str:
        """
        Alias method for ``self.generate()``.

        Returns
        -------
        str
            The :obj:`Identifier`
        """
        return self.generate()


ident = Word(alphas, alphanums + "_").set_name("alphanumeric_word")
column_name = (
    ident + "." + ident
)  # delimited_list(ident, ".", combine=True).set_name("column name")
identifier = column_name.set_parse_action(Identifier).set_name("Identifier")
alphaword = Word(alphanums + "_.")
string = QuotedString(quoteChar="'").set_parse_action(String).set_name("String")
bool_value = (TRUE | FALSE).set_parse_action(Boolean).set_name("boolean_value")

number = (
    (Optional("-") + Word(nums) + Optional("." + OneOrMore(Word(nums))))
    .set_name("Number")
    .set_parse_action(Number)
)

number_or_identifier = (number | identifier | bool_value).set_name(
    "number_or_identifier"
)
number_string_bool = (bool_value | number | string).set_name("number_string_bool")
column_value = (bool_value | number | identifier | string).set_name("column_value")
