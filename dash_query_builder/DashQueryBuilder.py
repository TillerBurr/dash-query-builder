# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashQueryBuilder(Component):
    """A DashQueryBuilder component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- fields (list of dicts; optional):
    The possible fields and operators that are allowable.

    `fields` is a list of dicts with keys:

    - id (number; optional)

    - inputType (string; optional)

    - label (string; required)

    - name (string; required)

    - operators (list of dicts; optional)

        `operators` is a list of dicts with keys:

        - label (string; optional)

        - name (string; optional)

- formattedOut (string; optional):
    The formatted query.

- query (dict; optional):
    The query that is created via this component. Can be used to seed
    the initial component.

    `query` is a dict with keys:

    - combinator (string; required)

    - id (string; optional)

    - rules (dict; optional)

        `rules` is a dict with keys:

        - field (string; required)

        - operator (string; required)

        - value (boolean | number | string | dict | list; required) | list of dicts with keys:

        - combinator (string; required)

        - rules (list of dicts; optional)

            `rules` is a list of dicts with keys:

            - field (string; required)

            - operator (string; required)

            - value (boolean | number | string | dict | list; required) | list

- showCombinatorsBetweenRules (boolean; optional):
    Show the combinators between the items within a group.

- showNotToggle (boolean; optional):
    Whether or not to show the \"Not\" Toggle."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, query=Component.UNDEFINED, fields=Component.UNDEFINED, formattedOut=Component.UNDEFINED, showNotToggle=Component.UNDEFINED, showCombinatorsBetweenRules=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'fields', 'formattedOut', 'query', 'showCombinatorsBetweenRules', 'showNotToggle']
        self._type = 'DashQueryBuilder'
        self._namespace = 'dash_query_builder'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'fields', 'formattedOut', 'query', 'showCombinatorsBetweenRules', 'showNotToggle']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashQueryBuilder, self).__init__(**args)
