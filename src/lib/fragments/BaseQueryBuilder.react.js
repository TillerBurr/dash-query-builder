import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query, Builder, Utils } from 'react-awesome-query-builder';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
const {
    loadTree,
    loadFromJsonLogic,
    loadFromSpel,
    checkTree,
    queryString,
    queryBuilderFormat,
    mongodbFormat,
    sqlFormat,
    jsonLogicFormat,
    elasticSearchFormat,
    spelFormat,
    getTree,
    uuid
} = Utils;
const emptyTree = { id: uuid(), type: 'group' };

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

        this.state = { config: config, immutableTree: initialImmutableTree, alwaysShowActionButtons: props.alwaysShowActionButtons };
    }

    loadModifiedTree(modifiedProp, modifiedValue, config = this.state.config) {
        switch (modifiedProp) {

            case 'jsonLogicFormat':
                if (modifiedValue === undefined || modifiedValue === null) {
                    return loadTree(emptyTree, this.state.config)
                }

                let jsonLogicTree = loadFromJsonLogic(modifiedValue, config);
                return jsonLogicTree;

            case 'spelFormat':
                if (modifiedValue === '' || modifiedValue === undefined || modifiedValue === null) {
                    return loadTree(emptyTree, this.state.config)
                }
                else {
                    let treeAndErrors = loadFromSpel(modifiedValue, this.state.config);
                    let tree = treeAndErrors[0];
                    if (treeAndErrors[1].length > 0) {
                        console.log('There are Errors in the SPEL String', treeAndErrors[1]);
                    }
                    if (tree === undefined) {
                        tree = loadTree(emptyTree, this.state.config);
                    }
                    return tree
                }

            case 'tree':
            default:
                return loadTree(modifiedValue);
        }

    }

    /**
     *
     * Update the state if tree has changed. This allows Dash to update the `tree` prop and have it set
     * the layout properly. Only run once and only if one of the props has changed.
     */
    componentDidUpdate(prevProps) {
        let modified = false
        let modifiedProp
        let modifiedValue
        if (prevProps.tree !== this.props.tree &&
            prevProps.spelFormat === this.props.spelFormat &&
            prevProps.jsonLogicFormat === this.props.jsonLogicFormat) {
            //what happens if this.props.tree is null?
            modified = true;
            modifiedProp = 'tree';
            modifiedValue = this.props.tree;

        }
        else if (prevProps.tree === this.props.tree &&
            prevProps.spelFormat !== this.props.spelFormat &&
            prevProps.jsonLogicFormat === this.props.jsonLogicFormat) {
            modified = true;
            modifiedProp = 'spelFormat';
            modifiedValue = this.props.spelFormat;

        }
        else
            if (prevProps.tree === this.props.tree &&
                prevProps.spelFormat === this.props.spelFormat &&
                prevProps.jsonLogicFormat !== this.props.jsonLogicFormat) {
                modified = true;
                modifiedProp = 'jsonLogicFormat';
                modifiedValue = this.props.jsonLogicFormat.logic;
            }
        if (modified) {
            let immutableTree = this.loadModifiedTree(modifiedProp, modifiedValue);

            // console.log(getTree(immutableTree));
            let currentState = this.getCurrentStateFromTree(
                immutableTree,
                this.state.config
            );
            this.setState({ immutableTree: immutableTree });
            this.setProps(currentState)
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
        this.setState({ immutableTree: immutableTree, config: config });
        this.setProps(currentState);
    };

    render = () => {
        return (
            <div>
                <Query
                    {...this.state.config}
                    value={this.state.immutableTree}
                    onChange={this.onChange}
                    renderBuilder={this.renderBuilder}
                />
            </div>
        );
    };

    renderBuilder = (props) => {
        return (<div className="query-builder-container" style={{ padding: '10px' }}>
            <div className={this.state.alwaysShowActionButtons ? 'query-builder' : 'query-builder qb-lite'}>
                <Builder {...props} />
            </div>
        </div>)
    }
}

BaseQueryBuilder.propTypes = themelessPropTypes
BaseQueryBuilder.defaultProps = defaultProps
