# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashQueryBuilder <- function(id=NULL, alwaysShowActionButtons=NULL, config=NULL, elasticSearchFormat=NULL, fields=NULL, jsonLogicFormat=NULL, load_format=NULL, mongoDBFormat=NULL, queryBuilderStringFormat=NULL, spelFormat=NULL, sqlFormat=NULL, theme=NULL, tree=NULL) {
    
    props <- list(id=id, alwaysShowActionButtons=alwaysShowActionButtons, config=config, elasticSearchFormat=elasticSearchFormat, fields=fields, jsonLogicFormat=jsonLogicFormat, load_format=load_format, mongoDBFormat=mongoDBFormat, queryBuilderStringFormat=queryBuilderStringFormat, spelFormat=spelFormat, sqlFormat=sqlFormat, theme=theme, tree=tree)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashQueryBuilder',
        namespace = 'dash_query_builder',
        propNames = c('id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'load_format', 'mongoDBFormat', 'queryBuilderStringFormat', 'spelFormat', 'sqlFormat', 'theme', 'tree'),
        package = 'dashQueryBuilder'
        )

    structure(component, class = c('dash_component', 'list'))
}
