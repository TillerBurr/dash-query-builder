import BaseBuilder from './Base';
import React from 'react';
import {AntdConfig} from '@react-awesome-query-builder/antd';
import '@react-awesome-query-builder/antd/css/styles.css';
import {Props} from '../props';

const AntdQueryBuilder = (props: Props) => {
    return <BaseBuilder {...props} styleConfig={AntdConfig} />;
};

export default AntdQueryBuilder;
