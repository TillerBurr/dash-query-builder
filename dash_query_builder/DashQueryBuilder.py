# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashQueryBuilder(Component):
    """A DashQueryBuilder component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- fields (boolean | number | string | dict | list; required)

- theme (string; optional)

- tree (boolean | number | string | dict | list; optional):
    Dash-assigned callback that should be called to report property
    changes to Dash, to make them available for callbacks."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, tree=Component.UNDEFINED, fields=Component.REQUIRED, theme=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'fields', 'theme', 'tree']
        self._type = 'DashQueryBuilder'
        self._namespace = 'dash_query_builder'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'fields', 'theme', 'tree']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['fields']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashQueryBuilder, self).__init__(**args)
