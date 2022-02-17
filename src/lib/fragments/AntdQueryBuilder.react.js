import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';
import 'antd/dist/antd.css';

export default class AntdQueryBuilder extends Component {

    render() {
        return (
            <div>
                <BaseQueryBuilder {...this.props} config={AntdConfig} />
            </div>
        )
    }
}

AntdQueryBuilder.defaultProps = defaultProps
AntdQueryBuilder.propTypes = themelessPropTypes