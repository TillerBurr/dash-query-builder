import BaseBuilder from './Base';
import React from 'react';
import {BasicConfig} from '@react-awesome-query-builder/ui';
import '@react-awesome-query-builder/ui/css/styles.css';
import {Props} from '../props';

const BasicQueryBuilder = (props: Props) => {
    return <BaseBuilder {...props} styleConfig={BasicConfig} />;
};

export default BasicQueryBuilder;
