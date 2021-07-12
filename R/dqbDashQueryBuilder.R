# AUTO GENERATED FILE - DO NOT EDIT

dqbDashQueryBuilder <- function(id=NULL, fields=NULL, theme=NULL, tree=NULL) {
    
    props <- list(id=id, fields=fields, theme=theme, tree=tree)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashQueryBuilder',
        namespace = 'dash_query_builder',
        propNames = c('id', 'fields', 'theme', 'tree'),
        package = 'dashQueryBuilder'
        )

    structure(component, class = c('dash_component', 'list'))
}
