# AUTO GENERATED FILE - DO NOT EDIT

export dqb_dashquerybuilder

"""
    dqb_dashquerybuilder(;kwargs...)

A DashQueryBuilder component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `fields` (optional): The fields that are used to populate the options for the query builder.This can be a very complicated object.
 See https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields for more info.
- `jsonLogicFormat` (String; optional): The JSON Logic Formatted string defined by the current state of the tree
- `mongodbFormat` (String; optional): The MongoDB Formatted string defined by the current state of the tree
- `queryStringFormat` (String; optional): The Query String Formatted string defined by the current state of the tree
- `sqlFormat` (String; optional): The SQL Formatted string defined by the current state of the tree
- `theme` (a value equal to: 'material', 'antd', 'basic'; optional): Sets the theme of the query builder.
- `tree` (Bool | Real | String | Dict | Array; optional): The tree that describes the state of the query builder.
"""
function dqb_dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :fields, :jsonLogicFormat, :mongodbFormat, :queryStringFormat, :sqlFormat, :theme, :tree]
        wild_props = Symbol[]
        return Component("dqb_dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end

