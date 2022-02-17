import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import { BasicConfig } from 'react-awesome-query-builder';

export default class BasicQueryBuilder extends Component {

    render() {
        return (
            <div>
                <BaseQueryBuilder {...this.props} config={BasicConfig} />
            </div>
        )
    }
}

BasicQueryBuilder.defaultProps = defaultProps
BasicQueryBuilder.propTypes = themelessPropTypes