import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    BasicConfig,
    Query,
    Builder,
    Utils as QbUtils,
} from 'react-awesome-query-builder';
import MaterialConfig from 'react-awesome-query-builder/lib/config/material';
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';
import 'react-awesome-query-builder/lib/css/styles.css';
import 'antd/dist/antd.css';
import {requirePropFactory} from '@material-ui/core';

/**DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).
 *
 * It takes a `fields` property to generate the options for building the actual query.
 * The optional property `tree` is used to define the current state of the tree. It can be used to
 * define the starting state of the query builder.
 * The optional property `theme` is one of `material`, `antd` or `basic`. This is the styling of the component.
 * These are the only themes supported by `react-awesome-query-builder`

 */

let InitialConfig;

const queryValue = {id: QbUtils.uuid(), type: 'group'};
const themeSelect = (theme) => {
    let InitialConfig;
    // switch (theme) {
    //     case null:
    //     case 'basic':
    //         InitialConfig =
    //             require('react-awesome-query-builder/modules/config/basic').default();
    //         break;
    //     case 'material':
    //         InitialConfig =
    //             require('react-awesome-query-builder/modules/config/material').default();
    //         break;
    //     case 'antd':
    //         InitialConfig =
    //             require('react-awesome-query-builder/modules/config/antd').default();
    //         require('antd/dist/antd.css');
    //         break;
    // }
    if (theme === 'antd') {
        InitialConfig = AntdConfig;
    } else if (theme === 'material') {
        InitialConfig = MaterialConfig;
    } else {
        InitialConfig = BasicConfig;
    }

    return InitialConfig;
};
export default class DashQueryBuilder extends Component {
    constructor(props) {
        super(props);
        let InitialConfig = themeSelect(props.theme);
        let initTree = QbUtils.loadTree(props.tree);
        const fields = props.fields; //JSON.parse(props.fields);
        const config = {
            ...InitialConfig,
            fields,
        };
        this.setProps = props.setProps;

        this.state = this.getCurrentStateFromTree(initTree, config);
    }
    getCurrentStateFromTree = (tree, config) => {
        let currentState = {
            tree: QbUtils.checkTree(tree, config),
            config: config,
            queryStringFormat: JSON.stringify(
                QbUtils.queryString(tree, config, true)
            ),
            mongodbFormat: JSON.stringify(QbUtils.mongodbFormat(tree, config)),
            sqlFormat: JSON.stringify(QbUtils.sqlFormat(tree, config)),
            jsonLogicFormat: JSON.stringify(
                QbUtils.jsonLogicFormat(tree, config)
            ),
        };
        return currentState;
    };
    onChange = (immutableTree, config) => {
        // Tip: for better performance you can apply `throttle` - see `examples/demo`
        let currentState = this.getCurrentStateFromTree(immutableTree, config);
        // throttle(

        //     100
        // );
        this.setState(currentState);
        this.setProps(currentState);
    };

    render = () => {
        return (
            <div>
                <Query
                    {...this.state.config}
                    value={this.state.tree}
                    onChange={this.onChange}
                    renderBuilder={this.renderBuilder}
                />
            </div>
        );
    };

    renderBuilder = (props) => (
        <div className="query-builder-container" style={{padding: '10px'}}>
            <div className="query-builder qb-lite">
                <Builder {...props} />
            </div>
        </div>
    );
}

DashQueryBuilder.defaultProps = {
    tree: QbUtils.loadTree(queryValue),
    theme: 'basic',
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
         * Dash
         */
        subfields: PropTypes.any, //fields type
        label: PropTypes.string.isRequired,
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

DashQueryBuilder.propTypes = {
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
    /** The fields that are used to populate the options for the query builder.This can be a very complicated object.
     *  See https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields for more info. */
    fields: fieldPropType.isRequired,
    /** Sets the theme of the query builder. */
    theme: PropTypes.oneOf(['material', 'antd', 'basic']),
    /** The SQL Formatted string defined by the current state of the tree */
    sqlFormat: PropTypes.string,
    /** The Query String Formatted string defined by the current state of the tree */
    queryStringFormat: PropTypes.string,
    /** The MongoDB Formatted string defined by the current state of the tree */
    mongodbFormat: PropTypes.string,
    /** The JSON Logic Formatted string defined by the current state of the tree */
    jsonLogicFormat: PropTypes.string,
};
