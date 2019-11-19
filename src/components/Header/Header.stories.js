import React from 'react';
import { storiesOf } from '@storybook/react';
//importing storiesOf(prebaked method) from the storybook component
import "./Header.css";
import Header from './Header';
//importing a header from the header component


storiesOf('Header', module)
    .add('Head', () => <Header
        //the first paramater of add is storing a string name into the storybook module
        //module is saying im gonna store a section into storybook browser with props
    />)
 