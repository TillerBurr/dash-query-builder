import React, {Component} from 'react';
import BaseQueryBuilder from './BaseQueryBuilder.react';
import {BootstrapConfig} from '@react-awesome-query-builder/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BootstrapQueryBuilder extends Component {
    constructor(props) {
        super(props);
        let config =
            props.config === null || props.config === undefined
                ? BootstrapConfig
                : {...BootstrapConfig, ...props.config};
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
