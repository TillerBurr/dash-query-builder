import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Builder, Utils } from 'react-awesome-query-builder';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
const {
    loadTree,
    checkTree,
    queryString,
    queryBuilderFormat,
    mongodbFormat,
    sqlFormat,
    jsonLogicFormat,
} = Utils;



/** DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).
 *
 * It takes a `fields` property to generate the options for building the actual query.
 * The optional property `tree` is used to define the current state of the tree. It can be used to
 * define the starting state of the query builder.
 * The optional property `theme` is one of `material`, `antd`, `bootstrap` or `basic`. This is the styling of the component.
 * These are the only themes supported by `react-awesome-query-builder`.
 */
export default class BaseQueryBuilder extends Component {
    constructor(props) {
        super(props);


        const fields = props.fields;
        const config = {
            ...props.config,
            fields,
        };
        this.setProps = props.setProps;
        let initTree = checkTree(loadTree(props.tree), config);
        this.state = this.getCurrentStateFromTree(initTree, config);
    }

    /**
     *
     * Update the state if tree has changed. This allows Dash to update the `tree` prop and have it set
     * the layout properly
     */
    componentDidUpdate(prevProps) {
        if (prevProps.tree !== this.props.tree) {
            //what happens if this.props.tree is null?
            let currentState = this.getCurrentStateFromTree(
                loadTree(this.props.tree),
                this.state.config
            );
            this.setState(currentState);
        }
    }
    /**
     *
     *  Takes a tree and config and updates the various Formats used.
     */
    getCurrentStateFromTree = (tree, config) => {
        let currentState = {
            tree: checkTree(tree, config),
            config: config,
            queryStringFormat: queryString(tree, config),
            queryBuilderFormat: JSON.stringify(
                queryBuilderFormat(tree, config)
            ),
            mongodbFormat: JSON.stringify(mongodbFormat(tree, config)),
            sqlFormat: sqlFormat(tree, config),
            jsonLogicFormat: JSON.stringify(jsonLogicFormat(tree, config)),
        };
        return currentState;
    };
    onChange = (immutableTree, config) => {
        // Can we use Throttle (from lodash)?
        let currentState = this.getCurrentStateFromTree(immutableTree, config);

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
        <div className="query-builder-container" style={{ padding: '10px' }}>
            <div className="query-builder qb-lite">
                <Builder {...props} />
            </div>
        </div>
    );
}

const configPropTypes = {
    ...themelessPropTypes,
    config: PropTypes.any
}


BaseQueryBuilder.propTypes = configPropTypes
BaseQueryBuilder.defaultProps = defaultProps
