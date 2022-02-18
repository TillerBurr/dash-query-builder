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
    elasticSearchFormat,
    spelFormat,
    getTree
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
        let initialImmutableTree = checkTree(loadTree(props.tree), config);
        let currentState = this.getCurrentStateFromTree(initialImmutableTree, config);

        this.state = { ...currentState, immutableTree: initialImmutableTree, alwaysShowActionButtons: props.alwaysShowActionButtons };

    }

    /**
     *
     * Update the state if tree has changed. This allows Dash to update the `tree` prop and have it set
     * the layout properly
     */
    componentDidUpdate(prevProps) {
        if (prevProps.tree !== this.props.tree) {
            //what happens if this.props.tree is null?
            let immutableTree = loadTree(this.props.tree)
            let currentState = this.getCurrentStateFromTree(
                immutableTree,
                this.state.config
            );
            this.setState({ ...currentState, immutableTree: immutableTree, alwaysShowActionButtons: this.props.alwaysShowActionButtons });
        }

    }
    /**
     *
     *  Takes a tree and config and updates the various Formats used.
     */
    getCurrentStateFromTree = (immutableTree, config) => {
        let currentTree = getTree(immutableTree);

        let currentState = {
            tree: currentTree,
            config: config,
            queryStringFormat: queryString(immutableTree, config),
            queryBuilderFormat: queryBuilderFormat(immutableTree, config),
            mongodbFormat: mongodbFormat(immutableTree, config),
            sqlFormat: sqlFormat(immutableTree, config),
            jsonLogicFormat: jsonLogicFormat(immutableTree, config),
            elasticSearchFormat: elasticSearchFormat(immutableTree, config),
            spelFormat: spelFormat(immutableTree, config),
        };
        return currentState;
    };
    onChange = (immutableTree, config) => {
        // Can we use Throttle (from lodash)?
        let currentState = this.getCurrentStateFromTree(immutableTree, config);

        this.setState({ ...currentState, immutableTree: immutableTree });
        this.setProps(currentState);
    };

    render = () => {
        return (
            <div>
                <Query
                    {...this.state.config}
                    value={this.state.immutableTree}
                    onChange={this.onChange}
                    renderBuilder={(props) => (this.renderBuilder(props, this.state.alwaysShowActionButtons))}
                />
            </div>
        );
    };

    renderBuilder = (props, alwaysShowActionButtons) => {
        return (<div className="query-builder-container" style={{ padding: '10px' }}>
            <div className={alwaysShowActionButtons ? 'query-builder' : 'query-builder qb-lite'}>
                <Builder {...props} />
            </div>
        </div>)
    }
}

const configPropTypes = {
    ...themelessPropTypes,
    config: PropTypes.any
}


BaseQueryBuilder.propTypes = configPropTypes
BaseQueryBuilder.defaultProps = defaultProps
