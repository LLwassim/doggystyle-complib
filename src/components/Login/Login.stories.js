import React from 'react';
import { storiesOf } from '@storybook/react';
//importing storiesOf(prebaked method) from the storybook component
import "./Login.css";
import Login from './Login.js';
//importing a login div from the login component


storiesOf('Login', module)
    .add('Login', () => <Login
        //the first paramater of add is storing a string name into the storybook module
        //module is saying im gonna store a section into storybook browser with props
    />)
