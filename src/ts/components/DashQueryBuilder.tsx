import {useState, useRef, useCallback, useEffect} from 'react';
import React from 'react';
import {FormatProps, loadFormatType, Props} from '../props';
import {
    Utils as QbUtils,
    Query,
    Builder,
    BasicConfig,
    JsonTree,
    Config,
    ImmutableTree,
    BuilderProps,
} from '@react-awesome-query-builder/ui';
import '@react-awesome-query-builder/ui/css/styles.css';
import * as R from 'ramda';
const {mergeAll, isEmpty} = R;

const {loadTree, _loadFromJsonLogic, loadFromSpel, checkTree, getTree} =
    QbUtils;

const emptyTree: JsonTree = {id: QbUtils.uuid(), type: 'group', children1: []};
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
    console.log('loadNewTree', load_format, loadItem);
    switch (load_format) {
        case 'spelFormat':
            if (typeof loadItem !== 'string') {
                return loadTree(emptyTree);
            } else {
                [tree, error] = loadFromSpel(loadItem, config);
            }

            if (error.length > 0) {
                console.log('There were errors loading the tree:', error);
                throw new Error('There were errors loading the tree: ' + error);
            }
            return tree;
        case 'jsonLogicFormat':
            if (typeof loadItem !== 'object') {
                throw new Error('JsonLogic format requires object input');
            } else if (isEmpty(loadItem)) {
                console.log('empty tree');
                return loadTree(emptyTree);
            } else {
                [tree, error] = _loadFromJsonLogic(loadItem, config);
                console.log('tree', tree);
                console.log('error', error);
                return tree;
            }

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
    const {
        id,
        tree,
        loadFormat,
        fields,
        config,
        setProps,
        spelFormat,
        jsonLogicFormat,
        alwaysShowActionButtons,
    } = props;

    const previousTree: React.MutableRefObject<JsonTree> = useRef(null);

    const isFirstRun = useRef(true);
    const initialConfig: Config = mergeAll([BasicConfig, config]);
    const completeConfig = {...initialConfig, fields: fields};
    const initialLoadItem = props[loadFormat] || emptyTree;
    const initialImmutableTree = loadNewTree(
        loadFormat,
        initialLoadItem,
        completeConfig
    );
    const [state, setState] = useState({
        immutableTree: initialImmutableTree,
        config: completeConfig,
    });
    useEffect(() => {
        if (previousTree.current !== tree) {
            let newImmutableTree = loadTree(tree);
            let newProps: FormatProps = {
                sqlFormat: QbUtils.sqlFormat(newImmutableTree, state.config),
                tree: tree,
                jsonLogicFormat: QbUtils.jsonLogicFormat(
                    newImmutableTree,
                    state.config
                ).logic,
                mongoDBFormat: QbUtils.mongodbFormat(
                    newImmutableTree,
                    state.config
                ),
                queryString: QbUtils.queryString(
                    newImmutableTree,
                    state.config
                ),
                elasticSearchFormat: QbUtils.elasticSearchFormat(
                    newImmutableTree,
                    state.config
                ),
                spelFormat: QbUtils.spelFormat(newImmutableTree, state.config),
            };
            setState((prevState) => ({
                ...prevState,
                immutableTree: newImmutableTree,
            }));
            setProps({...newProps});
            previousTree.current = tree;
        }
    }, [tree]);

    useEffect(() => {
        if (isFirstRun.current) {
            return;
        }
        if (loadFormat === 'spelFormat' && spelFormat !== undefined) {
            console.log('spelFormat', spelFormat);
            let newTree = loadNewTree('spelFormat', spelFormat, state.config);
            setState((prevState) => ({
                ...prevState,
                immutableTree: newTree,
            }));
            setProps({tree: getTree(newTree)});
        }
    }, [spelFormat]);

    useEffect(() => {
        if (isFirstRun.current) {
            return;
        }
        if (loadFormat === 'jsonLogicFormat' && jsonLogicFormat !== undefined) {
            console.log('jsonLogicFormat', jsonLogicFormat);
            let newTree = loadNewTree(
                'jsonLogicFormat',
                jsonLogicFormat,
                state.config
            );
            setState((prevState) => ({
                ...prevState,
                immutableTree: newTree,
            }));
            setProps({tree: getTree(newTree)});
        }
    }, [jsonLogicFormat]);

    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        setProps({
            tree: emptyTree,
        });
        const newConfig = {...state.config, fields: fields};
        setState((prevState) => ({
            ...prevState,
            immutableTree: emptyImmutableTree,
            config: newConfig,
        }));
    }, [fields]);

    const onChange = useCallback(
        (immutableTree: ImmutableTree, config: Config) => {
            console.log('onChange');
            // Tip: for better performance you can apply `throttle` - see `examples/demo`
            setState((prevState) => ({
                ...prevState,
                immutableTree: immutableTree,
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
                <div
                    className={
                        'query-builder ' +
                        (!alwaysShowActionButtons ? 'qb-lite' : '')
                    }
                >
                    <Builder {...props} />
                </div>
            </div>
        ),
        [alwaysShowActionButtons]
    );

    return (
        <div id={id}>
            <Query
                {...state.config}
                value={state.immutableTree}
                onChange={onChange}
                renderBuilder={renderBuilder}
            />
        </div>
    );
};

DashQueryBuilder.defaultProps = {
    tree: emptyTree,
    theme: 'basic',
    loadFormat: 'tree',
    alwaysShowActionButtons: true,
};

export default DashQueryBuilder;
