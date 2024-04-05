import BaseBuilder from './Base';
import React from 'react';
import {MuiConfig} from '@react-awesome-query-builder/mui';
import '@react-awesome-query-builder/mui/css/styles.css';
import {Props} from '../props';

const MuiQueryBuilder = (props: Props) => {
    return <BaseBuilder {...props} styleConfig={MuiConfig} />;
};

export default MuiQueryBuilder;
