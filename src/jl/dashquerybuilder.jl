# AUTO GENERATED FILE - DO NOT EDIT

export dashquerybuilder

"""
    dashquerybuilder(;kwargs...)

A DashQueryBuilder component.
Component description
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `alwaysShowActionButtons` (Bool; optional)
- `config` (optional): . config has the following type: lists containing elements 'settings', 'operators', 'widgets', 'conjunctions', 'types', 'fields', 'funcs', 'ctx'.
Those elements have the following types:
  - `settings` (required): . settings has the following type: lists containing elements 'locale', 'theme', 'valueLabel', 'valuePlaceholder', 'fieldLabel', 'operatorLabel', 'fieldPlaceholder', 'funcPlaceholder', 'funcLabel', 'operatorPlaceholder', 'lockLabel', 'lockedLabel', 'deleteLabel', 'addGroupLabel', 'addCaseLabel', 'addDefaultCaseLabel', 'defaultCaseLabel', 'addRuleLabel', 'addSubRuleLabel', 'delGroupLabel', 'notLabel', 'fieldSourcesPopupTitle', 'valueSourcesPopupTitle', 'removeRuleConfirmOptions', 'removeGroupConfirmOptions', 'defaultField', 'defaultOperator', 'fieldSources', 'valueSourcesInfo', 'canCompareFieldWithField', 'canReorder', 'canRegroup', 'canRegroupCases', 'showNot', 'showLock', 'canDeleteLocked', 'maxNesting', 'setOpOnChangeField', 'clearValueOnChangeField', 'clearValueOnChangeOp', 'canLeaveEmptyGroup', 'canLeaveEmptyCase', 'shouldCreateEmptyGroup', 'forceShowConj', 'immutableGroupsMode', 'immutableFieldsMode', 'immutableOpsMode', 'immutableValuesMode', 'maxNumberOfRules', 'maxNumberOfCases', 'showErrorMessage', 'canShortMongoQuery', 'convertableWidgets', 'removeEmptyGroupsOnLoad', 'removeIncompleteRulesOnLoad', 'removeInvalidMultiSelectValuesOnLoad', 'groupOperators', 'useConfigCompress', 'keepInputOnChangeFieldSrc', 'fieldItemKeysForSearch', 'listKeysForSearch', 'fieldSeparator', 'fieldSeparatorDisplay', 'formatReverse', 'sqlFormatReverse', 'spelFormatReverse', 'formatField', 'formatSpelField', 'formatAggr', 'renderField', 'renderOperator', 'renderFunc', 'renderConjs', 'renderButton', 'renderIcon', 'renderButtonGroup', 'renderSwitch', 'renderProvider', 'renderValueSources', 'renderFieldSources', 'renderConfirm', 'useConfirm', 'renderSize', 'renderItem', 'dropdownPlacement', 'groupActionsPosition', 'showLabels', 'maxLabelsLength', 'customFieldSelectProps', 'renderBeforeWidget', 'renderAfterWidget', 'renderBeforeActions', 'renderAfterActions', 'renderRuleError', 'renderSwitchPrefix', 'defaultSliderWidth', 'defaultSelectWidth', 'defaultSearchWidth', 'defaultMaxRows'.
Those elements have the following types:
  - `locale` (optional): . locale has the following type: lists containing elements 'moment', 'antd', 'material', 'mui'.
Those elements have the following types:
  - `moment` (String; optional)
  - `antd` (optional): . antd has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `material` (optional): . material has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `mui` (optional): . mui has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `theme` (optional): . theme has the following type: lists containing elements 'material', 'mui'.
Those elements have the following types:
  - `material` (optional): . material has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `mui` (optional): . mui has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
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
  - `fieldSources` (Array of a value equal to: 'func', 'field's; optional)
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
  - `canCompareFieldWithField` (optional): . canCompareFieldWithField has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `canReorder` (Bool; optional)
  - `canRegroup` (Bool; optional)
  - `canRegroupCases` (Bool; optional)
  - `showNot` (Bool; optional)
  - `showLock` (Bool; optional)
  - `canDeleteLocked` (Bool; optional)
  - `maxNesting` (Real; optional)
  - `setOpOnChangeField` (Array of a value equal to: 'default', 'keep', 'first', 'none's; required)
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
  - `maxNumberOfRules` (optional): . maxNumberOfRules has the following type: lists containing elements 'toString', 'toFixed', 'toExponential', 'toPrecision', 'valueOf', 'toLocaleString'.
Those elements have the following types:
  - `toString` (optional): Returns a string representation of an object.
@,param,radix, ,Specifies a radix for converting numeric values to strings. This value is only used for numbers.
  - `toFixed` (required): Returns a string representing a number in fixed-point notation.
@,param,fractionDigits, ,Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  - `toExponential` (required): Returns a string containing a number represented in exponential notation.
@,param,fractionDigits, ,Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  - `toPrecision` (required): Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
@,param,precision, ,Number of significant digits. Must be in the range 1 - 21, inclusive.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `toLocaleString` (optional): Converts a number to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
  - `maxNumberOfCases` (optional): . maxNumberOfCases has the following type: lists containing elements 'toString', 'toFixed', 'toExponential', 'toPrecision', 'valueOf', 'toLocaleString'.
Those elements have the following types:
  - `toString` (optional): Returns a string representation of an object.
@,param,radix, ,Specifies a radix for converting numeric values to strings. This value is only used for numbers.
  - `toFixed` (required): Returns a string representing a number in fixed-point notation.
@,param,fractionDigits, ,Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  - `toExponential` (required): Returns a string containing a number represented in exponential notation.
@,param,fractionDigits, ,Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
  - `toPrecision` (required): Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
@,param,precision, ,Number of significant digits. Must be in the range 1 - 21, inclusive.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `toLocaleString` (optional): Converts a number to a string by using the current or specified locale.
@,param,locales, ,A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
@,param,options, ,An object that contains one or more properties that specify comparison options.
  - `showErrorMessage` (Bool; optional)
  - `canShortMongoQuery` (Bool; optional)
  - `convertableWidgets` (Dict with Strings as keys and values of type Array of Strings; optional)
  - `removeEmptyGroupsOnLoad` (Bool; optional)
  - `removeIncompleteRulesOnLoad` (Bool; optional)
  - `removeInvalidMultiSelectValuesOnLoad` (Bool; optional)
  - `groupOperators` (Array of Strings; optional)
  - `useConfigCompress` (Bool; optional)
  - `keepInputOnChangeFieldSrc` (Bool; optional)
  - `fieldItemKeysForSearch` (Array of a value equal to: 'key', 'path', 'label', 'altLabel', 'tooltip', 'grouplabel's; optional)
  - `listKeysForSearch` (Array of a value equal to: 'value', 'title', 'groupTitle's; optional)
  - `fieldSeparator` (String; optional)
  - `fieldSeparatorDisplay` (String; optional)
  - `formatReverse` (optional): . formatReverse has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `sqlFormatReverse` (optional): . sqlFormatReverse has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `spelFormatReverse` (optional): . spelFormatReverse has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `formatField` (optional): . formatField has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `formatSpelField` (optional): . formatSpelField has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `formatAggr` (optional): . formatAggr has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderField` (optional): . renderField has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderOperator` (optional): . renderOperator has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderFunc` (optional): . renderFunc has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderConjs` (optional): . renderConjs has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderButton` (optional): . renderButton has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderIcon` (optional): . renderIcon has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderButtonGroup` (optional): . renderButtonGroup has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderSwitch` (optional): . renderSwitch has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderProvider` (optional): . renderProvider has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderValueSources` (optional): . renderValueSources has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderFieldSources` (optional): . renderFieldSources has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderConfirm` (optional): . renderConfirm has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `useConfirm` (optional): . useConfirm has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderSize` (a value equal to: 'small', 'large', 'medium'; optional)
  - `renderItem` (optional): . renderItem has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `dropdownPlacement` (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)
  - `groupActionsPosition` (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)
  - `showLabels` (Bool; optional)
  - `maxLabelsLength` (Real; optional)
  - `customFieldSelectProps` (Dict; optional)
  - `renderBeforeWidget` (optional): . renderBeforeWidget has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderAfterWidget` (optional): . renderAfterWidget has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderBeforeActions` (optional): . renderBeforeActions has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderAfterActions` (optional): . renderAfterActions has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderRuleError` (optional): . renderRuleError has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `renderSwitchPrefix` (optional): . renderSwitchPrefix has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `defaultSliderWidth` (String; optional)
  - `defaultSelectWidth` (String; optional)
  - `defaultSearchWidth` (String; optional)
  - `defaultMaxRows` (Real; optional)
  - `operators` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; required)
  - `widgets` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; required)
  - `conjunctions` (required): . conjunctions has the following type: Dict with Strings as keys and values of type lists containing elements 'label', 'formatConj', 'sqlFormatConj', 'spelFormatConj', 'mongoConj', 'jsonLogicConj', 'sqlConj', 'spelConj', 'spelConjs', 'reversedConj'.
Those elements have the following types:
  - `label` (String; required)
  - `formatConj` (required): . formatConj has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `sqlFormatConj` (required): . sqlFormatConj has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `spelFormatConj` (required): . spelFormatConj has the following type: String | lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
  - `mongoConj` (String; required)
  - `jsonLogicConj` (String; optional)
  - `sqlConj` (String; optional)
  - `spelConj` (String; optional)
  - `spelConjs` (Array of Strings; optional)
  - `reversedConj` (String; optional)
  - `types` (required): . types has the following type: Dict with Strings as keys and values of type lists containing elements 'valueSources', 'defaultOperator', 'widgets', 'mainWidget', 'excludeOperators'.
Those elements have the following types:
  - `valueSources` (Array of a value equal to: 'func', 'field', 'value', 'const's; optional)
  - `defaultOperator` (String; optional)
  - `widgets` (required): . widgets has the following type: lists containing elements .
Those elements have the following types:

  - `mainWidget` (String; optional)
  - `excludeOperators` (Array of Strings; optional)
  - `fields` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; required)
  - `funcs` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; optional)
  - `ctx` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; required)
- `elasticSearchFormat` (optional): . elasticSearchFormat has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
- `fields` (Dict with Strings as keys and values of type Bool | Real | String | Dict | Array; required)
- `jsonLogicFormat` (optional): . jsonLogicFormat has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
- `load_format` (a value equal to: 'jsonLogicFormat', 'spelFormat', 'tree'; optional)
- `mongoDBFormat` (optional): . mongoDBFormat has the following type: lists containing elements 'constructor', 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'.
Those elements have the following types:
  - `constructor` (optional): The initial value of Object.prototype.constructor is the standard built-in Object constructor.
  - `toString` (optional): Returns a string representation of an object.
  - `toLocaleString` (optional): Returns a date converted to a string using the current locale.
  - `valueOf` (optional): Returns the primitive value of the specified object.
  - `hasOwnProperty` (optional): Determines whether an object has a property with the specified name.
@,param,v, ,A property name.
  - `isPrototypeOf` (optional): Determines whether an object exists in another object's prototype chain.
@,param,v, ,Another object whose prototype chain is to be checked.
  - `propertyIsEnumerable` (optional): Determines whether a specified property is enumerable.
@,param,v, ,A property name.
- `queryBuilderStringFormat` (String; optional)
- `queryString` (String; optional)
- `spelFormat` (String; optional)
- `sqlFormat` (String; optional)
- `theme` (a value equal to: 'mui', 'antd', 'fluent', 'bootstrap', 'basic'; optional)
- `tree` (Bool | Real | String | Dict | Array; optional)
"""
function dashquerybuilder(; kwargs...)
        available_props = Symbol[:id, :alwaysShowActionButtons, :config, :elasticSearchFormat, :fields, :jsonLogicFormat, :load_format, :mongoDBFormat, :queryBuilderStringFormat, :queryString, :spelFormat, :sqlFormat, :theme, :tree]
        wild_props = Symbol[]
        return Component("dashquerybuilder", "DashQueryBuilder", "dash_query_builder", available_props, wild_props; kwargs...)
end
