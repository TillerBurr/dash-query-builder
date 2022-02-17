import React, { Component } from 'react';
import { themelessPropTypes, defaultProps } from '../components/DashQueryBuilder.react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import MUIConfig from 'react-awesome-query-builder/lib/config/mui';


export default class MUIQueryBuilder extends Component {

    render() {
        return (
            <div>
                <BaseQueryBuilder {...this.props} config={MUIConfig} />
            </div>
        )
    }
}

MUIQueryBuilder.defaultProps = defaultProps
MUIQueryBuilder.propTypes = themelessPropTypes