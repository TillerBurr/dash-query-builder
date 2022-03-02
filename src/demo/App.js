/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';

import { DashQueryBuilder } from '../lib';
import { pick } from 'lodash'
const fields = {
    "main_report_data": {
        "type": "!struct",
        "label": "Fields",
        "subfields": {
            "qty": {
                "label": "Qty",
                "type": "number",
                "fieldSettings": { "min": 0 },
                "valueSources": ["value"],
                "preferWidgets": ["number"],
            },
            "price": {
                "label": "Price",
                "type": "number",
                "valueSources": ["value"],
                "fieldSettings": { "min": 10, "max": 100 },
                "preferWidgets": ["slider", "rangeslider"],
            },
            "color": {
                "label": "Color",
                "type": "select",
                "valueSources": ["value"],
                "fieldSettings": {
                    "listValues": [
                        { "value": "yellow", "title": "Yellow" },
                        { "value": "green", "title": "Green" },
                        { "value": "orange", "title": "Orange" },
                    ]
                },
            },
            "is_promotion": {
                "label": "Promo?",
                "type": "boolean",
                "operators": ["equal", "is_empty"],
                "valueSources": ["value"],
            },
        },
    }
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
function pluck(array, key) {
    return array.map(function (item) { return item[key]; });
}
class App extends Component {

    constructor() {
        super();
        this.state = {
            "jsonLogicFormat": "",
            "loadFormat": "",
            "sqlFormat": "",
            "tree": "",
            "config": "",
            "queryStringFormat": "",
            "queryBuilderFormat": "",
            "mongodbFormat": "",
            "elasticSearchFormat": "",
            "spelFormat": ""

        };
        this.setProps = this.setProps.bind(this);
        this.keys = [
            "jsonLogicFormat",
            "loadFormat",
            "sqlFormat",
            "tree",
            "queryStringFormat",
            "queryBuilderFormat",
            "mongodbFormat",
            "elasticSearchFormat",
            "spelFormat"
        ]
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashQueryBuilder
                    setProps={this.setProps}
                    fields={fields}
                    theme="bootstrap"
                />
                <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(pick(this.state, this.keys), undefined, 4)) }} />

            </div>
        )
    }
}

export default App;