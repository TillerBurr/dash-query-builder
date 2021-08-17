% Auto-generated: do not edit by hand
\name{dqbDashQueryBuilder}

\alias{dqbDashQueryBuilder}

\title{DashQueryBuilder component}

\description{

}

\usage{
dqbDashQueryBuilder(id=NULL, fields=NULL, jsonLogicFormat=NULL,
mongodbFormat=NULL, queryStringFormat=NULL, sqlFormat=NULL,
theme=NULL, tree=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{fields}{The fields that are used to populate the options for the query builder.This can be a very complicated object.
 See https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc#configfields for more info.}

\item{jsonLogicFormat}{Character. The JSON Logic Formatted string defined by the current state of the tree}

\item{mongodbFormat}{Character. The MongoDB Formatted string defined by the current state of the tree}

\item{queryStringFormat}{Character. The Query String Formatted string defined by the current state of the tree}

\item{sqlFormat}{Character. The SQL Formatted string defined by the current state of the tree}

\item{theme}{A value equal to: 'material', 'antd', 'basic'. Sets the theme of the query builder.}

\item{tree}{Logical | numeric | character | named list | unnamed list. The tree that describes the state of the query builder.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

