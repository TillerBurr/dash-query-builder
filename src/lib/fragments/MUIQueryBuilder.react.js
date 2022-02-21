import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import MUIConfig from 'react-awesome-query-builder/lib/config/mui';


export default class MUIQueryBuilder extends Component {
    constructor(props) {
        super(props)
        let config = (props.config === null || props.config === undefined) ? MUIConfig : { ...MUIConfig, ...props.config }
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

MUIQueryBuilder.defaultProps = defaultProps
MUIQueryBuilder.propTypes = themelessPropTypes