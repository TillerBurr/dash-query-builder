import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';
import 'antd/dist/antd.css';

export default class AntdQueryBuilder extends Component {

    constructor(props) {
        super(props)
        let config = (props.config === null || props.config === undefined) ? AntdConfig : { ...AntdConfig, ...props.config }
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

AntdQueryBuilder.defaultProps = defaultProps
AntdQueryBuilder.propTypes = themelessPropTypes
