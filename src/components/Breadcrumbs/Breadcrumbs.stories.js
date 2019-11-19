import React from 'react';
import { storiesOf } from '@storybook/react';
//importing storiesOf(prebaked method) from the storybook component
import "./Breadcrumbs.css";
import Breadcrumbs from './Breadcrumbs';
//importing a div from the breadcrumbs component


storiesOf('Breadcrumbs', module)
    .add('breadcrumbs', () => <Breadcrumbs
        //the first paramater of add is storing a string name into the storybook module
        //module is saying im gonna store a section into storybook browser with props
    
    />)
   