% Auto-generated: do not edit by hand
\name{dqbDashQueryBuilder}

\alias{dqbDashQueryBuilder}

\title{DashQueryBuilder component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
dqbDashQueryBuilder(id=NULL, fields=NULL, formattedOut=NULL, query=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{fields}{List of lists containing elements 'id', 'name', 'label', 'operators'.
those elements have the following types:
  - id (numeric; optional)
  - name (character; required)
  - label (character; required)
  - operators (optional): . operators has the following type: list of lists containing elements 'name', 'label'.
those elements have the following types:
  - name (character; optional)
  - label (character; optional)ss. The value displayed in the input.}

\item{formattedOut}{Character. }

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
  - combinator (character; required)s | unnamed list. The query}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

