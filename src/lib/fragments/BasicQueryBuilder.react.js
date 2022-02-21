import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import { BasicConfig } from 'react-awesome-query-builder';

export default class BasicQueryBuilder extends Component {

    constructor(props) {
        super(props)
        let config = (props.config === null || props.config === undefined) ? BasicConfig : { ...BasicConfig, ...props.config }
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

BasicQueryBuilder.defaultProps = defaultProps
BasicQueryBuilder.propTypes = themelessPropTypes