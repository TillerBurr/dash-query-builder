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
        const {
            id,
            setProps,
            query,
            fields,
            showNotToggle,
            showCombinatorsBetweenRules,
        } = this.props;

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
                    showCombinatorsBetweenRules={showCombinatorsBetweenRules}
                    showNotToggle={showNotToggle}
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
     * The query that is created via this component. Can be used to seed the
     * initial component.
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
     * The possible fields and operators that are allowable.
     */
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            // valueEditorType: PropTypes.oneOf(),
            inputType: PropTypes.string,
            operators: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    label: PropTypes.string,
                })
            ),
        })
    ),
    /**
     *  The formatted query
     */
    formattedOut: PropTypes.string,
    /**
     * Whether or not to show the "Not" Toggle
     */
    showNotToggle: PropTypes.bool,
    /**
     * Show the combinators between the items within a group
     */
    showCombinatorsBetweenRules: PropTypes.bool,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
