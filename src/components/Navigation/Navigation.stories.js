import React from 'react';
import { storiesOf } from '@storybook/react';
//importing storiesOf(prebaked method) from the storybook component
import "./Navigation.css";
import Navigation from './Navigation';
//importing a navigation bar from the navigation component


storiesOf('Nav', module)
    .add('Nav', () => <Navigation
        //the first paramater of add is storing a string name into the storybook module
        //module is saying im gonna store a section into storybook browser with props
       
    />)
  