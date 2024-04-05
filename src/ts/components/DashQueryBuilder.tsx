import {Suspense} from 'react';
import React from 'react';
import {Props} from '../props';
import LazyQueryBuilder from '../fragments/LazyQueryBuilder';
import {emptyTree} from '../fragments/utils';
const DashQueryBuilder = (props: Props) => {
    const {id} = props;

    return (
        <div id={id}>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyQueryBuilder {...props} />
            </Suspense>
        </div>
    );
};

DashQueryBuilder.defaultProps = {
    tree: emptyTree,
    theme: 'basic',
    loadFormat: 'tree',
    alwaysShowActionButtons: true,
};

export default DashQueryBuilder;
