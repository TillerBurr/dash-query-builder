% Auto-generated: do not edit by hand
\name{dashQueryBuilder}

\alias{dashQueryBuilder}

\title{DashQueryBuilder component}

\description{

}

\usage{
dashQueryBuilder(id=NULL, alwaysShowActionButtons=NULL, config=NULL,
elasticSearchFormat=NULL, fields=NULL, jsonLogicFormat=NULL,
loadFormat=NULL, mongoDBFormat=NULL,
queryBuilderFormat=NULL, queryString=NULL, spelFormat=NULL,
sqlFormat=NULL, theme=NULL, tree=NULL)
}

\arguments{
\item{id}{Character. Unique ID to identify this component in Dash callbacks.}

\item{alwaysShowActionButtons}{Logical. }

\item{config}{Lists containing elements 'settings', 'operators', 'widgets', 'conjunctions', 'types', 'fields', 'funcs', 'ctx'.
those elements have the following types:
  - settings (required): . settings has the following type: lists containing elements 'locale', 'theme', 'valuelabel', 'valueplaceholder', 'fieldlabel', 'operatorlabel', 'fieldplaceholder', 'funcplaceholder', 'funclabel', 'operatorplaceholder', 'locklabel', 'lockedlabel', 'deletelabel', 'addgrouplabel', 'addcaselabel', 'adddefaultcaselabel', 'defaultcaselabel', 'addrulelabel', 'addsubrulelabel', 'delgrouplabel', 'notlabel', 'fieldsourcespopuptitle', 'valuesourcespopuptitle', 'removeruleconfirmoptions', 'removegroupconfirmoptions', 'defaultfield', 'defaultoperator', 'fieldsources', 'valuesourcesinfo', 'cancomparefieldwithfield', 'canreorder', 'canregroup', 'canregroupcases', 'shownot', 'showlock', 'candeletelocked', 'maxnesting', 'setoponchangefield', 'clearvalueonchangefield', 'clearvalueonchangeop', 'canleaveemptygroup', 'canleaveemptycase', 'shouldcreateemptygroup', 'forceshowconj', 'immutablegroupsmode', 'immutablefieldsmode', 'immutableopsmode', 'immutablevaluesmode', 'maxnumberofrules', 'maxnumberofcases', 'showerrormessage', 'canshortmongoquery', 'convertablewidgets', 'removeemptygroupsonload', 'removeincompleterulesonload', 'removeinvalidmultiselectvaluesonload', 'groupoperators', 'useconfigcompress', 'keepinputonchangefieldsrc', 'fielditemkeysforsearch', 'listkeysforsearch', 'fieldseparator', 'fieldseparatordisplay', 'formatreverse', 'sqlformatreverse', 'spelformatreverse', 'formatfield', 'formatspelfield', 'formataggr', 'renderfield', 'renderoperator', 'renderfunc', 'renderconjs', 'renderbutton', 'rendericon', 'renderbuttongroup', 'renderswitch', 'renderprovider', 'rendervaluesources', 'renderfieldsources', 'renderconfirm', 'useconfirm', 'rendersize', 'renderitem', 'dropdownplacement', 'groupactionsposition', 'showlabels', 'maxlabelslength', 'customfieldselectprops', 'renderbeforewidget', 'renderafterwidget', 'renderbeforeactions', 'renderafteractions', 'renderruleerror', 'renderswitchprefix', 'defaultsliderwidth', 'defaultselectwidth', 'defaultsearchwidth', 'defaultmaxrows'.
those elements have the following types:
  - locale (optional): . locale has the following type: lists containing elements 'moment', 'antd', 'material', 'mui'.
those elements have the following types:
  - moment (character; optional)
  - antd (optional): . antd has the following type: lists containing elements .
those elements have the following types:

  - material (optional): . material has the following type: lists containing elements .
those elements have the following types:

  - mui (optional): . mui has the following type: lists containing elements .
those elements have the following types:

  - theme (optional): . theme has the following type: lists containing elements 'material', 'mui'.
those elements have the following types:
  - material (optional): . material has the following type: lists containing elements .
those elements have the following types:

  - mui (optional): . mui has the following type: lists containing elements .
those elements have the following types:

  - valuelabel (character; optional)
  - valueplaceholder (character; optional)
  - fieldlabel (character; optional)
  - operatorlabel (character; optional)
  - fieldplaceholder (character; optional)
  - funcplaceholder (character; optional)
  - funclabel (character; optional)
  - operatorplaceholder (character; optional)
  - locklabel (character; optional)
  - lockedlabel (character; optional)
  - deletelabel (character; optional)
  - addgrouplabel (character; optional)
  - addcaselabel (character; optional)
  - adddefaultcaselabel (character; optional)
  - defaultcaselabel (character; optional)
  - addrulelabel (character; optional)
  - addsubrulelabel (character; optional)
  - delgrouplabel (character; optional)
  - notlabel (character; optional)
  - fieldsourcespopuptitle (character; optional)
  - valuesourcespopuptitle (character; optional)
  - removeruleconfirmoptions (optional): . removeruleconfirmoptions has the following type: lists containing elements 'title', 'oktext', 'oktype', 'canceltext'.
those elements have the following types:
  - title (character; optional)
  - oktext (character; optional)
  - oktype (character; optional)
  - canceltext (character; optional)
  - removegroupconfirmoptions (optional): . removegroupconfirmoptions has the following type: lists containing elements 'title', 'oktext', 'oktype', 'canceltext'.
those elements have the following types:
  - title (character; optional)
  - oktext (character; optional)
  - oktype (character; optional)
  - canceltext (character; optional)
  - defaultfield (character; optional)
  - defaultoperator (character; optional)
  - fieldsources (unnamed list; optional)
  - valuesourcesinfo (optional): . valuesourcesinfo has the following type: lists containing elements 'func', 'field', 'value', 'const'.
those elements have the following types:
  - func (optional): . func has the following type: lists containing elements 'label', 'widget'.
those elements have the following types:
  - label (character; required)
  - widget (character; optional)
  - field (optional): . field has the following type: lists containing elements 'label', 'widget'.
those elements have the following types:
  - label (character; required)
  - widget (character; optional)
  - value (optional): . value has the following type: lists containing elements 'label', 'widget'.
those elements have the following types:
  - label (character; required)
  - widget (character; optional)
  - const (optional): . const has the following type: lists containing elements 'label', 'widget'.
those elements have the following types:
  - label (character; required)
  - widget (character; optional)
  - cancomparefieldwithfield (logical | numeric | character | named list | unnamed list; optional)
  - canreorder (logical; optional)
  - canregroup (logical; optional)
  - canregroupcases (logical; optional)
  - shownot (logical; optional)
  - showlock (logical; optional)
  - candeletelocked (logical; optional)
  - maxnesting (numeric; optional)
  - setoponchangefield (unnamed list; required)
  - clearvalueonchangefield (logical; optional)
  - clearvalueonchangeop (logical; optional)
  - canleaveemptygroup (logical; optional)
  - canleaveemptycase (logical; optional)
  - shouldcreateemptygroup (logical; optional)
  - forceshowconj (logical; optional)
  - immutablegroupsmode (logical; optional)
  - immutablefieldsmode (logical; optional)
  - immutableopsmode (logical; optional)
  - immutablevaluesmode (logical; optional)
  - maxnumberofrules (optional): . maxnumberofrules has the following type: lists containing elements .
those elements have the following types:

  - maxnumberofcases (optional): . maxnumberofcases has the following type: lists containing elements .
those elements have the following types:

  - showerrormessage (logical; optional)
  - canshortmongoquery (logical; optional)
  - convertablewidgets (optional): . convertablewidgets has the following type: lists containing elements .
those elements have the following types:

  - removeemptygroupsonload (logical; optional)
  - removeincompleterulesonload (logical; optional)
  - removeinvalidmultiselectvaluesonload (logical; optional)
  - groupoperators (unnamed list; optional)
  - useconfigcompress (logical; optional)
  - keepinputonchangefieldsrc (logical; optional)
  - fielditemkeysforsearch (optional): . fielditemkeysforsearch has the following type: lists containing elements .
those elements have the following types:

  - listkeysforsearch (optional): . listkeysforsearch has the following type: lists containing elements .
those elements have the following types:

  - fieldseparator (character; optional)
  - fieldseparatordisplay (character; optional)
  - formatreverse (logical | numeric | character | named list | unnamed list; optional)
  - sqlformatreverse (logical | numeric | character | named list | unnamed list; optional)
  - spelformatreverse (logical | numeric | character | named list | unnamed list; optional)
  - formatfield (logical | numeric | character | named list | unnamed list; optional)
  - formatspelfield (logical | numeric | character | named list | unnamed list; optional)
  - formataggr (logical | numeric | character | named list | unnamed list; optional)
  - renderfield (logical | numeric | character | named list | unnamed list; optional)
  - renderoperator (logical | numeric | character | named list | unnamed list; optional)
  - renderfunc (logical | numeric | character | named list | unnamed list; optional)
  - renderconjs (logical | numeric | character | named list | unnamed list; optional)
  - renderbutton (logical | numeric | character | named list | unnamed list; optional)
  - rendericon (logical | numeric | character | named list | unnamed list; optional)
  - renderbuttongroup (logical | numeric | character | named list | unnamed list; optional)
  - renderswitch (logical | numeric | character | named list | unnamed list; optional)
  - renderprovider (logical | numeric | character | named list | unnamed list; optional)
  - rendervaluesources (logical | numeric | character | named list | unnamed list; optional)
  - renderfieldsources (logical | numeric | character | named list | unnamed list; optional)
  - renderconfirm (logical | numeric | character | named list | unnamed list; optional)
  - useconfirm (logical | numeric | character | named list | unnamed list; optional)
  - rendersize (a value equal to: 'small', 'large', 'medium'; optional)
  - renderitem (logical | numeric | character | named list | unnamed list; optional)
  - dropdownplacement (a value equal to: 'topleft', 'topcenter', 'topright', 'bottomleft', 'bottomcenter', 'bottomright'; optional)
  - groupactionsposition (a value equal to: 'topleft', 'topcenter', 'topright', 'bottomleft', 'bottomcenter', 'bottomright'; optional)
  - showlabels (logical; optional)
  - maxlabelslength (numeric; optional)
  - customfieldselectprops (named list; optional)
  - renderbeforewidget (logical | numeric | character | named list | unnamed list; optional)
  - renderafterwidget (logical | numeric | character | named list | unnamed list; optional)
  - renderbeforeactions (logical | numeric | character | named list | unnamed list; optional)
  - renderafteractions (logical | numeric | character | named list | unnamed list; optional)
  - renderruleerror (logical | numeric | character | named list | unnamed list; optional)
  - renderswitchprefix (logical | numeric | character | named list | unnamed list; optional)
  - defaultsliderwidth (character; optional)
  - defaultselectwidth (character; optional)
  - defaultsearchwidth (character; optional)
  - defaultmaxrows (numeric; optional)
  - operators (required): . operators has the following type: lists containing elements .
those elements have the following types:

  - widgets (required): . widgets has the following type: lists containing elements .
those elements have the following types:

  - conjunctions (required): . conjunctions has the following type: lists containing elements .
those elements have the following types:

  - types (required): . types has the following type: lists containing elements .
those elements have the following types:

  - fields (required): . fields has the following type: lists containing elements .
those elements have the following types:

  - funcs (optional): . funcs has the following type: lists containing elements .
those elements have the following types:

  - ctx (list with named elements and values of type logical | numeric | character | named list | unnamed list; required). }

\item{elasticSearchFormat}{Lists containing elements .
those elements have the following types:
. }

\item{fields}{Lists containing elements .
those elements have the following types:
. }

\item{jsonLogicFormat}{Lists containing elements .
those elements have the following types:
. }

\item{loadFormat}{A value equal to: 'jsonlogicformat', 'spelformat', 'tree'. }

\item{mongoDBFormat}{Lists containing elements .
those elements have the following types:
. }

\item{queryBuilderFormat}{Lists containing elements .
those elements have the following types:
. }

\item{queryString}{Character. }

\item{spelFormat}{Character. }

\item{sqlFormat}{Character. The WHERE clause in SQL}

\item{theme}{A value equal to: 'mui', 'antd', 'fluent', 'bootstrap', 'basic'. }

\item{tree}{Logical | numeric | character | named list | unnamed list. The JSON representation of the tree}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

