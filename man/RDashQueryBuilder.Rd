% Auto-generated: do not edit by hand
\name{RDashQueryBuilder}

\alias{RDashQueryBuilder}

\title{DashQueryBuilder component}

\description{
DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).  It takes a `fields` property to generate the options for building the actual query. The optional property `tree` is used to define the current state of the tree. It can be used to define the starting state of the query builder. The optional property `theme` is one of `material`, `mui`, `antd`, `bootstrap` or `basic`. This is the styling of the component. These are the only themes supported by `react-awesome-query-builder`.
}

\usage{
RDashQueryBuilder(id=NULL, alwaysShowActionButtons=NULL, config=NULL,
elasticSearchFormat=NULL, fields=NULL, jsonLogicFormat=NULL,
loadFormat=NULL, mongodbFormat=NULL,
queryBuilderStringFormat=NULL, queryStringFormat=NULL,
spelFormat=NULL, sqlFormat=NULL, theme=NULL, tree=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{alwaysShowActionButtons}{Logical. Always show the Action Buttons (Add Rule, Add Group, Delete, etc.). If false, show only on hover.}

\item{config}{Named list. Customizable Config. Currently only usable for objects that do not involve functions. Cannot be used to modify conjunctions,
operators or widgets. Setting this is currently in alpha, it is very unstable.}

\item{elasticSearchFormat}{Named list. The JSON Logic Formatted defined by the current state of the tree}

\item{fields}{The fields that are used to populate the options for the query builder. This can be a very complicated object.
 See https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields for more info.}

\item{jsonLogicFormat}{Named list. The JSON Logic Formatted string defined by the current state of the tree}

\item{loadFormat}{A value equal to: 'jsonlogicformat', 'spelformat', 'tree'. The Format which the Query Builder will load. Any changes made to that format will produce an update. Only that format will be able to load
the tree}

\item{mongodbFormat}{Named list. The MongoDB Formatted string defined by the current state of the tree}

\item{queryBuilderStringFormat}{Character. The Query Builder String Formatted string defined by the current state of the tree}

\item{queryStringFormat}{Character. The Query String Formatted string defined by the current state of the tree}

\item{spelFormat}{Character. The JSON Logic Formatted string defined by the current state of the tree}

\item{sqlFormat}{Character. The SQL Formatted string defined by the current state of the tree}

\item{theme}{A value equal to: 'material', "mui", 'antd', 'basic', 'bootstrap'. Sets the theme of the query builder.}

\item{tree}{Logical | numeric | character | named list | unnamed list. The tree that describes the state of the query builder.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}
