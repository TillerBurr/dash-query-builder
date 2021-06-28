# AUTO GENERATED FILE - DO NOT EDIT

dqbDashQueryBuilder <- function(id=NULL, fields=NULL, formattedOut=NULL, query=NULL) {
    
    props <- list(id=id, fields=fields, formattedOut=formattedOut, query=query)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashQueryBuilder',
        namespace = 'dash_query_builder',
        propNames = c('id', 'fields', 'formattedOut', 'query'),
        package = 'dashQueryBuilder'
        )

    structure(component, class = c('dash_component', 'list'))
}
