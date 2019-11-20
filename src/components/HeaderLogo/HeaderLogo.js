import React from 'react';
import logo from './bone.png';
import './HeaderLogo.css';

class TextInput extends React.Component {
  render() {
    return (
      <div className='logo-wrap'>
        <img src={logo} alt='Logo' />
        <h2>Doggy Styles</h2>
      </div>
    );
  }
};

export default TextInput;