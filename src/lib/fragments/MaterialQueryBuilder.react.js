import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import MaterialConfig from 'react-awesome-query-builder/lib/config/material';


export default class MaterialQueryBuilder extends Component {

    constructor(props) {
        super(props)
        let config = (props.config === null || props.config === undefined) ? MaterialConfig : { ...MaterialConfig, ...props.config }
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


MaterialQueryBuilder.defaultProps = defaultProps
MaterialQueryBuilder.propTypes = themelessPropTypes
