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
- `fields` (optional): The possible fields and operators that are allowable.. fields has the following type: Array of lists containing elements 'id', 'name', 'label', 'inputType', 'operators'.
Those elements have the following types:
  - `id` (Real; optional)
  - `name` (String; required)
  - `label` (String; required)
  - `inputType` (String; optional)
  - `operators` (optional): . operators has the following type: Array of lists containing elements 'name', 'label'.
Those elements have the following types:
  - `name` (String; optional)
  - `label` (String; optional)ss
- `formattedOut` (String; optional): The formatted query
- `query` (optional): The query that is created via this component. Can be used to seed the
initial component.. query has the following type: lists containing elements 'id', 'combinator', 'rules'.
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
- `showCombinatorsBetweenRules` (Bool; optional): Show the combinators between the items within a group
- `showNotToggle` (Bool; optional): Whether or not to show the "Not" Toggle
"""
function dqb_dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :fields, :formattedOut, :query, :showCombinatorsBetweenRules, :showNotToggle]
        wild_props = Symbol[]
        return Component("dqb_dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end

