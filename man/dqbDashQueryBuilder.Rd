% Auto-generated: do not edit by hand
\name{dqbDashQueryBuilder}

\alias{dqbDashQueryBuilder}

\title{DashQueryBuilder component}

\description{
DashQueryBuilder is a Dash Component based on [`react-awesome-query-builder`](https://github.com/ukrbublik/react-awesome-query-builder).  It takes a `fields` property to generate the options for building the actual query. The optional property `tree` is used to define the current state of the tree. It can be used to define the starting state of the query builder. The optional property `theme` is one of `material`, `antd` or `basic`. This is the styling of the component. These are the only themes supported by `react-awesome-query-builder`
}

\usage{
dqbDashQueryBuilder(id=NULL, fields=NULL, jsonLogicFormat=NULL,
mongodbFormat=NULL, queryBuilderStringFormat=NULL,
queryStringFormat=NULL, sqlFormat=NULL, theme=NULL,
tree=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{fields}{The fields that are used to populate the options for the query builder.This can be a very complicated object.
 See https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields for more info.}

\item{jsonLogicFormat}{Character. The JSON Logic Formatted string defined by the current state of the tree}

\item{mongodbFormat}{Character. The MongoDB Formatted string defined by the current state of the tree}

\item{queryBuilderStringFormat}{Character. The Query Builder String Formatted string defined by the current state of the tree}

\item{queryStringFormat}{Character. The Query String Formatted string defined by the current state of the tree}

\item{sqlFormat}{Character. The SQL Formatted string defined by the current state of the tree}

\item{theme}{A value equal to: 'material', 'antd', 'basic'. Sets the theme of the query builder.}

\item{tree}{Logical | numeric | character | named list | unnamed list. The tree that describes the state of the query builder.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

