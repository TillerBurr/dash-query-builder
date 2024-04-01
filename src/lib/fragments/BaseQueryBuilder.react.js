import React, {Component} from 'react';
import {Utils, Query, Builder} from '@react-awesome-query-builder/ui';
const {
    loadTree,
    _loadFromJsonLogic,
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
    uuid,
} = Utils;
const emptyTree = {id: uuid(), type: 'group'};

const emptyImmutableTree = loadTree(emptyTree);
/** DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).
 *
 * It takes a `fields` property to generate the options for building the actual query.
 * The optional property `tree` is used to define the current state of the tree. It can be used to
 * define the starting state of the query builder.
 * The optional property `theme` is one of 'mui', `material`, `antd`, `bootstrap` or `basic`. This is the styling of the component.
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
        let loadFormat =
            props.loadFormat === null || props.loadFormat === undefined
                ? 'tree'
                : props.loadFormat;
        if (props.loadFormat === null || props.loadFormat === undefined) {
            this.setProps({loadFormat: 'tree'});
        }
        let initialLoadItem = this.getLoadItem(loadFormat, props);
        let initialImmutableTree = checkTree(
            this.loadModifiedTree(props.loadFormat, initialLoadItem, config),
            config
        );

        this.state = {
            config: config,
            immutableTree: initialImmutableTree,
            alwaysShowActionButtons: props.alwaysShowActionButtons,
            loadFormat: props.loadFormat,
        };
    }
    getLoadItem(loadFormat, props) {
        switch (loadFormat) {
            case 'jsonLogicFormat':
                return props.jsonLogicFormat;
            case 'spelFormat':
                return props.spelFormat;
            default:
            case 'tree':
                return props.tree;
        }
    }
    loadModifiedTree(modifiedProp, modifiedValue, config = this.state.config) {
        switch (modifiedProp) {
            case 'jsonLogicFormat':
                if (modifiedValue === undefined || modifiedValue === null) {
                    return emptyImmutableTree;
                }

                let treeAndErrors = _loadFromJsonLogic(modifiedValue, config);
                let tree = treeAndErrors[0];
                if (treeAndErrors[1].length > 0) {
                    console.log(
                        'There were errors loading the tree:',
                        treeAndErrors[1]
                    );
                    throw new Error(
                        'There were errors loading the tree: ' +
                            treeAndErrors[1]
                    );
                }
                return tree;

            case 'spelFormat':
                if (
                    modifiedValue === '' ||
                    modifiedValue === undefined ||
                    modifiedValue === null
                ) {
                    return loadTree(emptyTree);
                } else {
                    let treeAndErrors = loadFromSpel(modifiedValue, config);
                    let tree = treeAndErrors[0];
                    if (treeAndErrors[1].length > 0) {
                        console.log(
                            'There are Errors in the SPEL String',
                            treeAndErrors[1]
                        );
                        throw new Error(
                            'There were errors loading the tree: ' +
                                treeAndErrors[1]
                        );
                    }
                    if (tree === undefined) {
                        tree = emptyImmutableTree;
                    }
                    return tree;
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
        let modified = false;
        let modifiedProp;
        let modifiedValue;
        if (
            prevProps.tree !== this.props.tree &&
            this.props.loadFormat === 'tree'
        ) {
            //what happens if this.props.tree is null?
            modified = true;
            modifiedProp = 'tree';
            modifiedValue = this.props.tree;
        } else if (
            this.props.loadFormat === 'spelFormat' &&
            prevProps.spelFormat !== this.props.spelFormat
        ) {
            modified = true;
            modifiedProp = 'spelFormat';
            modifiedValue = this.props.spelFormat;
        } else if (
            this.props.loadFormat === 'jsonLogicFormat' &&
            prevProps.jsonLogicFormat !== this.props.jsonLogicFormat
        ) {
            modified = true;
            modifiedProp = 'jsonLogicFormat';
            modifiedValue = this.props.jsonLogicFormat.logic;
        }
        if (modified) {
            let immutableTree = this.loadModifiedTree(
                modifiedProp,
                modifiedValue
            );
            let currentState = this.getCurrentStateFromTree(
                immutableTree,
                this.state.config
            );
            this.setState({immutableTree: immutableTree});
            this.setProps(currentState);
        }
        if (prevProps.loadFormat !== this.props.loadFormat) {
            this.setProps({loadFormat: this.props.loadFormat});
            this.setState({loadFormat: this.props.loadFormat});
        }
        if (
            prevProps.alwaysShowActionButtons !==
            this.props.alwaysShowActionButtons
        ) {
            this.setProps({
                alwaysShowActionButtons: this.props.alwaysShowActionButtons,
            });
            this.setState({
                alwaysShowActionButtons: this.props.alwaysShowActionButtons,
            });
        }

        // Check for changes in the fields prop
        if (
            prevProps.fields !== this.props.fields &&
            this.props.fields !== this.props.currentState.fields
        ) {
            // Create a new config object with updated fields
            console.log('prevProps', prevProps);
            console.log('this.props', this.props);
            const updatedConfig = {
                ...this.state.config,
                fields: this.props.fields,
            };

            // Update the component's state with the new config and reset tree
            let currentState = this.getCurrentStateFromTree(
                emptyImmutableTree,
                updatedConfig
            );
            // this.setState({config: updatedConfig});
            this.setProps({currentState});
            this.setState({
                immutableTree: emptyImmutableTree,
                // config: updatedConfig,
            });
        }
    }
    /**
     *
     *  Takes a tree and config and updates the various Formats used.
     */
    getCurrentStateFromTree = (immutableTree, config) => {
        let currentTree;

        try {
            currentTree = getTree(immutableTree, true, false);
        } catch (e) {
            try {
                currentTree = getTree(immutableTree);
            } catch (e) {
                throw e;
            }
        }
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
            loadFormat: this.state.loadFormat,
        };
        return currentState;
    };
    onChange = (immutableTree, config) => {
        // Can we use Throttle (from lodash)?
        let currentState = this.getCurrentStateFromTree(immutableTree, config);
        this.setState({immutableTree: immutableTree, config: config});
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
        return (
            <div className="query-builder-container" style={{padding: '10px'}}>
                <div
                    className={
                        this.state.alwaysShowActionButtons
                            ? 'query-builder'
                            : 'query-builder qb-lite'
                    }
                >
                    <Builder {...props} />
                </div>
            </div>
        );
    };
}
