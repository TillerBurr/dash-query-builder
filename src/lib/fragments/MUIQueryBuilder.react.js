import React, { Component } from 'react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import { MuiConfig } from '@react-awesome-query-builder/mui'


export default class MUIQueryBuilder extends Component {
    constructor(props) {
        super(props)
        let config = (props.config === null || props.config === undefined) ? MuiConfig : { ...MuiConfig, ...props.config }
        this.state = { config: config }
    }


    render() {
        return (
            <div>
                <BaseQueryBuilder {...this.props} config={this.state.config} />
            </div>
        )
    }
}

