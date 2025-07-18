# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class DashQueryBuilder(Component):
    """A DashQueryBuilder component.
The Dash Query Builder component

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- alwaysShowActionButtons (boolean; default True):
    Whether to show action buttons all the time or just on hover.

- config (dict; optional):
    The config object. See the
    [Config](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc
    docs).

    `config` is a dict with keys:

    - settings (dict; required)

        `settings` is a dict with keys:

        - locale (dict; optional)

            `locale` is a dict with keys:

            - moment (string; optional)

            - antd (dict; optional)

                `antd` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

                - toString (optional):
                    Returns a string representation of an object.

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

                - hasOwnProperty (optional):
                    Determines whether an object has a property with
                    the specified name. @,param,v, ,A property name.

                - isPrototypeOf (optional):
                    Determines whether an object exists in another
                    object's prototype chain. @,param,v, ,Another
                    object whose prototype chain is to be checked.

                - propertyIsEnumerable (optional):
                    Determines whether a specified property is
                    enumerable. @,param,v, ,A property name.

            - material (dict; optional)

                `material` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

                - toString (optional):
                    Returns a string representation of an object.

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

                - hasOwnProperty (optional):
                    Determines whether an object has a property with
                    the specified name. @,param,v, ,A property name.

                - isPrototypeOf (optional):
                    Determines whether an object exists in another
                    object's prototype chain. @,param,v, ,Another
                    object whose prototype chain is to be checked.

                - propertyIsEnumerable (optional):
                    Determines whether a specified property is
                    enumerable. @,param,v, ,A property name.

            - mui (dict; optional)

                `mui` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

                - toString (optional):
                    Returns a string representation of an object.

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

                - hasOwnProperty (optional):
                    Determines whether an object has a property with
                    the specified name. @,param,v, ,A property name.

                - isPrototypeOf (optional):
                    Determines whether an object exists in another
                    object's prototype chain. @,param,v, ,Another
                    object whose prototype chain is to be checked.

                - propertyIsEnumerable (optional):
                    Determines whether a specified property is
                    enumerable. @,param,v, ,A property name.

        - theme (dict; optional)

            `theme` is a dict with keys:

            - material (dict; optional)

                `material` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

                - toString (optional):
                    Returns a string representation of an object.

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

                - hasOwnProperty (optional):
                    Determines whether an object has a property with
                    the specified name. @,param,v, ,A property name.

                - isPrototypeOf (optional):
                    Determines whether an object exists in another
                    object's prototype chain. @,param,v, ,Another
                    object whose prototype chain is to be checked.

                - propertyIsEnumerable (optional):
                    Determines whether a specified property is
                    enumerable. @,param,v, ,A property name.

            - mui (dict; optional)

                `mui` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

                - toString (optional):
                    Returns a string representation of an object.

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

                - hasOwnProperty (optional):
                    Determines whether an object has a property with
                    the specified name. @,param,v, ,A property name.

                - isPrototypeOf (optional):
                    Determines whether an object exists in another
                    object's prototype chain. @,param,v, ,Another
                    object whose prototype chain is to be checked.

                - propertyIsEnumerable (optional):
                    Determines whether a specified property is
                    enumerable. @,param,v, ,A property name.

        - valueLabel (string; optional)

        - valuePlaceholder (string; optional)

        - fieldLabel (string; optional)

        - operatorLabel (string; optional)

        - fieldPlaceholder (string; optional)

        - funcPlaceholder (string; optional)

        - funcLabel (string; optional)

        - operatorPlaceholder (string; optional)

        - lockLabel (string; optional)

        - lockedLabel (string; optional)

        - deleteLabel (string; optional)

        - addGroupLabel (string; optional)

        - addCaseLabel (string; optional)

        - addDefaultCaseLabel (string; optional)

        - defaultCaseLabel (string; optional)

        - addRuleLabel (string; optional)

        - addSubRuleLabel (string; optional)

        - delGroupLabel (string; optional)

        - notLabel (string; optional)

        - fieldSourcesPopupTitle (string; optional)

        - valueSourcesPopupTitle (string; optional)

        - removeRuleConfirmOptions (dict; optional)

            `removeRuleConfirmOptions` is a dict with keys:

            - title (string; optional)

            - okText (string; optional)

            - okType (string; optional)

            - cancelText (string; optional)

        - removeGroupConfirmOptions (dict; optional)

            `removeGroupConfirmOptions` is a dict with keys:

            - title (string; optional)

            - okText (string; optional)

            - okType (string; optional)

            - cancelText (string; optional)

        - defaultField (string; optional)

        - defaultOperator (string; optional)

        - fieldSources (list of a value equal to: 'func', 'field's; optional)

        - valueSourcesInfo (dict; optional)

            `valueSourcesInfo` is a dict with keys:

            - func (dict; optional)

                `func` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

            - field (dict; optional)

                `field` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

            - value (dict; optional)

                `value` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

            - const (dict; optional)

                `const` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

        - canCompareFieldWithField (dict; optional)

            `canCompareFieldWithField` is a string

          Or dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - canReorder (boolean; optional)

        - canRegroup (boolean; optional)

        - canRegroupCases (boolean; optional)

        - showNot (boolean; optional)

        - showLock (boolean; optional)

        - canDeleteLocked (boolean; optional)

        - maxNesting (number; optional)

        - setOpOnChangeField (list of a value equal to: 'default', 'keep', 'first', 'none's; required)

        - clearValueOnChangeField (boolean; optional)

        - clearValueOnChangeOp (boolean; optional)

        - canLeaveEmptyGroup (boolean; optional)

        - canLeaveEmptyCase (boolean; optional)

        - shouldCreateEmptyGroup (boolean; optional)

        - forceShowConj (boolean; optional)

        - immutableGroupsMode (boolean; optional)

        - immutableFieldsMode (boolean; optional)

        - immutableOpsMode (boolean; optional)

        - immutableValuesMode (boolean; optional)

        - maxNumberOfRules (dict; optional)

            `maxNumberOfRules` is a dict with keys:

            - toString (optional):
                Returns a string representation of an object.
                @,param,radix, ,Specifies a radix for converting
                numeric values to strings. This value is only used for
                numbers.

            - toFixed (required):
                Returns a string representing a number in fixed-point
                notation. @,param,fractionDigits, ,Number of digits
                after the decimal point. Must be in the range 0 - 20,
                inclusive.

            - toExponential (required):
                Returns a string containing a number represented in
                exponential notation. @,param,fractionDigits, ,Number
                of digits after the decimal point. Must be in the
                range 0 - 20, inclusive.

            - toPrecision (required):
                Returns a string containing a number represented
                either in exponential or fixed-point notation with a
                specified number of digits. @,param,precision, ,Number
                of significant digits. Must be in the range 1 - 21,
                inclusive.

            - valueOf (optional):
                Returns the primitive value of the specified object.

            - toLocaleString (dict; optional):
                Converts a number to a string by using the current or
                specified locale. @,param,locales, ,A locale string or
                array of locale strings that contain one or more
                language or locale tags. If you include more than one
                locale string, list them in descending order of
                priority so that the first entry is the preferred
                locale. If you omit this parameter, the default locale
                of the JavaScript runtime is used. @,param,options,
                ,An object that contains one or more properties that
                specify comparison options. @,param,locales, ,A locale
                string, array of locale strings, Intl.Locale object,
                or array of Intl.Locale objects that contain one or
                more language or locale tags. If you include more than
                one locale string, list them in descending order of
                priority so that the first entry is the preferred
                locale. If you omit this parameter, the default locale
                of the JavaScript runtime is used. @,param,options,
                ,An object that contains one or more properties that
                specify comparison options.

                `toLocaleString` is a dict with keys:


        - maxNumberOfCases (dict; optional)

            `maxNumberOfCases` is a dict with keys:

            - toString (optional):
                Returns a string representation of an object.
                @,param,radix, ,Specifies a radix for converting
                numeric values to strings. This value is only used for
                numbers.

            - toFixed (required):
                Returns a string representing a number in fixed-point
                notation. @,param,fractionDigits, ,Number of digits
                after the decimal point. Must be in the range 0 - 20,
                inclusive.

            - toExponential (required):
                Returns a string containing a number represented in
                exponential notation. @,param,fractionDigits, ,Number
                of digits after the decimal point. Must be in the
                range 0 - 20, inclusive.

            - toPrecision (required):
                Returns a string containing a number represented
                either in exponential or fixed-point notation with a
                specified number of digits. @,param,precision, ,Number
                of significant digits. Must be in the range 1 - 21,
                inclusive.

            - valueOf (optional):
                Returns the primitive value of the specified object.

            - toLocaleString (dict; optional):
                Converts a number to a string by using the current or
                specified locale. @,param,locales, ,A locale string or
                array of locale strings that contain one or more
                language or locale tags. If you include more than one
                locale string, list them in descending order of
                priority so that the first entry is the preferred
                locale. If you omit this parameter, the default locale
                of the JavaScript runtime is used. @,param,options,
                ,An object that contains one or more properties that
                specify comparison options. @,param,locales, ,A locale
                string, array of locale strings, Intl.Locale object,
                or array of Intl.Locale objects that contain one or
                more language or locale tags. If you include more than
                one locale string, list them in descending order of
                priority so that the first entry is the preferred
                locale. If you omit this parameter, the default locale
                of the JavaScript runtime is used. @,param,options,
                ,An object that contains one or more properties that
                specify comparison options.

                `toLocaleString` is a dict with keys:


        - showErrorMessage (boolean; optional)

        - canShortMongoQuery (boolean; optional)

        - convertableWidgets (dict with strings as keys and values of type list of strings; optional)

        - removeEmptyGroupsOnLoad (boolean; optional)

        - removeIncompleteRulesOnLoad (boolean; optional)

        - removeInvalidMultiSelectValuesOnLoad (boolean; optional)

        - groupOperators (list of strings; optional)

        - useConfigCompress (boolean; optional)

        - keepInputOnChangeFieldSrc (boolean; optional)

        - fieldItemKeysForSearch (list of a value equal to: 'key', 'path', 'label', 'altLabel', 'tooltip', 'grouplabel's; optional)

        - listKeysForSearch (list of a value equal to: 'value', 'title', 'groupTitle's; optional)

        - fieldSeparator (string; optional)

        - fieldSeparatorDisplay (string; optional)

        - formatReverse (dict; optional)

            `formatReverse` is a string

      Or dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - sqlFormatReverse (dict; optional)

            `sqlFormatReverse` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - spelFormatReverse (dict; optional)

            `spelFormatReverse` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - formatField (dict; optional)

            `formatField` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - formatSpelField (dict; optional)

            `formatSpelField` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - formatAggr (dict; optional)

            `formatAggr` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderField (dict; optional)

            `renderField` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderOperator (dict; optional)

            `renderOperator` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderFunc (dict; optional)

            `renderFunc` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderConjs (dict; optional)

            `renderConjs` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderButton (dict; optional)

            `renderButton` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderIcon (dict; optional)

            `renderIcon` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderButtonGroup (dict; optional)

            `renderButtonGroup` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderSwitch (dict; optional)

            `renderSwitch` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderProvider (dict; optional)

            `renderProvider` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderValueSources (dict; optional)

            `renderValueSources` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderFieldSources (dict; optional)

            `renderFieldSources` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderConfirm (dict; optional)

            `renderConfirm` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - useConfirm (dict; optional)

            `useConfirm` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderSize (a value equal to: 'small', 'large', 'medium'; optional)

        - renderItem (dict; optional)

            `renderItem` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - dropdownPlacement (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

        - groupActionsPosition (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

        - showLabels (boolean; optional)

        - maxLabelsLength (number; optional)

        - customFieldSelectProps (dict; optional)

        - renderBeforeWidget (dict; optional)

            `renderBeforeWidget` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderAfterWidget (dict; optional)

            `renderAfterWidget` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderBeforeActions (dict; optional)

            `renderBeforeActions` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderAfterActions (dict; optional)

            `renderAfterActions` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderRuleError (dict; optional)

            `renderRuleError` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - renderSwitchPrefix (dict; optional)

            `renderSwitchPrefix` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

        - defaultSliderWidth (string; optional)

        - defaultSelectWidth (string; optional)

        - defaultSearchWidth (string; optional)

        - defaultMaxRows (number; optional)

    - operators (dict with strings as keys and values of type boolean | number | string | dict | list; required)

    - widgets (dict with strings as keys and values of type boolean | number | string | dict | list; required)

    - conjunctions (dict; required)

        `conjunctions` is a dict with strings as keys and values of
        type dict with keys:

        - label (string; required)

        - formatConj (dict; required)

            `formatConj` is a string

              Or dict with keys:

            - constructor (optional):

                The initial value of Object.prototype.constructor is the

                standard built-in Object constructor.

            - toString (optional):

                Returns a string representation of an object.

            - toLocaleString (optional):

                Returns a date converted to a string using the current locale.

            - valueOf (optional):

                Returns the primitive value of the specified object.

            - hasOwnProperty (optional):

                Determines whether an object has a property with the specified

                name. @,param,v, ,A property name.

            - isPrototypeOf (optional):

                Determines whether an object exists in another object's

                prototype chain. @,param,v, ,Another object whose prototype

                chain is to be checked.

            - propertyIsEnumerable (optional):

                Determines whether a specified property is enumerable.

                @,param,v, ,A property name.

        - sqlFormatConj (dict; required)

            `sqlFormatConj` is a string | dict with keys:

            - constructor (optional):

                The initial value of Object.prototype.constructor is the

                standard built-in Object constructor.

            - toString (optional):

                Returns a string representation of an object.

            - toLocaleString (optional):

                Returns a date converted to a string using the current locale.

            - valueOf (optional):

                Returns the primitive value of the specified object.

            - hasOwnProperty (optional):

                Determines whether an object has a property with the specified

                name. @,param,v, ,A property name.

            - isPrototypeOf (optional):

                Determines whether an object exists in another object's

                prototype chain. @,param,v, ,Another object whose prototype

                chain is to be checked.

            - propertyIsEnumerable (optional):

                Determines whether a specified property is enumerable.

                @,param,v, ,A property name.

        - spelFormatConj (dict; required)

            `spelFormatConj` is a string | dict with keys:

            - constructor (optional):

                The initial value of Object.prototype.constructor is the

                standard built-in Object constructor.

            - toString (optional):

                Returns a string representation of an object.

            - toLocaleString (optional):

                Returns a date converted to a string using the current locale.

            - valueOf (optional):

                Returns the primitive value of the specified object.

            - hasOwnProperty (optional):

                Determines whether an object has a property with the specified

                name. @,param,v, ,A property name.

            - isPrototypeOf (optional):

                Determines whether an object exists in another object's

                prototype chain. @,param,v, ,Another object whose prototype

                chain is to be checked.

            - propertyIsEnumerable (optional):

                Determines whether a specified property is enumerable.

                @,param,v, ,A property name.

        - mongoConj (string; required)

        - jsonLogicConj (string; optional)

        - sqlConj (string; optional)

        - spelConj (string; optional)

        - spelConjs (list of strings; optional)

        - reversedConj (string; optional)

    - types (dict; required)

        `types` is a dict with strings as keys and values of type dict
        with keys:

        - valueSources (list of a value equal to: 'func', 'field', 'value', 'const's; optional)

        - defaultOperator (string; optional)

        - widgets (dict; required)

            `widgets` is a dict with keys:

        - mainWidget (string; optional)

        - excludeOperators (list of strings; optional)

    - fields (dict with strings as keys and values of type boolean | number | string | dict | list; required)

    - funcs (dict with strings as keys and values of type boolean | number | string | dict | list; optional)

    - ctx (dict with strings as keys and values of type boolean | number | string | dict | list; required)

- elasticSearchFormat (dict; optional):
    ElasticSearch query object.

    `elasticSearchFormat` is a dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

- fields (dict with strings as keys and values of type boolean | number | string | dict | list; required):
    The fields to populate the query builder. See the
    [Fields](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields)
    docs.

- jsonLogicFormat (dict; optional):
    JSONLogic object.

    `jsonLogicFormat` is a dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

- loadFormat (a value equal to: 'tree', 'jsonLogicFormat', 'spelFormat'; default 'tree'):
    The load format string. Changes the tree based on the
    corresponding prop change.

- mongoDBFormat (dict; optional):
    MongoDB query object.

    `mongoDBFormat` is a dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

- queryBuilderFormat (dict; optional):
    Query Builder object.

    `queryBuilderFormat` is a dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

    - toString (optional):
        Returns a string representation of an object.

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - valueOf (optional):
        Returns the primitive value of the specified object.

    - hasOwnProperty (optional):
        Determines whether an object has a property with the specified
        name. @,param,v, ,A property name.

    - isPrototypeOf (optional):
        Determines whether an object exists in another object's
        prototype chain. @,param,v, ,Another object whose prototype
        chain is to be checked.

    - propertyIsEnumerable (optional):
        Determines whether a specified property is enumerable.
        @,param,v, ,A property name.

- queryString (string; optional):
    Query string.

- spelFormat (string; optional):
    SPEL query string.

- sqlFormat (string; optional):
    The WHERE clause in SQL.

- theme (a value equal to: 'mui', 'antd', 'fluent', 'bootstrap', 'basic'; default 'basic'):
    The theme/styling used.

- tree (boolean | number | string | dict | list; default emptyTree):
    The JSON representation of the tree."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_query_builder'
    _type = 'DashQueryBuilder'
    JsonLogicFormat = TypedDict(
        "JsonLogicFormat",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    QueryBuilderFormat = TypedDict(
        "QueryBuilderFormat",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    MongoDBFormat = TypedDict(
        "MongoDBFormat",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ElasticSearchFormat = TypedDict(
        "ElasticSearchFormat",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsLocaleAntd = TypedDict(
        "ConfigSettingsLocaleAntd",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsLocaleMaterial = TypedDict(
        "ConfigSettingsLocaleMaterial",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsLocaleMui = TypedDict(
        "ConfigSettingsLocaleMui",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsLocale = TypedDict(
        "ConfigSettingsLocale",
            {
            "moment": NotRequired[str],
            "antd": NotRequired["ConfigSettingsLocaleAntd"],
            "material": NotRequired["ConfigSettingsLocaleMaterial"],
            "mui": NotRequired["ConfigSettingsLocaleMui"]
        }
    )

    ConfigSettingsThemeMaterial = TypedDict(
        "ConfigSettingsThemeMaterial",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsThemeMui = TypedDict(
        "ConfigSettingsThemeMui",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsTheme = TypedDict(
        "ConfigSettingsTheme",
            {
            "material": NotRequired["ConfigSettingsThemeMaterial"],
            "mui": NotRequired["ConfigSettingsThemeMui"]
        }
    )

    ConfigSettingsRemoveRuleConfirmOptions = TypedDict(
        "ConfigSettingsRemoveRuleConfirmOptions",
            {
            "title": NotRequired[str],
            "okText": NotRequired[str],
            "okType": NotRequired[str],
            "cancelText": NotRequired[str]
        }
    )

    ConfigSettingsRemoveGroupConfirmOptions = TypedDict(
        "ConfigSettingsRemoveGroupConfirmOptions",
            {
            "title": NotRequired[str],
            "okText": NotRequired[str],
            "okType": NotRequired[str],
            "cancelText": NotRequired[str]
        }
    )

    ConfigSettingsValueSourcesInfoFunc = TypedDict(
        "ConfigSettingsValueSourcesInfoFunc",
            {
            "label": str,
            "widget": NotRequired[str]
        }
    )

    ConfigSettingsValueSourcesInfoField = TypedDict(
        "ConfigSettingsValueSourcesInfoField",
            {
            "label": str,
            "widget": NotRequired[str]
        }
    )

    ConfigSettingsValueSourcesInfoValue = TypedDict(
        "ConfigSettingsValueSourcesInfoValue",
            {
            "label": str,
            "widget": NotRequired[str]
        }
    )

    ConfigSettingsValueSourcesInfoConst = TypedDict(
        "ConfigSettingsValueSourcesInfoConst",
            {
            "label": str,
            "widget": NotRequired[str]
        }
    )

    ConfigSettingsValueSourcesInfo = TypedDict(
        "ConfigSettingsValueSourcesInfo",
            {
            "func": NotRequired["ConfigSettingsValueSourcesInfoFunc"],
            "field": NotRequired["ConfigSettingsValueSourcesInfoField"],
            "value": NotRequired["ConfigSettingsValueSourcesInfoValue"],
            "const": NotRequired["ConfigSettingsValueSourcesInfoConst"]
        }
    )

    ConfigSettingsCanCompareFieldWithField = TypedDict(
        "ConfigSettingsCanCompareFieldWithField",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsMaxNumberOfRulesToLocaleString = TypedDict(
        "ConfigSettingsMaxNumberOfRulesToLocaleString",
            {

        }
    )

    ConfigSettingsMaxNumberOfRules = TypedDict(
        "ConfigSettingsMaxNumberOfRules",
            {
            "toString": NotRequired[typing.Any],
            "toFixed": typing.Any,
            "toExponential": typing.Any,
            "toPrecision": typing.Any,
            "valueOf": NotRequired[typing.Any],
            "toLocaleString": NotRequired["ConfigSettingsMaxNumberOfRulesToLocaleString"]
        }
    )

    ConfigSettingsMaxNumberOfCasesToLocaleString = TypedDict(
        "ConfigSettingsMaxNumberOfCasesToLocaleString",
            {

        }
    )

    ConfigSettingsMaxNumberOfCases = TypedDict(
        "ConfigSettingsMaxNumberOfCases",
            {
            "toString": NotRequired[typing.Any],
            "toFixed": typing.Any,
            "toExponential": typing.Any,
            "toPrecision": typing.Any,
            "valueOf": NotRequired[typing.Any],
            "toLocaleString": NotRequired["ConfigSettingsMaxNumberOfCasesToLocaleString"]
        }
    )

    ConfigSettingsFormatReverse = TypedDict(
        "ConfigSettingsFormatReverse",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsSqlFormatReverse = TypedDict(
        "ConfigSettingsSqlFormatReverse",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsSpelFormatReverse = TypedDict(
        "ConfigSettingsSpelFormatReverse",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsFormatField = TypedDict(
        "ConfigSettingsFormatField",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsFormatSpelField = TypedDict(
        "ConfigSettingsFormatSpelField",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsFormatAggr = TypedDict(
        "ConfigSettingsFormatAggr",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderField = TypedDict(
        "ConfigSettingsRenderField",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderOperator = TypedDict(
        "ConfigSettingsRenderOperator",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderFunc = TypedDict(
        "ConfigSettingsRenderFunc",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderConjs = TypedDict(
        "ConfigSettingsRenderConjs",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderButton = TypedDict(
        "ConfigSettingsRenderButton",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderIcon = TypedDict(
        "ConfigSettingsRenderIcon",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderButtonGroup = TypedDict(
        "ConfigSettingsRenderButtonGroup",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderSwitch = TypedDict(
        "ConfigSettingsRenderSwitch",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderProvider = TypedDict(
        "ConfigSettingsRenderProvider",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderValueSources = TypedDict(
        "ConfigSettingsRenderValueSources",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderFieldSources = TypedDict(
        "ConfigSettingsRenderFieldSources",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderConfirm = TypedDict(
        "ConfigSettingsRenderConfirm",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsUseConfirm = TypedDict(
        "ConfigSettingsUseConfirm",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderItem = TypedDict(
        "ConfigSettingsRenderItem",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderBeforeWidget = TypedDict(
        "ConfigSettingsRenderBeforeWidget",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderAfterWidget = TypedDict(
        "ConfigSettingsRenderAfterWidget",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderBeforeActions = TypedDict(
        "ConfigSettingsRenderBeforeActions",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderAfterActions = TypedDict(
        "ConfigSettingsRenderAfterActions",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderRuleError = TypedDict(
        "ConfigSettingsRenderRuleError",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettingsRenderSwitchPrefix = TypedDict(
        "ConfigSettingsRenderSwitchPrefix",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigSettings = TypedDict(
        "ConfigSettings",
            {
            "locale": NotRequired["ConfigSettingsLocale"],
            "theme": NotRequired["ConfigSettingsTheme"],
            "valueLabel": NotRequired[str],
            "valuePlaceholder": NotRequired[str],
            "fieldLabel": NotRequired[str],
            "operatorLabel": NotRequired[str],
            "fieldPlaceholder": NotRequired[str],
            "funcPlaceholder": NotRequired[str],
            "funcLabel": NotRequired[str],
            "operatorPlaceholder": NotRequired[str],
            "lockLabel": NotRequired[str],
            "lockedLabel": NotRequired[str],
            "deleteLabel": NotRequired[str],
            "addGroupLabel": NotRequired[str],
            "addCaseLabel": NotRequired[str],
            "addDefaultCaseLabel": NotRequired[str],
            "defaultCaseLabel": NotRequired[str],
            "addRuleLabel": NotRequired[str],
            "addSubRuleLabel": NotRequired[str],
            "delGroupLabel": NotRequired[str],
            "notLabel": NotRequired[str],
            "fieldSourcesPopupTitle": NotRequired[str],
            "valueSourcesPopupTitle": NotRequired[str],
            "removeRuleConfirmOptions": NotRequired["ConfigSettingsRemoveRuleConfirmOptions"],
            "removeGroupConfirmOptions": NotRequired["ConfigSettingsRemoveGroupConfirmOptions"],
            "defaultField": NotRequired[typing.Union[str]],
            "defaultOperator": NotRequired[str],
            "fieldSources": NotRequired[typing.Sequence[Literal["func", "field"]]],
            "valueSourcesInfo": NotRequired["ConfigSettingsValueSourcesInfo"],
            "canCompareFieldWithField": NotRequired[typing.Union[str, "ConfigSettingsCanCompareFieldWithField"]],
            "canReorder": NotRequired[bool],
            "canRegroup": NotRequired[bool],
            "canRegroupCases": NotRequired[bool],
            "showNot": NotRequired[bool],
            "showLock": NotRequired[bool],
            "canDeleteLocked": NotRequired[bool],
            "maxNesting": NotRequired[NumberType],
            "setOpOnChangeField": typing.Sequence[Literal["default", "keep", "first", "none"]],
            "clearValueOnChangeField": NotRequired[bool],
            "clearValueOnChangeOp": NotRequired[bool],
            "canLeaveEmptyGroup": NotRequired[bool],
            "canLeaveEmptyCase": NotRequired[bool],
            "shouldCreateEmptyGroup": NotRequired[bool],
            "forceShowConj": NotRequired[bool],
            "immutableGroupsMode": NotRequired[bool],
            "immutableFieldsMode": NotRequired[bool],
            "immutableOpsMode": NotRequired[bool],
            "immutableValuesMode": NotRequired[bool],
            "maxNumberOfRules": NotRequired["ConfigSettingsMaxNumberOfRules"],
            "maxNumberOfCases": NotRequired["ConfigSettingsMaxNumberOfCases"],
            "showErrorMessage": NotRequired[bool],
            "canShortMongoQuery": NotRequired[bool],
            "convertableWidgets": NotRequired[typing.Dict[typing.Union[str, float, int], typing.Sequence[str]]],
            "removeEmptyGroupsOnLoad": NotRequired[bool],
            "removeIncompleteRulesOnLoad": NotRequired[bool],
            "removeInvalidMultiSelectValuesOnLoad": NotRequired[bool],
            "groupOperators": NotRequired[typing.Sequence[str]],
            "useConfigCompress": NotRequired[bool],
            "keepInputOnChangeFieldSrc": NotRequired[bool],
            "fieldItemKeysForSearch": NotRequired[typing.Sequence[Literal["key", "path", "label", "altLabel", "tooltip", "grouplabel"]]],
            "listKeysForSearch": NotRequired[typing.Sequence[Literal["value", "title", "groupTitle"]]],
            "fieldSeparator": NotRequired[str],
            "fieldSeparatorDisplay": NotRequired[str],
            "formatReverse": NotRequired[typing.Union[str, "ConfigSettingsFormatReverse"]],
            "sqlFormatReverse": NotRequired[typing.Union[str, "ConfigSettingsSqlFormatReverse"]],
            "spelFormatReverse": NotRequired[typing.Union[str, "ConfigSettingsSpelFormatReverse"]],
            "formatField": NotRequired[typing.Union[str, "ConfigSettingsFormatField"]],
            "formatSpelField": NotRequired[typing.Union[str, "ConfigSettingsFormatSpelField"]],
            "formatAggr": NotRequired[typing.Union[str, "ConfigSettingsFormatAggr"]],
            "renderField": NotRequired[typing.Union[str, "ConfigSettingsRenderField"]],
            "renderOperator": NotRequired[typing.Union[str, "ConfigSettingsRenderOperator"]],
            "renderFunc": NotRequired[typing.Union[str, "ConfigSettingsRenderFunc"]],
            "renderConjs": NotRequired[typing.Union[str, "ConfigSettingsRenderConjs"]],
            "renderButton": NotRequired[typing.Union[str, "ConfigSettingsRenderButton"]],
            "renderIcon": NotRequired[typing.Union[str, "ConfigSettingsRenderIcon"]],
            "renderButtonGroup": NotRequired[typing.Union[str, "ConfigSettingsRenderButtonGroup"]],
            "renderSwitch": NotRequired[typing.Union[str, "ConfigSettingsRenderSwitch"]],
            "renderProvider": NotRequired[typing.Union[str, "ConfigSettingsRenderProvider"]],
            "renderValueSources": NotRequired[typing.Union[str, "ConfigSettingsRenderValueSources"]],
            "renderFieldSources": NotRequired[typing.Union[str, "ConfigSettingsRenderFieldSources"]],
            "renderConfirm": NotRequired[typing.Union[str, "ConfigSettingsRenderConfirm"]],
            "useConfirm": NotRequired[typing.Union[str, "ConfigSettingsUseConfirm", typing.Any]],
            "renderSize": NotRequired[Literal["small", "large", "medium"]],
            "renderItem": NotRequired[typing.Union[str, "ConfigSettingsRenderItem"]],
            "dropdownPlacement": NotRequired[Literal["topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight"]],
            "groupActionsPosition": NotRequired[Literal["topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight"]],
            "showLabels": NotRequired[bool],
            "maxLabelsLength": NotRequired[NumberType],
            "customFieldSelectProps": NotRequired[dict],
            "renderBeforeWidget": NotRequired[typing.Union[str, "ConfigSettingsRenderBeforeWidget"]],
            "renderAfterWidget": NotRequired[typing.Union[str, "ConfigSettingsRenderAfterWidget"]],
            "renderBeforeActions": NotRequired[typing.Union[str, "ConfigSettingsRenderBeforeActions"]],
            "renderAfterActions": NotRequired[typing.Union[str, "ConfigSettingsRenderAfterActions"]],
            "renderRuleError": NotRequired[typing.Union[str, "ConfigSettingsRenderRuleError"]],
            "renderSwitchPrefix": NotRequired[typing.Union[str, "ConfigSettingsRenderSwitchPrefix"]],
            "defaultSliderWidth": NotRequired[str],
            "defaultSelectWidth": NotRequired[str],
            "defaultSearchWidth": NotRequired[str],
            "defaultMaxRows": NotRequired[NumberType]
        }
    )

    ConfigConjunctionsFormatConj = TypedDict(
        "ConfigConjunctionsFormatConj",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigConjunctionsSqlFormatConj = TypedDict(
        "ConfigConjunctionsSqlFormatConj",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigConjunctionsSpelFormatConj = TypedDict(
        "ConfigConjunctionsSpelFormatConj",
            {
            "constructor": NotRequired[typing.Any],
            "toString": NotRequired[typing.Any],
            "toLocaleString": NotRequired[typing.Any],
            "valueOf": NotRequired[typing.Any],
            "hasOwnProperty": NotRequired[typing.Any],
            "isPrototypeOf": NotRequired[typing.Any],
            "propertyIsEnumerable": NotRequired[typing.Any]
        }
    )

    ConfigConjunctions = TypedDict(
        "ConfigConjunctions",
            {
            "label": str,
            "formatConj": typing.Union[str, "ConfigConjunctionsFormatConj"],
            "sqlFormatConj": typing.Union[str, "ConfigConjunctionsSqlFormatConj"],
            "spelFormatConj": typing.Union[str, "ConfigConjunctionsSpelFormatConj"],
            "mongoConj": str,
            "jsonLogicConj": NotRequired[str],
            "sqlConj": NotRequired[str],
            "spelConj": NotRequired[str],
            "spelConjs": NotRequired[typing.Sequence[str]],
            "reversedConj": NotRequired[str]
        }
    )

    ConfigTypesWidgets = TypedDict(
        "ConfigTypesWidgets",
            {

        }
    )

    ConfigTypes = TypedDict(
        "ConfigTypes",
            {
            "valueSources": NotRequired[typing.Sequence[Literal["func", "field", "value", "const"]]],
            "defaultOperator": NotRequired[str],
            "widgets": "ConfigTypesWidgets",
            "mainWidget": NotRequired[str],
            "excludeOperators": NotRequired[typing.Sequence[str]]
        }
    )

    Config = TypedDict(
        "Config",
            {
            "settings": "ConfigSettings",
            "operators": typing.Dict[typing.Union[str, float, int], typing.Any],
            "widgets": typing.Dict[typing.Union[str, float, int], typing.Any],
            "conjunctions": typing.Dict[typing.Union[str, float, int], "ConfigConjunctions"],
            "types": typing.Dict[typing.Union[str, float, int], "ConfigTypes"],
            "fields": typing.Dict[typing.Union[str, float, int], typing.Any],
            "funcs": NotRequired[typing.Dict[typing.Union[str, float, int], typing.Any]],
            "ctx": typing.Dict[typing.Union[str, float, int], typing.Any]
        }
    )


    def __init__(
        self,
        tree: typing.Optional[typing.Any] = None,
        sqlFormat: typing.Optional[str] = None,
        jsonLogicFormat: typing.Optional["JsonLogicFormat"] = None,
        queryBuilderFormat: typing.Optional["QueryBuilderFormat"] = None,
        mongoDBFormat: typing.Optional["MongoDBFormat"] = None,
        queryString: typing.Optional[str] = None,
        elasticSearchFormat: typing.Optional["ElasticSearchFormat"] = None,
        spelFormat: typing.Optional[str] = None,
        fields: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Any]] = None,
        config: typing.Optional["Config"] = None,
        loadFormat: typing.Optional[Literal["tree", "jsonLogicFormat", "spelFormat"]] = None,
        alwaysShowActionButtons: typing.Optional[bool] = None,
        theme: typing.Optional[Literal["mui", "antd", "fluent", "bootstrap", "basic"]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'loadFormat', 'mongoDBFormat', 'queryBuilderFormat', 'queryString', 'spelFormat', 'sqlFormat', 'theme', 'tree']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'loadFormat', 'mongoDBFormat', 'queryBuilderFormat', 'queryString', 'spelFormat', 'sqlFormat', 'theme', 'tree']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['fields']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(DashQueryBuilder, self).__init__(**args)

setattr(DashQueryBuilder, "__init__", _explicitize_args(DashQueryBuilder.__init__))
