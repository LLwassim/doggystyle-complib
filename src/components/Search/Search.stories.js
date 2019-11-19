import React from 'react';
import { storiesOf } from '@storybook/react';
//importing storiesOf(prebaked method) from the storybook component
import "./Search.css";
import Search from './Search';
//importing a button from the button component


storiesOf('Search', module)
    .add('Search', () => <Search
        //the first paramater of add is storing a string name into the storybook module
        //module is saying im gonna store a section into storybook browser with props
    />)
  