import {loadFormatType} from '../props';
import {
    Utils as QbUtils,
    JsonTree,
    Config,
    ImmutableTree,
} from '@react-awesome-query-builder/ui';
import '@react-awesome-query-builder/ui/css/styles.css';
import {isEmpty} from 'ramda';
const {loadTree, _loadFromJsonLogic, loadFromSpel, checkTree} = QbUtils;

export const emptyTree: JsonTree = {
    id: QbUtils.uuid(),
    type: 'group',
    children1: [],
};
export const emptyImmutableTree: ImmutableTree = loadTree(emptyTree);
function isJsonTree(tree: any): tree is JsonTree {
    return tree.type === 'group' || tree.type === 'switch_group';
}
export const loadNewTree = (
    load_format: loadFormatType,
    loadItem: string | Object,
    config: Config
): ImmutableTree => {
    let error: string[], tree: ImmutableTree;
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
                return loadTree(emptyTree);
            } else {
                [tree, error] = _loadFromJsonLogic(loadItem, config);
                return tree;
            }

        case 'tree':
            if (!isJsonTree(loadItem)) {
                throw new Error('Tree Format requires JsonTree input');
            }

            return checkTree(loadTree(loadItem), config);
    }
};
