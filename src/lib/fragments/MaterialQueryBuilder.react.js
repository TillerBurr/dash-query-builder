import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import MaterialConfig from 'react-awesome-query-builder/lib/config/material';


export default class MaterialQueryBuilder extends Component {

    render() {
        return (
            <div>
                <BaseQueryBuilder {...this.props} config={MaterialConfig} />
            </div>
        )
    }
}

MaterialQueryBuilder.defaultProps = defaultProps
MaterialQueryBuilder.propTypes = themelessPropTypes