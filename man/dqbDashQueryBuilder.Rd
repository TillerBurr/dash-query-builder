% Auto-generated: do not edit by hand
\name{dqbDashQueryBuilder}

\alias{dqbDashQueryBuilder}

\title{DashQueryBuilder component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
dqbDashQueryBuilder(id=NULL, fields=NULL, formattedOut=NULL, query=NULL,
showCombinatorsBetweenRules=NULL, showNotToggle=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{fields}{List of lists containing elements 'id', 'name', 'label', 'inputtype', 'operators'.
those elements have the following types:
  - id (numeric; optional)
  - name (character; required)
  - label (character; required)
  - inputtype (character; optional)
  - operators (optional): . operators has the following type: list of lists containing elements 'name', 'label'.
those elements have the following types:
  - name (character; optional)
  - label (character; optional)ss. The possible fields and operators that are allowable.}

\item{formattedOut}{Character. The formatted query}

\item{query}{Lists containing elements 'id', 'combinator', 'rules'.
those elements have the following types:
  - id (character; optional)
  - combinator (character; required)
  - rules (optional): . rules has the following type: lists containing elements 'field', 'value', 'operator'.
those elements have the following types:
  - field (character; required)
  - value (logical | numeric | character | named list | unnamed list; required)
  - operator (character; required) | list of lists containing elements 'rules', 'combinator'.
those elements have the following types:
  - rules (optional): . rules has the following type: list of lists containing elements 'field', 'value', 'operator'.
those elements have the following types:
  - field (character; required)
  - value (logical | numeric | character | named list | unnamed list; required)
  - operator (character; required)s
  - combinator (character; required)s | unnamed list. The query that is created via this component. Can be used to seed the
initial component.}

\item{showCombinatorsBetweenRules}{Logical. Show the combinators between the items within a group}

\item{showNotToggle}{Logical. Whether or not to show the "Not" Toggle}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

