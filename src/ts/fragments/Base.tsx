import {useState, useRef, useCallback, useEffect} from 'react';
import React from 'react';
import {FormatProps} from '../props';
import {
    Utils as QbUtils,
    Query,
    Builder,
    JsonTree,
    Config,
    ImmutableTree,
    BuilderProps,
} from '@react-awesome-query-builder/ui';
import {mergeAll} from 'ramda';
import {StyledProps} from './types';

const {loadTree, checkTree, getTree} = QbUtils;
import {emptyTree, emptyImmutableTree, loadNewTree} from './utils';

/**
 * Component description
 */
const BaseBuilder = (props: StyledProps) => {
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
        styleConfig,
    } = props;
    const previousTree: React.MutableRefObject<JsonTree> = useRef(null);

    const isFirstRun = useRef(true);
    let initialConfig: Config = {
        settings: undefined,
        operators: undefined,
        widgets: undefined,
        conjunctions: undefined,
        types: undefined,
        fields: undefined,
        ctx: {
            utils: undefined,
            W: undefined,
            O: undefined,
            components: undefined,
        },
    };

    for (const [styleKey, styleCfgObj] of Object.entries(styleConfig)) {
        if (config && config[styleKey] !== undefined) {
            const cfgObj = config[styleKey];
            initialConfig[styleKey] = mergeAll([styleCfgObj, cfgObj]);
        } else {
            initialConfig[styleKey] = styleCfgObj;
        }
        if (config) {
            delete config[styleKey];
        }
    }
    initialConfig = mergeAll([initialConfig, config]);

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
                queryBuilderFormat: QbUtils.queryBuilderFormat(
                    newImmutableTree,
                    state.config
                ),
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
        // if (isFirstRun.current) {
        //     return;
        // }
        if (loadFormat === 'spelFormat' && spelFormat !== undefined) {
            let newTree = loadNewTree('spelFormat', spelFormat, state.config);
            setState((prevState) => ({
                ...prevState,
                immutableTree: newTree,
            }));
            setProps({tree: getTree(newTree)});
        }
    }, [spelFormat]);

    useEffect(() => {
        // if (isFirstRun.current) {
        //     return;
        // }
        if (loadFormat === 'jsonLogicFormat' && jsonLogicFormat !== undefined) {
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

export default BaseBuilder;
