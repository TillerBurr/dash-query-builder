import { Config, Fields, BasicConfig, ImmutableTree, JsonTree, JsonLogicTree } from "@react-awesome-query-builder/ui";
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
}
export type loadFormatType = 'jsonLogicFormat' | 'spelFormat' | 'tree'
export type themeType = 'mui' | 'antd' | 'fluent' | 'bootstrap' | 'basic'

export type Props = {
    fields: Fields
    config?: Config
    load_format: loadFormatType
    tree: JsonTree
    sqlFormat?: string
    jsonLogicFormat?: JsonLogicTree
    queryBuilderStringFormat?: string
    mongoDBFormat?: string
    elasticSearchFormat?: string
    spelFormat?: string
    alwaysShowActionButtons: boolean
    theme: themeType
} & DashComponentProps;
