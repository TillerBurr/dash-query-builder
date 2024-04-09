# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashQueryBuilder(Component):
    """A DashQueryBuilder component.


Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- alwaysShowActionButtons (boolean; default True)

- config (dict; optional)

    `config` is a dict with keys:

    - conjunctions (dict; required)

        `conjunctions` is a dict with keys:


    - ctx (dict with strings as keys and values of type boolean | number | string | dict | list; required)

    - fields (dict; required)

        `fields` is a dict with keys:


    - funcs (dict; optional)

        `funcs` is a dict with keys:


    - operators (dict; required)

        `operators` is a dict with keys:


    - settings (dict; required)

        `settings` is a dict with keys:

        - addCaseLabel (string; optional)

        - addDefaultCaseLabel (string; optional)

        - addGroupLabel (string; optional)

        - addRuleLabel (string; optional)

        - addSubRuleLabel (string; optional)

        - canCompareFieldWithField (boolean | number | string | dict | list; optional)

        - canDeleteLocked (boolean; optional)

        - canLeaveEmptyCase (boolean; optional)

        - canLeaveEmptyGroup (boolean; optional)

        - canRegroup (boolean; optional)

        - canRegroupCases (boolean; optional)

        - canReorder (boolean; optional)

        - canShortMongoQuery (boolean; optional)

        - clearValueOnChangeField (boolean; optional)

        - clearValueOnChangeOp (boolean; optional)

        - convertableWidgets (dict; optional)

            `convertableWidgets` is a dict with keys:


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

        - fieldItemKeysForSearch (dict; optional)

            `fieldItemKeysForSearch` is a dict with keys:


        - fieldLabel (string; optional)

        - fieldPlaceholder (string; optional)

        - fieldSeparator (string; optional)

        - fieldSeparatorDisplay (string; optional)

        - fieldSources (list; optional)

        - fieldSourcesPopupTitle (string; optional)

        - forceShowConj (boolean; optional)

        - formatAggr (boolean | number | string | dict | list; optional)

        - formatField (boolean | number | string | dict | list; optional)

        - formatReverse (boolean | number | string | dict | list; optional)

        - formatSpelField (boolean | number | string | dict | list; optional)

        - funcLabel (string; optional)

        - funcPlaceholder (string; optional)

        - groupActionsPosition (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

        - groupOperators (list; optional)

        - immutableFieldsMode (boolean; optional)

        - immutableGroupsMode (boolean; optional)

        - immutableOpsMode (boolean; optional)

        - immutableValuesMode (boolean; optional)

        - keepInputOnChangeFieldSrc (boolean; optional)

        - listKeysForSearch (dict; optional)

            `listKeysForSearch` is a dict with keys:


        - locale (dict; optional)

            `locale` is a dict with keys:

            - antd (dict; optional)

                `antd` is a dict with keys:


            - material (dict; optional)

                `material` is a dict with keys:


            - moment (string; optional)

            - mui (dict; optional)

                `mui` is a dict with keys:


        - lockLabel (string; optional)

        - lockedLabel (string; optional)

        - maxLabelsLength (number; optional)

        - maxNesting (number; optional)

        - maxNumberOfCases (dict; optional)

            `maxNumberOfCases` is a dict with keys:


        - maxNumberOfRules (dict; optional)

            `maxNumberOfRules` is a dict with keys:


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

        - renderAfterActions (boolean | number | string | dict | list; optional)

        - renderAfterWidget (boolean | number | string | dict | list; optional)

        - renderBeforeActions (boolean | number | string | dict | list; optional)

        - renderBeforeWidget (boolean | number | string | dict | list; optional)

        - renderButton (boolean | number | string | dict | list; optional)

        - renderButtonGroup (boolean | number | string | dict | list; optional)

        - renderConfirm (boolean | number | string | dict | list; optional)

        - renderConjs (boolean | number | string | dict | list; optional)

        - renderField (boolean | number | string | dict | list; optional)

        - renderFieldSources (boolean | number | string | dict | list; optional)

        - renderFunc (boolean | number | string | dict | list; optional)

        - renderIcon (boolean | number | string | dict | list; optional)

        - renderItem (boolean | number | string | dict | list; optional)

        - renderOperator (boolean | number | string | dict | list; optional)

        - renderProvider (boolean | number | string | dict | list; optional)

        - renderRuleError (boolean | number | string | dict | list; optional)

        - renderSize (a value equal to: 'small', 'large', 'medium'; optional)

        - renderSwitch (boolean | number | string | dict | list; optional)

        - renderSwitchPrefix (boolean | number | string | dict | list; optional)

        - renderValueSources (boolean | number | string | dict | list; optional)

        - setOpOnChangeField (list; required)

        - shouldCreateEmptyGroup (boolean; optional)

        - showErrorMessage (boolean; optional)

        - showLabels (boolean; optional)

        - showLock (boolean; optional)

        - showNot (boolean; optional)

        - spelFormatReverse (boolean | number | string | dict | list; optional)

        - sqlFormatReverse (boolean | number | string | dict | list; optional)

        - theme (dict; optional)

            `theme` is a dict with keys:

            - material (dict; optional)

                `material` is a dict with keys:


            - mui (dict; optional)

                `mui` is a dict with keys:


        - useConfigCompress (boolean; optional)

        - useConfirm (boolean | number | string | dict | list; optional)

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

        `types` is a dict with keys:


    - widgets (dict; required)

        `widgets` is a dict with keys:


- elasticSearchFormat (dict; optional)

    `elasticSearchFormat` is a dict with keys:


- fields (dict; required)

    `fields` is a dict with keys:


- jsonLogicFormat (dict; optional)

    `jsonLogicFormat` is a dict with keys:


- loadFormat (a value equal to: 'jsonLogicFormat', 'spelFormat', 'tree'; default 'tree')

- mongoDBFormat (dict; optional)

    `mongoDBFormat` is a dict with keys:


- queryBuilderFormat (dict; optional)

    `queryBuilderFormat` is a dict with keys:


- queryString (string; optional)

- spelFormat (string; optional)

- sqlFormat (string; optional):
    The WHERE clause in SQL.

- theme (a value equal to: 'mui', 'antd', 'fluent', 'bootstrap', 'basic'; default 'basic')

- tree (boolean | number | string | dict | list; default emptyTree):
    The JSON representation of the tree."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_query_builder'
    _type = 'DashQueryBuilder'
    @_explicitize_args
    def __init__(self, fields=Component.REQUIRED, config=Component.UNDEFINED, loadFormat=Component.UNDEFINED, alwaysShowActionButtons=Component.UNDEFINED, theme=Component.UNDEFINED, tree=Component.UNDEFINED, sqlFormat=Component.UNDEFINED, jsonLogicFormat=Component.UNDEFINED, queryBuilderFormat=Component.UNDEFINED, mongoDBFormat=Component.UNDEFINED, queryString=Component.UNDEFINED, elasticSearchFormat=Component.UNDEFINED, spelFormat=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
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
