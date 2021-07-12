import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    BasicConfig,
    Query,
    Builder,
    Utils as QbUtils,
    ImmutableTree,
} from 'react-awesome-query-builder';
import MaterialConfig from 'react-awesome-query-builder/lib/config/material';
import AntdConfig from 'react-awesome-query-builder/lib/config/antd';
import 'react-awesome-query-builder/lib/css/styles.css';
import 'antd/dist/antd.css';
let InitialConfig;
// import 'react-awesome-query-builder/lib/css/compact_styles.css';
// const InitialConfig = MaterialConfig;
// const InitialConfig = AntdConfig;

const queryValue = {id: QbUtils.uuid(), type: 'group'};
const themeSelect = (theme) => {
    if (theme === 'antd') {
        InitialConfig = AntdConfig;
    } else if (theme === 'material') {
        InitialConfig = MaterialConfig;
    } else {
        InitialConfig = BasicConfig;
    }
    return InitialConfig;
};
export default class DashQueryBuilder extends Component {
    constructor(props) {
        super(props);
        let InitialConfig = themeSelect(props.theme);
        const fields = JSON.parse(props.fields);
        const config = {
            ...InitialConfig,
            ...fields,
        };
        this.setProps = props.setProps;
        console.log(config);
        this.state = {
            tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
            config: config,
        };
    }

    onChange = (immutableTree, config) => {
        // Tip: for better performance you can apply `throttle` - see `examples/demo`
        this.setState({tree: immutableTree, config: config});
        this.setProps({tree: this.state.tree});
        const jsonTree = QbUtils.getTree(immutableTree);
        console.log(jsonTree);
    };

    render = () => {
        const {id, tree, setProps} = this.props;

        return (
            <div>
                <Query
                    {...this.state.config}
                    value={this.state.tree}
                    onChange={this.onChange}
                    renderBuilder={this.renderBuilder}
                />
                {this.renderResult(this.state)}
            </div>
        );
    };
    renderResult = ({tree: immutableTree, config}) => (
        <div className="query-builder-result">
            <div>
                Query string:{' '}
                <pre>
                    {JSON.stringify(
                        QbUtils.queryString(immutableTree, config, true)
                    )}
                </pre>
            </div>
            <div>
                MongoDb query:{' '}
                <pre>
                    {JSON.stringify(
                        QbUtils.mongodbFormat(immutableTree, config)
                    )}
                </pre>
            </div>
            <div>
                SQL where:{' '}
                <pre>
                    {JSON.stringify(QbUtils.sqlFormat(immutableTree, config))}
                </pre>
            </div>
            <div>
                JsonLogic:{' '}
                <pre>
                    {JSON.stringify(
                        QbUtils.jsonLogicFormat(immutableTree, config)
                    )}
                </pre>
            </div>
        </div>
    );
    renderBuilder = (props) => (
        <div className="query-builder-container" style={{padding: '10px'}}>
            <div className="query-builder qb-lite">
                <Builder {...props} />
            </div>
        </div>
    );
}

DashQueryBuilder.defaultProps = {};

DashQueryBuilder.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    tree: PropTypes.any,
    setProps: PropTypes.func,
    fields: PropTypes.any.isRequired,
    theme: PropTypes.string,
};
