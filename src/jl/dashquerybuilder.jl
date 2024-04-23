# AUTO GENERATED FILE - DO NOT EDIT

export dashquerybuilder

"""
    dashquerybuilder(;kwargs...)

A DashQueryBuilder component.
The Dash Query Builder component
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `alwaysShowActionButtons` (Bool; optional): Whether to show action buttons all the time or just on hover
- `config` (optional): The config object. See the [Config](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc docs).. config has the following type: lists containing elements 'settings', 'operators', 'widgets', 'conjunctions', 'types', 'fields', 'funcs', 'ctx'.
Those elements have the following types:
  - `settings` (required): . settings has the following type: lists containing elements 'locale', 'theme', 'valueLabel', 'valuePlaceholder', 'fieldLabel', 'operatorLabel', 'fieldPlaceholder', 'funcPlaceholder', 'funcLabel', 'operatorPlaceholder', 'lockLabel', 'lockedLabel', 'deleteLabel', 'addGroupLabel', 'addCaseLabel', 'addDefaultCaseLabel', 'defaultCaseLabel', 'addRuleLabel', 'addSubRuleLabel', 'delGroupLabel', 'notLabel', 'fieldSourcesPopupTitle', 'valueSourcesPopupTitle', 'removeRuleConfirmOptions', 'removeGroupConfirmOptions', 'defaultField', 'defaultOperator', 'fieldSources', 'valueSourcesInfo', 'canCompareFieldWithField', 'canReorder', 'canRegroup', 'canRegroupCases', 'showNot', 'showLock', 'canDeleteLocked', 'maxNesting', 'setOpOnChangeField', 'clearValueOnChangeField', 'clearValueOnChangeOp', 'canLeaveEmptyGroup', 'canLeaveEmptyCase', 'shouldCreateEmptyGroup', 'forceShowConj', 'immutableGroupsMode', 'immutableFieldsMode', 'immutableOpsMode', 'immutableValuesMode', 'maxNumberOfRules', 'maxNumberOfCases', 'showErrorMessage', 'canShortMongoQuery', 'convertableWidgets', 'removeEmptyGroupsOnLoad', 'removeIncompleteRulesOnLoad', 'removeInvalidMultiSelectValuesOnLoad', 'groupOperators', 'useConfigCompress', 'keepInputOnChangeFieldSrc', 'fieldItemKeysForSearch', 'listKeysForSearch', 'fieldSeparator', 'fieldSeparatorDisplay', 'formatReverse', 'sqlFormatReverse', 'spelFormatReverse', 'formatField', 'formatSpelField', 'formatAggr', 'renderField', 'renderOperator', 'renderFunc', 'renderConjs', 'renderButton', 'renderIcon', 'renderButtonGroup', 'renderSwitch', 'renderProvider', 'renderValueSources', 'renderFieldSources', 'renderConfirm', 'useConfirm', 'renderSize', 'renderItem', 'dropdownPlacement', 'groupActionsPosition', 'showLabels', 'maxLabelsLength', 'customFieldSelectProps', 'renderBeforeWidget', 'renderAfterWidget', 'renderBeforeActions', 'renderAfterActions', 'renderRuleError', 'renderSwitchPrefix', 'defaultSliderWidth', 'defaultSelectWidth', 'defaultSearchWidth', 'defaultMaxRows'.
Those elements have the following types:
  - `locale` (optional): . locale has the following type: lists containing elements 'moment', 'antd', 'material', 'mui'.
Those elements have the following types:
  - `moment` (String; optional)
  - `antd` (optional): . antd has the following type: lists containing elements .
Those elements have the following types:

  - `material` (optional): . material has the following type: lists containing elements .
Those elements have the following types:

  - `mui` (optional): . mui has the following type: lists containing elements .
Those elements have the following types:

  - `theme` (optional): . theme has the following type: lists containing elements 'material', 'mui'.
Those elements have the following types:
  - `material` (optional): . material has the following type: lists containing elements .
Those elements have the following types:

  - `mui` (optional): . mui has the following type: lists containing elements .
Those elements have the following types:

  - `valueLabel` (String; optional)
  - `valuePlaceholder` (String; optional)
  - `fieldLabel` (String; optional)
  - `operatorLabel` (String; optional)
  - `fieldPlaceholder` (String; optional)
  - `funcPlaceholder` (String; optional)
  - `funcLabel` (String; optional)
  - `operatorPlaceholder` (String; optional)
  - `lockLabel` (String; optional)
  - `lockedLabel` (String; optional)
  - `deleteLabel` (String; optional)
  - `addGroupLabel` (String; optional)
  - `addCaseLabel` (String; optional)
  - `addDefaultCaseLabel` (String; optional)
  - `defaultCaseLabel` (String; optional)
  - `addRuleLabel` (String; optional)
  - `addSubRuleLabel` (String; optional)
  - `delGroupLabel` (String; optional)
  - `notLabel` (String; optional)
  - `fieldSourcesPopupTitle` (String; optional)
  - `valueSourcesPopupTitle` (String; optional)
  - `removeRuleConfirmOptions` (optional): . removeRuleConfirmOptions has the following type: lists containing elements 'title', 'okText', 'okType', 'cancelText'.
Those elements have the following types:
  - `title` (String; optional)
  - `okText` (String; optional)
  - `okType` (String; optional)
  - `cancelText` (String; optional)
  - `removeGroupConfirmOptions` (optional): . removeGroupConfirmOptions has the following type: lists containing elements 'title', 'okText', 'okType', 'cancelText'.
Those elements have the following types:
  - `title` (String; optional)
  - `okText` (String; optional)
  - `okType` (String; optional)
  - `cancelText` (String; optional)
  - `defaultField` (String; optional)
  - `defaultOperator` (String; optional)
  - `fieldSources` (Array; optional)
  - `valueSourcesInfo` (optional): . valueSourcesInfo has the following type: lists containing elements 'func', 'field', 'value', 'const'.
Those elements have the following types:
  - `func` (optional): . func has the following type: lists containing elements 'label', 'widget'.
Those elements have the following types:
  - `label` (String; required)
  - `widget` (String; optional)
  - `field` (optional): . field has the following type: lists containing elements 'label', 'widget'.
Those elements have the following types:
  - `label` (String; required)
  - `widget` (String; optional)
  - `value` (optional): . value has the following type: lists containing elements 'label', 'widget'.
Those elements have the following types:
  - `label` (String; required)
  - `widget` (String; optional)
  - `const` (optional): . const has the following type: lists containing elements 'label', 'widget'.
Those elements have the following types:
  - `label` (String; required)
  - `widget` (String; optional)
  - `canCompareFieldWithField` (Bool | Real | String | Dict | Array; optional)
  - `canReorder` (Bool; optional)
  - `canRegroup` (Bool; optional)
  - `canRegroupCases` (Bool; optional)
  - `showNot` (Bool; optional)
  - `showLock` (Bool; optional)
  - `canDeleteLocked` (Bool; optional)
  - `maxNesting` (Real; optional)
  - `setOpOnChangeField` (Array; required)
  - `clearValueOnChangeField` (Bool; optional)
  - `clearValueOnChangeOp` (Bool; optional)
  - `canLeaveEmptyGroup` (Bool; optional)
  - `canLeaveEmptyCase` (Bool; optional)
  - `shouldCreateEmptyGroup` (Bool; optional)
  - `forceShowConj` (Bool; optional)
  - `immutableGroupsMode` (Bool; optional)
  - `immutableFieldsMode` (Bool; optional)
  - `immutableOpsMode` (Bool; optional)
  - `immutableValuesMode` (Bool; optional)
  - `maxNumberOfRules` (optional): . maxNumberOfRules has the following type: lists containing elements .
Those elements have the following types:

  - `maxNumberOfCases` (optional): . maxNumberOfCases has the following type: lists containing elements .
Those elements have the following types:

  - `showErrorMessage` (Bool; optional)
  - `canShortMongoQuery` (Bool; optional)
  - `convertableWidgets` (optional): . convertableWidgets has the following type: lists containing elements .
Those elements have the following types:

  - `removeEmptyGroupsOnLoad` (Bool; optional)
  - `removeIncompleteRulesOnLoad` (Bool; optional)
  - `removeInvalidMultiSelectValuesOnLoad` (Bool; optional)
  - `groupOperators` (Array; optional)
  - `useConfigCompress` (Bool; optional)
  - `keepInputOnChangeFieldSrc` (Bool; optional)
  - `fieldItemKeysForSearch` (optional): . fieldItemKeysForSearch has the following type: lists containing elements .
Those elements have the following types:

  - `listKeysForSearch` (optional): . listKeysForSearch has the following type: lists containing elements .
Those elements have the following types:

  - `fieldSeparator` (String; optional)
  - `fieldSeparatorDisplay` (String; optional)
  - `formatReverse` (Bool | Real | String | Dict | Array; optional)
  - `sqlFormatReverse` (Bool | Real | String | Dict | Array; optional)
  - `spelFormatReverse` (Bool | Real | String | Dict | Array; optional)
  - `formatField` (Bool | Real | String | Dict | Array; optional)
  - `formatSpelField` (Bool | Real | String | Dict | Array; optional)
  - `formatAggr` (Bool | Real | String | Dict | Array; optional)
  - `renderField` (Bool | Real | String | Dict | Array; optional)
  - `renderOperator` (Bool | Real | String | Dict | Array; optional)
  - `renderFunc` (Bool | Real | String | Dict | Array; optional)
  - `renderConjs` (Bool | Real | String | Dict | Array; optional)
  - `renderButton` (Bool | Real | String | Dict | Array; optional)
  - `renderIcon` (Bool | Real | String | Dict | Array; optional)
  - `renderButtonGroup` (Bool | Real | String | Dict | Array; optional)
  - `renderSwitch` (Bool | Real | String | Dict | Array; optional)
  - `renderProvider` (Bool | Real | String | Dict | Array; optional)
  - `renderValueSources` (Bool | Real | String | Dict | Array; optional)
  - `renderFieldSources` (Bool | Real | String | Dict | Array; optional)
  - `renderConfirm` (Bool | Real | String | Dict | Array; optional)
  - `useConfirm` (Bool | Real | String | Dict | Array; optional)
  - `renderSize` (a value equal to: 'small', 'large', 'medium'; optional)
  - `renderItem` (Bool | Real | String | Dict | Array; optional)
  - `dropdownPlacement` (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)
  - `groupActionsPosition` (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)
  - `showLabels` (Bool; optional)
  - `maxLabelsLength` (Real; optional)
  - `customFieldSelectProps` (Dict; optional)
  - `renderBeforeWidget` (Bool | Real | String | Dict | Array; optional)
  - `renderAfterWidget` (Bool | Real | String | Dict | Array; optional)
  - `renderBeforeActions` (Bool | Real | String | Dict | Array; optional)
  - `renderAfterActions` (Bool | Real | String | Dict | Array; optional)
  - `renderRuleError` (Bool | Real | String | Dict | Array; optional)
  - `renderSwitchPrefix` (Bool | Real | String | Dict | Array; optional)
  - `defaultSliderWidth` (String; optional)
  - `defaultSelectWidth` (String; optional)
  - `defaultSearchWidth` (String; optional)
  - `defaultMaxRows` (Real; optional)
  - `operators` (required): . operators has the following type: lists containing elements .
Those elements have the following types:

  - `widgets` (required): . widgets has the following type: lists containing elements .
Those elements have the following types:

  - `conjunctions` (required): . conjunctions has the following type: lists containing elements .
Those elements have the following types:

  - `types` (required): . types has the following type: lists containing elements .
Those elements have the following types:

  - `fields` (required): . fields has the following type: lists containing elements .
Those elements have the following types:

  - `funcs` (optional): . funcs has the following type: lists containing elements .
Those elements have the following types:

  - `ctx` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; required)
- `elasticSearchFormat` (optional): ElasticSearch query object. elasticSearchFormat has the following type: lists containing elements .
Those elements have the following types:

- `fields` (required): The fields to populate the query builder. See the
[Fields](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields) docs.. fields has the following type: lists containing elements .
Those elements have the following types:

- `jsonLogicFormat` (optional): JSONLogic object. jsonLogicFormat has the following type: lists containing elements .
Those elements have the following types:

- `loadFormat` (a value equal to: 'tree', 'jsonLogicFormat', 'spelFormat'; optional): The load format string. Changes the tree based on the corresponding prop change
- `mongoDBFormat` (optional): MongoDB query object. mongoDBFormat has the following type: lists containing elements .
Those elements have the following types:

- `queryBuilderFormat` (optional): Query Builder object. queryBuilderFormat has the following type: lists containing elements .
Those elements have the following types:

- `queryString` (String; optional): Query string
- `spelFormat` (String; optional): SPEL query string
- `sqlFormat` (String; optional): The WHERE clause in SQL
- `theme` (a value equal to: 'mui', 'antd', 'fluent', 'bootstrap', 'basic'; optional): The theme/styling used
- `tree` (Bool | Real | String | Dict | Array; optional): The JSON representation of the tree
"""
function dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :alwaysShowActionButtons, :config, :elasticSearchFormat, :fields, :jsonLogicFormat, :loadFormat, :mongoDBFormat, :queryBuilderFormat, :queryString, :spelFormat, :sqlFormat, :theme, :tree]
        wild_props = Symbol[]
        return Component("dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end

