import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import BootstrapConfig from 'react-awesome-query-builder/lib/config/bootstrap';

export default class BootstrapQueryBuilder extends Component {

    constructor(props) {
        super(props)
        let config = (props.config === null || props.config === undefined) ? BootstrapConfig : { ...BootstrapConfig, ...props.config }
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

BootstrapQueryBuilder.defaultProps = defaultProps
BootstrapQueryBuilder.propTypes = themelessPropTypes
