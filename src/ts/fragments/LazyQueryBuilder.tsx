import {Props} from 'props';
import React from 'react';

const LazyMui = React.lazy(() => import(/* webpackChunkName: "mui" */ './Mui'));
const LazyBootstrap = React.lazy(
    () => import(/* webpackChunkName: "bootstrap" */ './Bootstrap')
);
const LazyFluent = React.lazy(
    () => import(/* webpackChunkName: "fluent" */ './Fluent')
);
const LazyAntd = React.lazy(
    () => import(/* webpackChunkName: "antd" */ './Antd')
);
const LazyBasic = React.lazy(
    () => import(/* webpackChunkName: "basic" */ './Basic')
);

const LazyQueryBuilder = (props: Props) => {
    switch (props.theme) {
        case 'fluent':
            return <LazyFluent {...props} />;
        case 'mui':
            return <LazyMui {...props} />;
        case 'antd':
            return <LazyAntd {...props} />;
        case 'bootstrap':
            return <LazyBootstrap {...props} />;
        case 'basic':
            return <LazyBasic {...props} />;
    }
};

export default LazyQueryBuilder;
