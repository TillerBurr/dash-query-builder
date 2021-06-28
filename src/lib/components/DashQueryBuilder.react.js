import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QueryBuilder, {formatQuery} from 'react-querybuilder';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashQueryBuilder extends Component {
    constructor(props) {
        super(props);
    }

    queryChange = (e) => {
        console.log(e);
    };
    render() {
        const {id, setProps, query, fields} = this.props;

        return (
            <div id={id}>
                {' '}
                <QueryBuilder
                    id={id}
                    fields={fields}
                    query={query}
                    onQueryChange={(query) => {
                        setProps({
                            query: query,
                            formattedOut: formatQuery(query, 'sql'),
                        });
                    }}
                    // showCombinatorsBetweenRules={true}
                    showNotToggle={true}
                ></QueryBuilder>{' '}
            </div>
        );
    }
}

DashQueryBuilder.defaultProps = {};

DashQueryBuilder.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * The query
     */
    query: PropTypes.shape({
        id: PropTypes.string,
        combinator: PropTypes.string.isRequired,

        rules: PropTypes.oneOfType([
            PropTypes.shape({
                field: PropTypes.string.isRequired,
                value: PropTypes.any.isRequired,
                operator: PropTypes.string.isRequired,
            }),
            PropTypes.arrayOf(
                PropTypes.shape({
                    rules: PropTypes.arrayOf(
                        PropTypes.shape({
                            field: PropTypes.string.isRequired,
                            value: PropTypes.any.isRequired,
                            operator: PropTypes.string.isRequired,
                        })
                    ),
                    combinator: PropTypes.string.isRequired,
                })
            ),
            PropTypes.array,
        ]),
    }),
    /**
     * The value displayed in the input.
     */
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            operators: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    label: PropTypes.string,
                })
            ),
        })
    ),
    formattedOut: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
