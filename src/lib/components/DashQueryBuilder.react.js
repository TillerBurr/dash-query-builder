import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Utils } from 'react-awesome-query-builder';


// import 'antd/dist/antd.css';
import 'react-awesome-query-builder/lib/css/styles.css';
const {
    loadTree,
    uuid,
} = Utils;

const LazyMUIQueryBuilder = lazy(() => import(/* webpackChunkName: "mui" */ '../fragments/MUIQueryBuilder.react'));
const LazyMaterialQueryBuilder = lazy(() => import(/* webpackChunkName: "material" */ '../fragments/MaterialQueryBuilder.react'));
const LazyAntdQueryBuilder = lazy(() => import(/* webpackChunkName: "antd" */ '../fragments/AntdQueryBuilder.react'));
const LazyBootstrapQueryBuilder = lazy(() => import(/* webpackChunkName: "bootstrap" */ '../fragments/BootstrapQueryBuilder.react'));
const LazyBasicQueryBuilder = lazy(() => import(/* webpackChunkName: "basic" */ '../fragments/BasicQueryBuilder.react'));
const emptyTree = { id: uuid(), type: 'group' };

const QueryBuilderFactory = (props) => {
    switch (props.theme) {
        case "mui":
            return <LazyMUIQueryBuilder {...props} />
        case "material":
            return <LazyMaterialQueryBuilder {...props} />
        case "antd":
            return <LazyAntdQueryBuilder {...props} />
        case "bootstrap":
            return <LazyBootstrapQueryBuilder {...props} />
        case "basic":
        default:
            return <LazyBasicQueryBuilder {...props} />
    }

}
/** DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).
 *
 * It takes a `fields` property to generate the options for building the actual query.
 * The optional property `tree` is used to define the current state of the tree. It can be used to
 * define the starting state of the query builder.
 * The optional property `theme` is one of `material`, `mui`, `antd`, `bootstrap` or `basic`. This is the styling of the component.
 * These are the only themes supported by `react-awesome-query-builder`.
 */
export default class DashQueryBuilder extends Component {

    render() {
        return (
            <Suspense fallback={null}>
                <QueryBuilderFactory {...this.props} />
            </Suspense>
        )
    }

}

export const defaultProps = {
    tree: loadTree(emptyTree),
    theme: 'basic',
    initialTreeFormat: 'default',
    alwaysShowActionButtons: true,
};

const singleFieldType = PropTypes.oneOf([
    '!struct',
    '!group',
    'number',
    'slider',
    'rangeslider',
    'select',
    'boolean',
    'text',
    'date',
    'textarea',
    'time',
    'datetime',
    'multiselect',
]);

const fieldPropType = PropTypes.objectOf(
    PropTypes.shape({
        type: PropTypes.oneOfType([
            PropTypes.arrayOf(singleFieldType),
            singleFieldType,
        ]).isRequired,
        mode: PropTypes.oneOf(['some', 'array']),
        /**
         * Config for subfields of complex field (multiple nesting is supported)
         */
        subfields: PropTypes.any, //fields type
        label: PropTypes.string,
        label2: PropTypes.string,
        tooltip: PropTypes.string,
        valueSources: PropTypes.arrayOf(
            PropTypes.oneOf(['value', 'field', 'func'])
        ),
        operators: PropTypes.any,
        fieldSettings: PropTypes.shape({
            min: PropTypes.number,
            max: PropTypes.number,
            step: PropTypes.number,
            marks: PropTypes.objectOf(PropTypes.string),
            timeFormat: PropTypes.string,
            dateFormat: PropTypes.string,
            valueFormat: PropTypes.string,
            use12Hours: PropTypes.bool,
            useKeyboard: PropTypes.bool,
            maxLength: PropTypes.number,
            maxRows: PropTypes.number,
            listValues: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    value: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string,
                    ]),
                    parent: PropTypes.string,
                })
            ),
            validateValue: PropTypes.func,
            allowCustomValues: PropTypes.bool,
            treeExpandAll: PropTypes.bool,
            treeSelectOnlyLeafs: PropTypes.bool,
        }),
        defaultValue: PropTypes.any,
        preferWidgets: PropTypes.arrayOf(PropTypes.string),
        excludeOperators: PropTypes.arrayOf(PropTypes.string),
        funcs: PropTypes.any,
        hideForSelect: PropTypes.bool,
        hideForCompare: PropTypes.bool,
        conjunctions: PropTypes.arrayOf(PropTypes.oneOf(['AND', 'OR'])),
        showNot: PropTypes.bool,
    })
);

export const themelessPropTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    /** The tree that describes the state of the query builder. */
    tree: PropTypes.any,
    /** The fields that are used to populate the options for the query builder. This can be a very complicated object.
     *  See https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields for more info. */
    fields: fieldPropType.isRequired,

    /** The SQL Formatted string defined by the current state of the tree */
    sqlFormat: PropTypes.string,
    /** The Query String Formatted string defined by the current state of the tree */
    queryStringFormat: PropTypes.string,
    /** The Query Builder String Formatted string defined by the current state of the tree */
    queryBuilderStringFormat: PropTypes.string,
    /** The MongoDB Formatted string defined by the current state of the tree */
    mongodbFormat: PropTypes.object,
    /** The JSON Logic Formatted string defined by the current state of the tree */
    jsonLogicFormat: PropTypes.object,
    /** The JSON Logic Formatted defined by the current state of the tree */
    elasticSearchFormat: PropTypes.object,
    /** The JSON Logic Formatted string defined by the current state of the tree */
    spelFormat: PropTypes.string,
    /** Specifies the type of the initial tree.  */
    initialTreeFormat: PropTypes.oneOf(['jsonLogic', 'spel', 'default']),
    /** Always show the Action Buttons (Add Rule, Add Group, Delete, etc.). If false, show only on hover.*/
    alwaysShowActionButtons: PropTypes.bool,
    /** Customizable Config. Currently only usable for objects that do not involve functions. Cannot be used to modify conjunctions,
     * operators or widgets. Setting this is currently in alpha, it is very unstable.*/
    config: PropTypes.object
};
export const propTypes = {
    ...themelessPropTypes,
    /** Sets the theme of the query builder. */
    theme: PropTypes.oneOf(['material', "mui", 'antd', 'basic', 'bootstrap']),
}

DashQueryBuilder.propTypes = propTypes;
DashQueryBuilder.defaultProps = defaultProps;