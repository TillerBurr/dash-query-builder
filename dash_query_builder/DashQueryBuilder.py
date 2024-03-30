# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashQueryBuilder(Component):
    """A DashQueryBuilder component.
Component description

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- alwaysShowActionButtons (boolean; default True)

- config (dict; optional)

    `config` is a dict with keys:

    - conjunctions (dict; required)

        `conjunctions` is a dict with strings as keys and values of
        type dict with keys:

        - formatConj (dict; required)

            `formatConj` is a string

              Or dict with keys:

            - constructor (optional):

                The initial value of Object.prototype.constructor is the

                standard built-in Object constructor.

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

            - toLocaleString (optional):

                Returns a date converted to a string using the current locale.

            - toString (optional):

                Returns a string representation of an object.

            - valueOf (optional):

                Returns the primitive value of the specified object.

        - jsonLogicConj (string; optional)

        - label (string; required)

        - mongoConj (string; required)

        - reversedConj (string; optional)

        - spelConj (string; optional)

        - spelConjs (list of strings; optional)

        - spelFormatConj (dict; required)

            `spelFormatConj` is a string

      Or dict with keys:

            - constructor (optional):

                The initial value of Object.prototype.constructor is the

                standard built-in Object constructor.

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

            - toLocaleString (optional):

                Returns a date converted to a string using the current locale.

            - toString (optional):

                Returns a string representation of an object.

            - valueOf (optional):

                Returns the primitive value of the specified object.

        - sqlConj (string; optional)

        - sqlFormatConj (dict; required)

            `sqlFormatConj` is a string | dict with keys:

            - constructor (optional):

                The initial value of Object.prototype.constructor is the

                standard built-in Object constructor.

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

            - toLocaleString (optional):

                Returns a date converted to a string using the current locale.

            - toString (optional):

                Returns a string representation of an object.

            - valueOf (optional):

                Returns the primitive value of the specified object.

    - ctx (dict with strings as keys and values of type boolean | number | string | dict | list; required)

    - fields (dict with strings as keys and values of type boolean | number | string | dict | list; required)

    - funcs (dict with strings as keys and values of type boolean | number | string | dict | list; optional)

    - operators (dict with strings as keys and values of type boolean | number | string | dict | list; required)

    - settings (dict; required)

        `settings` is a dict with keys:

        - addCaseLabel (string; optional)

        - addDefaultCaseLabel (string; optional)

        - addGroupLabel (string; optional)

        - addRuleLabel (string; optional)

        - addSubRuleLabel (string; optional)

        - canCompareFieldWithField (dict; optional)

            `canCompareFieldWithField` is a string

          Or dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - canDeleteLocked (boolean; optional)

        - canLeaveEmptyCase (boolean; optional)

        - canLeaveEmptyGroup (boolean; optional)

        - canRegroup (boolean; optional)

        - canRegroupCases (boolean; optional)

        - canReorder (boolean; optional)

        - canShortMongoQuery (boolean; optional)

        - clearValueOnChangeField (boolean; optional)

        - clearValueOnChangeOp (boolean; optional)

        - convertableWidgets (dict with strings as keys and values of type list of strings; optional)

        - customFieldSelectProps (dict; optional)

        - defaultCaseLabel (string; optional)

        - defaultField (string; optional)

        - defaultMaxRows (number; optional)

        - defaultOperator (string; optional)

        - defaultSearchWidth (string; optional)

        - defaultSelectWidth (string; optional)

        - defaultSliderWidth (string; optional)

        - delGroupLabel (string; optional)

        - deleteLabel (string; optional)

        - dropdownPlacement (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

        - fieldItemKeysForSearch (list of a value equal to: 'key', 'path', 'label', 'altLabel', 'tooltip', 'grouplabel's; optional)

        - fieldLabel (string; optional)

        - fieldPlaceholder (string; optional)

        - fieldSeparator (string; optional)

        - fieldSeparatorDisplay (string; optional)

        - fieldSources (list of a value equal to: 'func', 'field's; optional)

        - fieldSourcesPopupTitle (string; optional)

        - forceShowConj (boolean; optional)

        - formatAggr (dict; optional)

            `formatAggr` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - formatField (dict; optional)

            `formatField` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - formatReverse (dict; optional)

            `formatReverse` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - formatSpelField (dict; optional)

            `formatSpelField` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - funcLabel (string; optional)

        - funcPlaceholder (string; optional)

        - groupActionsPosition (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

        - groupOperators (list of strings; optional)

        - immutableFieldsMode (boolean; optional)

        - immutableGroupsMode (boolean; optional)

        - immutableOpsMode (boolean; optional)

        - immutableValuesMode (boolean; optional)

        - keepInputOnChangeFieldSrc (boolean; optional)

        - listKeysForSearch (list of a value equal to: 'value', 'title', 'groupTitle's; optional)

        - locale (dict; optional)

            `locale` is a dict with keys:

            - antd (dict; optional)

                `antd` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

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

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - toString (optional):
                    Returns a string representation of an object.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

            - material (dict; optional)

                `material` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

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

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - toString (optional):
                    Returns a string representation of an object.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

            - moment (string; optional)

            - mui (dict; optional)

                `mui` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

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

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - toString (optional):
                    Returns a string representation of an object.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

        - lockLabel (string; optional)

        - lockedLabel (string; optional)

        - maxLabelsLength (number; optional)

        - maxNesting (number; optional)

        - maxNumberOfCases (dict; optional)

            `maxNumberOfCases` is a dict with keys:

            - toExponential (required):
                Returns a string containing a number represented in
                exponential notation. @,param,fractionDigits, ,Number
                of digits after the decimal point. Must be in the
                range 0 - 20, inclusive.

            - toFixed (required):
                Returns a string representing a number in fixed-point
                notation. @,param,fractionDigits, ,Number of digits
                after the decimal point. Must be in the range 0 - 20,
                inclusive.

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


            - toPrecision (required):
                Returns a string containing a number represented
                either in exponential or fixed-point notation with a
                specified number of digits. @,param,precision, ,Number
                of significant digits. Must be in the range 1 - 21,
                inclusive.

            - toString (optional):
                Returns a string representation of an object.
                @,param,radix, ,Specifies a radix for converting
                numeric values to strings. This value is only used for
                numbers.

            - valueOf (optional):
                Returns the primitive value of the specified object.

        - maxNumberOfRules (dict; optional)

            `maxNumberOfRules` is a dict with keys:

            - toExponential (required):
                Returns a string containing a number represented in
                exponential notation. @,param,fractionDigits, ,Number
                of digits after the decimal point. Must be in the
                range 0 - 20, inclusive.

            - toFixed (required):
                Returns a string representing a number in fixed-point
                notation. @,param,fractionDigits, ,Number of digits
                after the decimal point. Must be in the range 0 - 20,
                inclusive.

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


            - toPrecision (required):
                Returns a string containing a number represented
                either in exponential or fixed-point notation with a
                specified number of digits. @,param,precision, ,Number
                of significant digits. Must be in the range 1 - 21,
                inclusive.

            - toString (optional):
                Returns a string representation of an object.
                @,param,radix, ,Specifies a radix for converting
                numeric values to strings. This value is only used for
                numbers.

            - valueOf (optional):
                Returns the primitive value of the specified object.

        - notLabel (string; optional)

        - operatorLabel (string; optional)

        - operatorPlaceholder (string; optional)

        - removeEmptyGroupsOnLoad (boolean; optional)

        - removeGroupConfirmOptions (dict; optional)

            `removeGroupConfirmOptions` is a dict with keys:

            - cancelText (string; optional)

            - okText (string; optional)

            - okType (string; optional)

            - title (string; optional)

        - removeIncompleteRulesOnLoad (boolean; optional)

        - removeInvalidMultiSelectValuesOnLoad (boolean; optional)

        - removeRuleConfirmOptions (dict; optional)

            `removeRuleConfirmOptions` is a dict with keys:

            - cancelText (string; optional)

            - okText (string; optional)

            - okType (string; optional)

            - title (string; optional)

        - renderAfterActions (dict; optional)

            `renderAfterActions` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderAfterWidget (dict; optional)

            `renderAfterWidget` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderBeforeActions (dict; optional)

            `renderBeforeActions` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderBeforeWidget (dict; optional)

            `renderBeforeWidget` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderButton (dict; optional)

            `renderButton` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderButtonGroup (dict; optional)

            `renderButtonGroup` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderConfirm (dict; optional)

            `renderConfirm` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderConjs (dict; optional)

            `renderConjs` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderField (dict; optional)

            `renderField` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderFieldSources (dict; optional)

            `renderFieldSources` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderFunc (dict; optional)

            `renderFunc` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderIcon (dict; optional)

            `renderIcon` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderItem (dict; optional)

            `renderItem` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderOperator (dict; optional)

            `renderOperator` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderProvider (dict; optional)

            `renderProvider` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderRuleError (dict; optional)

            `renderRuleError` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderSize (a value equal to: 'small', 'large', 'medium'; optional)

        - renderSwitch (dict; optional)

            `renderSwitch` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderSwitchPrefix (dict; optional)

            `renderSwitchPrefix` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - renderValueSources (dict; optional)

            `renderValueSources` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - setOpOnChangeField (list of a value equal to: 'default', 'keep', 'first', 'none's; required)

        - shouldCreateEmptyGroup (boolean; optional)

        - showErrorMessage (boolean; optional)

        - showLabels (boolean; optional)

        - showLock (boolean; optional)

        - showNot (boolean; optional)

        - spelFormatReverse (dict; optional)

            `spelFormatReverse` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - sqlFormatReverse (dict; optional)

            `sqlFormatReverse` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - theme (dict; optional)

            `theme` is a dict with keys:

            - material (dict; optional)

                `material` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

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

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - toString (optional):
                    Returns a string representation of an object.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

            - mui (dict; optional)

                `mui` is a dict with keys:

                - constructor (optional):
                    The initial value of Object.prototype.constructor
                    is the standard built-in Object constructor.

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

                - toLocaleString (optional):
                    Returns a date converted to a string using the
                    current locale.

                - toString (optional):
                    Returns a string representation of an object.

                - valueOf (optional):
                    Returns the primitive value of the specified
                    object.

        - useConfigCompress (boolean; optional)

        - useConfirm (dict; optional)

            `useConfirm` is a string | dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

        - valueLabel (string; optional)

        - valuePlaceholder (string; optional)

        - valueSourcesInfo (dict; optional)

            `valueSourcesInfo` is a dict with keys:

            - const (dict; optional)

                `const` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

            - field (dict; optional)

                `field` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

            - func (dict; optional)

                `func` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

            - value (dict; optional)

                `value` is a dict with keys:

                - label (string; required)

                - widget (string; optional)

        - valueSourcesPopupTitle (string; optional)

    - types (dict; required)

        `types` is a dict with strings as keys and values of type dict
        with keys:

        - defaultOperator (string; optional)

        - excludeOperators (list of strings; optional)

        - mainWidget (string; optional)

        - valueSources (list of a value equal to: 'func', 'field', 'value', 'const's; optional)

        - widgets (dict; required)

            `widgets` is a dict with keys:

    - widgets (dict with strings as keys and values of type boolean | number | string | dict | list; required)

- elasticSearchFormat (string; optional)

- fields (dict with strings as keys and values of type boolean | number | string | dict | list; required)

- jsonLogicFormat (dict; optional)

    `jsonLogicFormat` is a dict with keys:

    - constructor (optional):
        The initial value of Object.prototype.constructor is the
        standard built-in Object constructor.

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

    - toLocaleString (optional):
        Returns a date converted to a string using the current locale.

    - toString (optional):
        Returns a string representation of an object.

    - valueOf (optional):
        Returns the primitive value of the specified object.

- load_format (a value equal to: 'jsonLogicFormat', 'spelFormat', 'tree'; default 'tree')

- mongoDBFormat (string; optional)

- queryBuilderStringFormat (string; optional)

- spelFormat (string; optional)

- sqlFormat (string; optional)

- theme (a value equal to: 'mui', 'antd', 'fluent', 'bootstrap', 'basic'; default 'basic')

- tree (boolean | number | string | dict | list; default emptyTree)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_query_builder'
    _type = 'DashQueryBuilder'
    @_explicitize_args
    def __init__(self, fields=Component.REQUIRED, config=Component.UNDEFINED, load_format=Component.UNDEFINED, tree=Component.UNDEFINED, sqlFormat=Component.UNDEFINED, jsonLogicFormat=Component.UNDEFINED, queryBuilderStringFormat=Component.UNDEFINED, mongoDBFormat=Component.UNDEFINED, elasticSearchFormat=Component.UNDEFINED, spelFormat=Component.UNDEFINED, alwaysShowActionButtons=Component.UNDEFINED, theme=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'load_format', 'mongoDBFormat', 'queryBuilderStringFormat', 'spelFormat', 'sqlFormat', 'theme', 'tree']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'load_format', 'mongoDBFormat', 'queryBuilderStringFormat', 'spelFormat', 'sqlFormat', 'theme', 'tree']
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
