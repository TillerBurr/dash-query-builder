import React, {Component} from 'react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import {AntdConfig} from '@react-awesome-query-builder/antd';
import '@react-awesome-query-builder/antd/css/styles.css';

export default class AntdQueryBuilder extends Component {
    constructor(props) {
        super(props);
        let config =
            props.config === null || props.config === undefined
                ? AntdConfig
                : {...AntdConfig, ...props.config};
        config.settings.removeEmptyGroupsOnLoad = false;
        config.settings.removeIncompleteRulesOnLoad = false;
        config.settings.removeInvalidMultiSelectValuesOnLoad = false;
        this.state = {config: config};
    }

    render() {
        return (
            <div>
                <BaseQueryBuilder {...this.props} config={this.state.config} />
            </div>
        );
    }
}
