# AUTO GENERATED FILE - DO NOT EDIT

export dqb_dashquerybuilder

"""
    dqb_dashquerybuilder(;kwargs...)

A DashQueryBuilder component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `fields` (Bool | Real | String | Dict | Array; required)
- `theme` (String; optional)
- `tree` (Bool | Real | String | Dict | Array; optional): Dash-assigned callback that should be called to report property changes
to Dash, to make them available for callbacks.
"""
function dqb_dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :fields, :theme, :tree]
        wild_props = Symbol[]
        return Component("dqb_dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end

