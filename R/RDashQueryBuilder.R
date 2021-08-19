# AUTO GENERATED FILE - DO NOT EDIT

RDashQueryBuilder <- function(id=NULL, fields=NULL, jsonLogicFormat=NULL, mongodbFormat=NULL, queryBuilderStringFormat=NULL, queryStringFormat=NULL, sqlFormat=NULL, theme=NULL, tree=NULL) {
    
    props <- list(id=id, fields=fields, jsonLogicFormat=jsonLogicFormat, mongodbFormat=mongodbFormat, queryBuilderStringFormat=queryBuilderStringFormat, queryStringFormat=queryStringFormat, sqlFormat=sqlFormat, theme=theme, tree=tree)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashQueryBuilder',
        namespace = 'dash_query_builder',
        propNames = c('id', 'fields', 'jsonLogicFormat', 'mongodbFormat', 'queryBuilderStringFormat', 'queryStringFormat', 'sqlFormat', 'theme', 'tree'),
        package = 'dashQueryBuilder'
        )

    structure(component, class = c('dash_component', 'list'))
}
