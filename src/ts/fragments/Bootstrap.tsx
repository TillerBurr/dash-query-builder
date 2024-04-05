import BaseBuilder from './Base';
import React from 'react';
import {BootstrapConfig} from '@react-awesome-query-builder/bootstrap';
import '@react-awesome-query-builder/bootstrap/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Props} from '../props';

const BootstrapQueryBuilder = (props: Props) => {
    return <BaseBuilder {...props} styleConfig={BootstrapConfig} />;
};

export default BootstrapQueryBuilder;
