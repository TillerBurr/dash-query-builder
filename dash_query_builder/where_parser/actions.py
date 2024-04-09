"""Actions for the parser."""

from pyparsing import ParseFatalException, ParseResults
from rich import print
from shortuuid import uuid

from .constants import Boolean, Identifier, Number, String


class OpNode:
    """
    Base class for Operators.

    Should not be used by itself. This is meant to be a super class for the
    various operator nodes.
    """

    def __init__(self) -> None:
        """Initialize the class."""
        self.operator = None
        self.operands = None
        self.identifier = None

    def get_num_uuid(self) -> int:
        """
        Find the number of UUIDs to generate.

        Returns
        -------
        int
            Number of UUIDs.
        """
        if isinstance(self.operands, (Identifier, Number, String, Boolean)):
            return 1
        else:
            n_uuid = len(self.operands)
            return n_uuid

    def generate_uuids(self) -> list[str]:
        """
        Generate unique strings.

        Returns
        -------
        list[str]
            A single shortened UUID or a list of shortened UUIDs.
        """
        number_of_uuid = self.get_num_uuid()

        _ids = [self.generate_uuid() for _ in range(number_of_uuid)]
        return _ids

    def generate_uuid(self) -> str:
        """
        Generate a shortened UUID.

        Returns
        -------
        str
            A 12 character shortened UUID.
        """
        return uuid()[:12]

    def debug(self) -> None:
        """Print the attributes of the object."""
        print(f"Identifier:{repr(self.identifier.generate())}.")
        print(f"Operator:{repr(self.operator)}.")
        print(f"Operands:{repr(self.operands)}.")

    def __repr__(self) -> str:
        """
        Create the ``__repr__`` method.

        Returns
        -------
        str
            The ``__repr__`` string.
        """
        if self.identifier is None:
            repr_str = ""
        else:
            repr_str = f"{repr(self.identifier)}|"
        return (
            f"{self.__class__.__name__}({self.operator}):"
            + repr_str
            + f"{repr(self.operands)}"
        )


class OrAction(OpNode):
    """
    The Or Action.

    Instances are created when the parser finds an expression of the form
        ``and_expression`` OR ``and_expression``


    """

    def __init__(self, tokens: ParseResults) -> None:
        """
        Initialize the :obj:`OrAction`.

        Parameters
        ----------
        tokens : ParseResults
            The :obj:`ParseResults`. There are "AND" conditions between each "OR"
            in the results.
        """
        super().__init__()
        self.operator = "OR"
        self.operands = tokens[0][::2]

    def generate(self) -> str:
        """
        Generate the "OR" portion of the SQL WHERE Clause from the results.

        Returns
        -------
        str
            SQL String.
        """
        return (
            "("
            + " OR ".join(and_condition.generate() for and_condition in self.operands)
            + ")"
        )

    def generate_template(self) -> tuple[str, dict[str, int | float | bool | str]]:
        """
        Generate the templated "OR" clause string and corresponding values.

        Returns
        -------
        Tuple[str,dict[str,int|float|bool|str]]
            Templated String and dictionary of values.
        """
        generated_operands = [
            condition.generate_template() for condition in self.operands
        ]

        template_str = (
            "(" + " OR ".join(condition[0] for condition in generated_operands) + ")"
        )

        values = {k: v for x in generated_operands for k, v in x[1].items()}
        return template_str, values


class NotAction(OpNode):
    """
    The "NOT" Action.

    Instances are created when the parser finds an expression of the form
        NOT ``expression``

    """

    def __init__(self, tokens: ParseResults) -> None:
        """
        Initialize the :obj:`NotAction`.

        Parameters
        ----------
        tokens : ParseResults
            The :obj:`ParseResults`. The first item in the results is the "NOT" term.
            The second term is the expression.
        """
        super().__init__()
        self.operands = tokens[0][1]
        self.operator = "NOT"

    def generate(self) -> str:
        """
        Generate the "NOT" part of the SQL string.

        Returns
        -------
        str
            SQL string prepended with "NOT"
        """
        result = "NOT " + self.operands.generate()
        return result

    def generate_template(self) -> tuple[str, dict[str, int | float | bool | str]]:
        """
        Generate the templated "NOT" clause string and corresponding values.

        Returns
        -------
        Tuple[str,dict[str,int|float|bool|str]]
            Templated String and dictionary of values.
        """
        template_str, values = self.operands.generate_template()
        template_str = " ".join(("NOT", template_str))
        return template_str, values


class AndAction(OpNode):
    """
    The "AND" Action.

    Instances are created when the parser finds an expression of the form
        ``expression`` AND ``expression``

    """

    def __init__(self, tokens: ParseResults) -> None:
        """
        Initialize the :obj:`AndAction`.

        Parameters
        ----------
        tokens : ParseResults
            The :obj:`ParseResults`. There are "NOT" expressions between the "AND".
        """
        super().__init__()
        self.operands = tokens[0][::2]
        self.operator = "AND"
        print(self.operands)

    def generate(self) -> str:
        """
        Generate the SQL of the "AND" part of the "WHERE" clause.

        Returns
        -------
        str
            [description]
        """
        result = " AND ".join(condition.generate() for condition in self.operands)
        if len(self.operands) > 1:
            result = "(" + result + ")"
        return result

    def generate_template(self) -> tuple[str, dict[str, int | float | bool | str]]:
        """
        Generate the templated "NOT" clause string and corresponding values.

        Returns
        -------
        Tuple[str,dict[str,int|float|bool|str]]
            Templated String and dictionary of values.
        """
        generated_operands = [
            condition.generate_template() for condition in self.operands
        ]
        result = " AND ".join(x[0] for x in generated_operands)
        if len(self.operands) > 1:
            result = "(" + result + ")"

        values = {k: v for x in generated_operands for k, v in x[1].items()}
        return result, values


class RelationalAction(OpNode):
    """
    The Relational Action.

    Instances are created when the parser finds an expression of the form
        :obj:`Identifier` ``<comp_op>`` ``<value>``,

    where ``<comp_op>`` is one of "=", "==" "!=", ">", ">=", "<" or "<=" and ``<value>``
    is one of :obj:`Identifier`, :obj:`Boolean`, :obj:`Number`, :obj:`String`.
    """

    def __init__(self, tokens: ParseResults) -> None:
        """
        Initialize the :obj:`ComparisonAction`.

        Parameters
        ----------
        tokens : ParseResults
            :obj:`ParseResults` representing a comparison between an :obj:`Identifier`
            and another object.
        """
        super().__init__()
        self.identifier = tokens[0]
        self.operator = tokens[1]
        self.operands = tokens[2]
        if self.identifier.value == self.operands.value:
            raise ParseFatalException(f"{tokens}")

    def generate(self) -> str:
        """
        Generate the String of the comparison.

        Returns
        -------
        str
            Relational comparison string.
        """
        return " ".join(
            (self.identifier.generate(), self.operator, self.operands.generate())
        )

    def generate_template(self) -> tuple[str, dict[str, int | float | bool | str]]:
        """
        Generate the templated comparison string and corresponding values.

        Returns
        -------
        Tuple[str,dict[str,int|float|bool|str]]
            Templated String and dictionary of values.
        """
        if not isinstance(self.operands, Identifier):
            _id = self.generate_uuids()
            template_str = " ".join(
                (self.identifier.generate(), self.operator, f"%({_id[0]})s")
            )
            value_list = {_id[0]: self.operands.generate_template()}
            return template_str, value_list
        else:
            return self.generate(), {}


class InAction(OpNode):
    """
    The "IN" operator of a SQL Where clause.

    This is of the form
        :obj:`Identifier` IN | NOT IN (``<a_1>``,...,``<a_n>``),

    where ``<a_i>`` is any one of :obj:`Boolean`, :obj:`Number` or :obj:`String`.

    """

    def __init__(self, tokens: ParseResults) -> None:
        """
        Initialize the :obj:`InAction` object.

        Parameters
        ----------
        tokens : ParseResults
            The :obj:`ParseResults` for the IN operator. The first item in the token
            is the :obj:`Identifier`. The second item in the token is the token group of
            either "IN" or "NOT IN". Everything after that is the array of
            :obj:`Boolean`, :obj:`Number` or :obj:`String`.
        """
        super().__init__()
        self.identifier = tokens[0]
        self.operator = [token.upper() for token in tokens[1]]
        self.operands = tokens[2:]
        if len([i for i in self.operands if i.value == self.identifier.value]) > 0:
            raise ParseFatalException(f"{tokens}")

    def generate(self) -> str:
        """
        Generate the SQL string of the "IN" operator.

        Returns
        -------
        str
            SQL string.
        """
        return " ".join(
            (
                self.identifier.generate(),
                " ".join(self.operator),
                "(",
                ", ".join([i.generate() for i in self.operands]),
                ")",
            )
        )

    def generate_template(self) -> tuple[str, dict[str, int | float | bool | str]]:
        """
        Generate the templated "IN" operator string and corresponding values.

        Returns
        -------
        Tuple[str,dict[str,int|float|bool|str]]
            Templated String and dictionary of values.
        """
        _ids = self.generate_uuids()
        array_of_operands = ", ".join(
            [
                (
                    f"%({_ids[i]})s"
                    if not isinstance(oper, Identifier)
                    else oper.generate_template()
                )
                for i, oper in enumerate(self.operands)
            ]
        )
        template_str = " ".join(
            (
                self.identifier.generate(),
                " ".join(self.operator),
                "(",
                array_of_operands,
                ")",
            )
        )
        parameter_positions = [
            i
            for i, oper in enumerate(self.operands)
            if not isinstance(oper, Identifier)
        ]
        parameter_ids = [_ids[i] for i in parameter_positions]
        parameter_operands = [self.operands[i] for i in parameter_positions]
        value_dict = {
            parameter_ids[i]: oper.generate_template()
            for i, oper in enumerate(parameter_operands)
        }

        return template_str, value_dict


class NullAction(OpNode):
    """
    The "NULL" operator of a SQL Where clause.

    This is of the form
        :obj:`Identifier` IS NULL or :obj:`Identifier` IS NOT NULL

    """

    def __init__(self, tokens: ParseResults) -> None:
        """
        Initialize the :obj:`NullAction`.

        Parameters
        ----------
        tokens : ParseResults
            The :obj:`ParseResults`. The first item is the :obj:`Identifier`. The second
            item is the keyword "IS". The last group of items is either "NULL" or
            "NOT NULL".
        """
        super().__init__()
        self.identifier = tokens[0]
        self.operator = tokens[1].upper()  # IS
        self.operands = [token.upper() for token in tokens[2]]  # NULL or NOT NULL

    def generate(self) -> str:
        """
        Generate the SQL.

        This is ":obj:`Identifier` IS NULL" or ":obj:`Identifier` IS NOT NULL".

        Returns
        -------
        str
            [description]
        """
        return " ".join(
            (self.identifier.generate(), self.operator, " ".join(self.operands))
        )

    def generate_template(self) -> dict:
        """
        Generate the string for the "IS NULL"/"IS NOT NULL" operator.

        This is more or less an alias of ``self.generate``.

        Returns
        -------
        Tuple[str,dict[]]
            SQL String and an empty dictionary.
        """
        template_str = self.generate()
        return template_str, {}


class BetweenAction(OpNode):
    """
    The "BETWEEN" operator of a SQL Where clause.

    This is of the form
        :obj:`Identifier` BETWEEN | NOT BETWEEN ``<a_1>`` AND ``<a_2>``

    where ``<a_i>`` is a :obj:`Number` or :obj:`Identifier`.

    """

    def __init__(self, tokens: ParseResults) -> None:
        """
        Initialize the :obj:`BetweenAction` object.

        Parameters
        ----------
        tokens : ParseResults
            The :obj:`ParseResults` for the BETWEEN operator. The first item in the
            tokenis the :obj:`Identifier`. The second item in the token is the token
            group of either "BETWEEN" or "NOT BETWEEN". Starting at the third item, it
            is of the form
                [``<a_1>``, "AND", ``<a_2>``],

            where ``<a_i>`` is either a :obj:`Number` or :obj:`Identifier`.
        """
        super().__init__()
        self.identifier = tokens[0]
        self.operator = [token.upper() for token in tokens[1]]  # Not, Between
        self.operands = tokens[2::2]  # numbers
        if len([i for i in self.operands if i.value == self.identifier.value]) > 0:
            raise ParseFatalException(
                "Identifier is part of the condition: " + f"{tokens}"
            )

    def generate(self) -> str:
        """
        Generate the SQL string.

        Returns
        -------
        str
            SQL string.
        """
        return " ".join(
            (
                self.identifier.generate(),
                " ".join(self.operator),
                self.operands[0].generate(),
                "AND",
                self.operands[1].generate(),
            )
        )

    def generate_template(self) -> tuple[str, dict[str, int | float | bool | str]]:
        """
        Generate the templated "BETWEEN" operator string and corresponding values.

        Returns
        -------
        Tuple[str,dict[str,int|float|bool|str]]
            Templated String and dictionary of values.
        """
        _ids = self.generate_uuids()
        operand_1 = (
            f"%({_ids[0]})s"
            if not isinstance(self.operands[0], Identifier)
            else self.operands[0].generate_template()
        )
        operand_2 = (
            f"%({_ids[1]})s"
            if not isinstance(self.operands[1], Identifier)
            else self.operands[1].generate_template()
        )
        template_str = " ".join(
            (
                self.identifier.generate(),
                " ".join(self.operator),
                operand_1,
                "AND",
                operand_2,
            )
        )
        parameter_positions = [
            i
            for i, oper in enumerate(self.operands)
            if not isinstance(oper, Identifier)
        ]
        parameter_ids = [_ids[i] for i in parameter_positions]
        parameter_operands = [self.operands[i] for i in parameter_positions]
        values = {
            parameter_ids[i]: oper.generate_template()
            for i, oper in enumerate(parameter_operands)
        }

        return template_str, values
