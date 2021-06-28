# AUTO GENERATED FILE - DO NOT EDIT

export dqb_dashquerybuilder

"""
    dqb_dashquerybuilder(;kwargs...)

A DashQueryBuilder component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `fields` (optional): The value displayed in the input.. fields has the following type: Array of lists containing elements 'id', 'name', 'label', 'operators'.
Those elements have the following types:
  - `id` (Real; optional)
  - `name` (String; required)
  - `label` (String; required)
  - `operators` (optional): . operators has the following type: Array of lists containing elements 'name', 'label'.
Those elements have the following types:
  - `name` (String; optional)
  - `label` (String; optional)ss
- `formattedOut` (String; optional)
- `query` (optional): The query. query has the following type: lists containing elements 'id', 'combinator', 'rules'.
Those elements have the following types:
  - `id` (String; optional)
  - `combinator` (String; required)
  - `rules` (optional): . rules has the following type: lists containing elements 'field', 'value', 'operator'.
Those elements have the following types:
  - `field` (String; required)
  - `value` (Bool | Real | String | Dict | Array; required)
  - `operator` (String; required) | Array of lists containing elements 'rules', 'combinator'.
Those elements have the following types:
  - `rules` (optional): . rules has the following type: Array of lists containing elements 'field', 'value', 'operator'.
Those elements have the following types:
  - `field` (String; required)
  - `value` (Bool | Real | String | Dict | Array; required)
  - `operator` (String; required)s
  - `combinator` (String; required)s | Array
"""
function dqb_dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :fields, :formattedOut, :query]
        wild_props = Symbol[]
        return Component("dqb_dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end

