import {useState, useCallback, useEffect} from 'react';
import React from 'react';
import {loadFormatType, Props} from '../props';
import {
    Utils as QbUtils,
    Query,
    Builder,
    BasicConfig,
    JsonTree,
    JsonGroup,
    Config,
    ImmutableTree,
    BuilderProps,
    JsonLogicTree,
} from '@react-awesome-query-builder/ui';
import '@react-awesome-query-builder/ui/css/styles.css';
import * as R from 'ramda';
const {mergeAll} = R;

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
} = QbUtils;

const emptyTree: JsonTree = {id: QbUtils.uuid(), type: 'group'};
const emptyImmutableTree: ImmutableTree = loadTree(emptyTree);
function isJsonTree(tree: any): tree is JsonTree {
    return tree.type === 'group' || tree.type === 'switch_group';
}
const loadNewTree = (
    load_format: loadFormatType,
    loadItem: string | Object,
    config: Config
): ImmutableTree => {
    let error: string[], tree: ImmutableTree;
    switch (load_format) {
        case 'spelFormat':
            if (typeof loadItem !== 'string') {
                throw new Error('Spel format requires string input');
            }
            [tree, error] = loadFromSpel(loadItem, config);
            if (error.length > 0) {
                console.log('There were errors loading the tree:', error);
                throw new Error('There were errors loading the tree: ' + error);
            }
        case 'jsonLogicFormat':
            if (typeof loadItem !== 'object') {
                throw new Error('JsonLogic format requires object input');
            }
            [tree, error] = _loadFromJsonLogic(loadItem, config);
            if (error.length > 0) {
                console.log('There were errors loading the tree:', error);
                throw new Error('There were errors loading the tree: ' + error);
            }
            return tree;

        case 'tree':
            if (!isJsonTree(loadItem)) {
                throw new Error('Tree Format requires JsonTree input');
            }

            return checkTree(loadTree(loadItem), config);
    }
};
/**
 * Component description
 */
const DashQueryBuilder = (props: Props) => {
    const {id, tree, load_format, fields, config, setProps} = props;
    let initialConfig: Config = mergeAll([BasicConfig, config]);
    console.log(config);
    let completeConfig = {...initialConfig, ...fields};

    const loadItem = props[load_format] || emptyTree;

    const initialImmutableTree = loadNewTree(
        load_format,
        loadItem,
        completeConfig
    );
    const [state, setState] = useState({
        tree: initialImmutableTree,
        config: completeConfig,
        // fields: fields,
    });
    useEffect(() => {
        setProps({
            sqlFormat: QbUtils.sqlFormat(state.tree, state.config),
            tree: getTree(state.tree),
            jsonLogicFormat: QbUtils.jsonLogicFormat(state.tree, state.config),
            mongodbFormat: QbUtils.mongodbFormat(state.tree, state.config),
            queryString: QbUtils.queryString(state.tree, state.config),
            elasticSearchFormat: QbUtils.elasticSearchFormat(
                state.tree,
                state.config
            ),
            spelFormat: QbUtils.spelFormat(state.tree, state.config),
        }),
            [tree];
    });

    useEffect(() => {
        setProps({
            tree: emptyTree,
        });
        const newConfig = {...state.config, fields: fields};
        setState((prevState) => ({
            ...prevState,
            tree: emptyImmutableTree,
            config: newConfig,
        }));
        //todo: fix
    }, [fields]);

    const onChange = useCallback(
        (immutableTree: ImmutableTree, config: Config) => {
            // Tip: for better performance you can apply `throttle` - see `examples/demo`
            setState((prevState) => ({
                ...prevState,
                tree: immutableTree,
                config: config,
            }));
            const jsonTree = getTree(checkTree(immutableTree, config));
            setProps({tree: jsonTree});
        },
        []
    );

    const renderBuilder = useCallback(
        (props: BuilderProps) => (
            <div className="query-builder-container" style={{padding: '10px'}}>
                <div className="query-builder qb-lite">
                    <Builder {...props} />
                </div>
            </div>
        ),
        []
    );

    return (
        <div id={id}>
            <Query
                {...completeConfig}
                value={state.tree}
                onChange={onChange}
                renderBuilder={renderBuilder}
            />
            <div className="query-builder-result">
                <div>
                    Query string:{' '}
                    <pre>
                        {JSON.stringify(
                            QbUtils.queryString(state.tree, state.config)
                        )}
                    </pre>
                </div>
                <div>
                    MongoDb query:{' '}
                    <pre>
                        {JSON.stringify(
                            QbUtils.mongodbFormat(state.tree, state.config)
                        )}
                    </pre>
                </div>
                <div>
                    SQL where:{' '}
                    <pre>
                        {JSON.stringify(
                            QbUtils.sqlFormat(state.tree, state.config)
                        )}
                    </pre>
                </div>
                <div>
                    JsonLogic:{' '}
                    <pre>
                        {JSON.stringify(
                            QbUtils.jsonLogicFormat(state.tree, state.config)
                        )}
                    </pre>
                </div>
            </div>
        </div>
    );
};

DashQueryBuilder.defaultProps = {
    tree: emptyTree,
    theme: 'basic',
    load_format: 'tree',
    alwaysShowActionButtons: true,
};

export default DashQueryBuilder;
