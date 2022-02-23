# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashQueryBuilder(Component):
    """A DashQueryBuilder component.
DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).

It takes a `fields` property to generate the options for building the actual query.
The optional property `tree` is used to define the current state of the tree. It can be used to
define the starting state of the query builder.
The optional property `theme` is one of `material`, `mui`, `antd`, `bootstrap` or `basic`. This is the styling of the component.
These are the only themes supported by `react-awesome-query-builder`.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- alwaysShowActionButtons (boolean; default True):
    Always show the Action Buttons (Add Rule, Add Group, Delete,
    etc.). If False, show only on hover.

- config (dict; optional):
    Customizable Config. Currently only usable for objects that do not
    involve functions. Cannot be used to modify conjunctions,
    operators or widgets. Setting this is currently in alpha, it is
    very unstable.

- elasticSearchFormat (dict; optional):
    The JSON Logic Formatted defined by the current state of the tree.

- fields (optional):
    The fields that are used to populate the options for the query
    builder. This can be a very complicated object.  See
    https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields
    for more info.

- jsonLogicFormat (dict; optional):
    The JSON Logic Formatted string defined by the current state of
    the tree.

- loadFormat (a value equal to: 'jsonLogicFormat', 'spelFormat', 'tree'; default 'tree'):
    The Format which the Query Builder will load. Any changes made to
    that format will produce an update. Only that format will be able
    to load the tree.

- mongodbFormat (dict; optional):
    The MongoDB Formatted string defined by the current state of the
    tree.

- queryBuilderStringFormat (string; optional):
    The Query Builder String Formatted string defined by the current
    state of the tree.

- queryStringFormat (string; optional):
    The Query String Formatted string defined by the current state of
    the tree.

- spelFormat (string; optional):
    The JSON Logic Formatted string defined by the current state of
    the tree.

- sqlFormat (string; optional):
    The SQL Formatted string defined by the current state of the tree.

- theme (a value equal to: 'material', "mui", 'antd', 'basic', 'bootstrap'; default 'basic'):
    Sets the theme of the query builder.

- tree (boolean | number | string | dict | list; default loadTree(emptyTree)):
    The tree that describes the state of the query builder."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, tree=Component.UNDEFINED, fields=Component.UNDEFINED, sqlFormat=Component.UNDEFINED, queryStringFormat=Component.UNDEFINED, queryBuilderStringFormat=Component.UNDEFINED, mongodbFormat=Component.UNDEFINED, jsonLogicFormat=Component.UNDEFINED, elasticSearchFormat=Component.UNDEFINED, spelFormat=Component.UNDEFINED, alwaysShowActionButtons=Component.UNDEFINED, config=Component.UNDEFINED, loadFormat=Component.UNDEFINED, theme=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'loadFormat', 'mongodbFormat', 'queryBuilderStringFormat', 'queryStringFormat', 'spelFormat', 'sqlFormat', 'theme', 'tree']
        self._type = 'DashQueryBuilder'
        self._namespace = 'dash_query_builder'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'loadFormat', 'mongodbFormat', 'queryBuilderStringFormat', 'queryStringFormat', 'spelFormat', 'sqlFormat', 'theme', 'tree']
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
