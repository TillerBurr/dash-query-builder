import BaseBuilder from './Base';
import React from 'react';
import {FluentUIConfig} from '@react-awesome-query-builder/fluent';
import '@react-awesome-query-builder/fluent/css/styles.css';
import {Props} from '../props';

const FluentUiQueryBuilder = (props: Props) => {
    return <BaseBuilder {...props} styleConfig={FluentUIConfig} />;
};

export default FluentUiQueryBuilder;
