import React from 'react';
import { storiesOf } from '@storybook/react';
//importing storiesOf(prebaked method) from the storybook component
import "./Results.css";
import Results from './Results';
//importing a button from the button component


storiesOf('Results', module)
    .add('Results', () => <Results
        //the first paramater of add is storing a string name into the storybook module
        //module is saying im gonna store a section into storybook browser with props
      
    />)
 