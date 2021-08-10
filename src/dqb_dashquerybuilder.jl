# AUTO GENERATED FILE - DO NOT EDIT

export dqb_dashquerybuilder

"""
    dqb_dashquerybuilder(;kwargs...)

A DashQueryBuilder component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `fields` (Bool | Real | String | Dict | Array; required)
- `jsonLogicFormat` (String; optional)
- `mongodbFormat` (String; optional)
- `queryStringFormat` (String; optional)
- `sqlFormat` (String; optional)
- `theme` (a value equal to: 'material', 'antd', 'basic'; optional)
- `tree` (Bool | Real | String | Dict | Array; optional)
"""
function dqb_dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :fields, :jsonLogicFormat, :mongodbFormat, :queryStringFormat, :sqlFormat, :theme, :tree]
        wild_props = Symbol[]
        return Component("dqb_dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end

