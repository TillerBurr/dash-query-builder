# AUTO GENERATED FILE - DO NOT EDIT

dqbDashQueryBuilder <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashQueryBuilder',
        namespace = 'dash_query_builder',
        propNames = c('id', 'label', 'value'),
        package = 'dashQueryBuilder'
        )

    structure(component, class = c('dash_component', 'list'))
}
