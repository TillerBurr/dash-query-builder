import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {throttle} from 'lodash';
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
let InitialConfig;
// import 'react-awesome-query-builder/lib/css/compact_styles.css';
// const InitialConfig = MaterialConfig;
// const InitialConfig = AntdConfig;

const queryValue = {id: QbUtils.uuid(), type: 'group'};
const themeSelect = (theme) => {
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
        const fields = props.fields; //JSON.parse(props.fields);
        const config = {
            ...InitialConfig,
            fields,
        };
        this.setProps = props.setProps;
        this.state = this.getCurrentStateFromTree(
            // QbUtils.checkTree(QbUtils.loadTree(queryValue))
            QbUtils.loadTree(queryValue),
            config
        );
    }
    getCurrentStateFromTree = (tree, config) => {
        console.log(tree);
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
        let currentState = throttle(
            this.getCurrentStateFromTree(immutableTree, config),
            100
        );
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

function lazyFunction(f) {
    return function () {
        return f.apply(this, arguments);
    };
}
let lazySubfield = lazyFunction(function () {
    return fieldPropType;
});

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
        subfields: PropTypes.any, //lazySubfield, //fields type
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

    tree: PropTypes.any,
    fields: fieldPropType.isRequired,
    theme: PropTypes.oneOf(['material', 'antd', 'basic']),
    sqlFormat: PropTypes.string,
    queryStringFormat: PropTypes.string,
    mongodbFormat: PropTypes.string,
    jsonLogicFormat: PropTypes.string,
};
