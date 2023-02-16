# AUTO GENERATED FILE - DO NOT EDIT

#' @export
RDashQueryBuilder <- function(id=NULL, alwaysShowActionButtons=NULL, config=NULL, elasticSearchFormat=NULL, fields=NULL, jsonLogicFormat=NULL, loadFormat=NULL, mongodbFormat=NULL, queryBuilderStringFormat=NULL, queryStringFormat=NULL, spelFormat=NULL, sqlFormat=NULL, theme=NULL, tree=NULL) {

    props <- list(id=id, alwaysShowActionButtons=alwaysShowActionButtons, config=config, elasticSearchFormat=elasticSearchFormat, fields=fields, jsonLogicFormat=jsonLogicFormat, loadFormat=loadFormat, mongodbFormat=mongodbFormat, queryBuilderStringFormat=queryBuilderStringFormat, queryStringFormat=queryStringFormat, spelFormat=spelFormat, sqlFormat=sqlFormat, theme=theme, tree=tree)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashQueryBuilder',
        namespace = 'dash_query_builder',
        propNames = c('id', 'alwaysShowActionButtons', 'config', 'elasticSearchFormat', 'fields', 'jsonLogicFormat', 'loadFormat', 'mongodbFormat', 'queryBuilderStringFormat', 'queryStringFormat', 'spelFormat', 'sqlFormat', 'theme', 'tree'),
        package = 'dashQueryBuilder'
        )

    structure(component, class = c('dash_component', 'list'))
}
