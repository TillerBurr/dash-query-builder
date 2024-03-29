import React from 'react';
import { DashComponentProps } from '../props';

type Props = {
    // Insert props
} & DashComponentProps;

/**
 * Component description
 */
const DashQueryBuilder = (props: Props) => {
    const { id } = props;
    return (
        <div id={id}>
            {/* Insert code */}
            depends
        </div>
    )
}

DashQueryBuilder.defaultProps = {};

export default DashQueryBuilder;
