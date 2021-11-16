# AUTO GENERATED FILE - DO NOT EDIT

export dashquerybuilder

"""
    dashquerybuilder(;kwargs...)

A DashQueryBuilder component.
DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).

It takes a `fields` property to generate the options for building the actual query.
The optional property `tree` is used to define the current state of the tree. It can be used to
define the starting state of the query builder.
The optional property `theme` is one of `material`, `antd` or `basic`. This is the styling of the component.
These are the only themes supported by `react-awesome-query-builder`
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `fields` (optional): The fields that are used to populate the options for the query builder. This can be a very complicated object.
 See https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields for more info.
- `jsonLogicFormat` (String; optional): The JSON Logic Formatted string defined by the current state of the tree
- `mongodbFormat` (String; optional): The MongoDB Formatted string defined by the current state of the tree
- `queryBuilderStringFormat` (String; optional): The Query Builder String Formatted string defined by the current state of the tree
- `queryStringFormat` (String; optional): The Query String Formatted string defined by the current state of the tree
- `sqlFormat` (String; optional): The SQL Formatted string defined by the current state of the tree
- `theme` (a value equal to: 'material', 'antd', 'basic'; optional): Sets the theme of the query builder.
- `tree` (Bool | Real | String | Dict | Array; optional): The tree that describes the state of the query builder.
"""
function dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :fields, :jsonLogicFormat, :mongodbFormat, :queryBuilderStringFormat, :queryStringFormat, :sqlFormat, :theme, :tree]
        wild_props = Symbol[]
        return Component("dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end

