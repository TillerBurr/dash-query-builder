import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import BootstrapConfig from 'react-awesome-query-builder/lib/config/bootstrap';

export default class BootstrapQueryBuilder extends Component {

    render() {
        return (
            <div>
                <BaseQueryBuilder {...this.props} config={BootstrapConfig} />
            </div>
        )
    }
}

BootstrapQueryBuilder.defaultProps = defaultProps
BootstrapQueryBuilder.propTypes = themelessPropTypes