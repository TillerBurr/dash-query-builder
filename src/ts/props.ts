import {
    Config,
    Fields,
    JsonTree,
    JsonLogicTree,
} from '@react-awesome-query-builder/ui';
/**
 * Every Dash components are given these props.
 * Use with your own props:
 * ```
 * type Props = {
 *     my_prop: string;
 * } & DashComponentProps;
 * ```
 * Recommended to use `type` instead of `interface` so you can define the
 * order of props with types concatenation.
 */
export type DashComponentProps = {
    /**
     * Unique ID to identify this component in Dash callbacks.
     */
    id?: string;
    /**
     * Update props to trigger callbacks.
     */
    setProps: (props: Record<string, any>) => void;
};
export type loadFormatType = 'jsonLogicFormat' | 'spelFormat' | 'tree';
export type themeType = 'mui' | 'antd' | 'fluent' | 'bootstrap' | 'basic';

export type FormatProps = {
    /**
     * The JSON representation of the tree
     */
    tree: JsonTree;
    /**
     * The WHERE clause in SQL
     */
    sqlFormat?: string;
    /**
     * JSONLogic object
     */
    jsonLogicFormat?: JsonLogicTree;
    /**
     * Query Builder object
     */
    queryBuilderFormat?: Object;
    /**
     * MongoDB query object
     */
    mongoDBFormat?: Object;
    /**
     * Query string
     */
    queryString?: string;
    /**
     * ElasticSearch query object
     */
    elasticSearchFormat?: Object;
    /**
     * SPEL query string
     */
    spelFormat?: string;
};
type FullProps = FormatProps & {
    /**
     * The fields to populate the query builder. See the
     * [Fields](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields) docs.
     */
    fields: Fields;
    /**
     * The config object. See the [Config](https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc docs).
     */
    config?: Config;
    /**
     * The load format string. Changes the tree based on the corresponding prop change
     */
    loadFormat: loadFormatType;
    /**
     * Whether to show action buttons all the time or just on hover
     */
    alwaysShowActionButtons: boolean;
    /**
     * The theme/styling used
     */
    theme: themeType;
};

export type Props = FullProps & DashComponentProps;
