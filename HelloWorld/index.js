import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

function App(props) {
  return(
    <h1> Hello {props.name}! </h1>
  );
}
 
render(<App name="Manivannan"/>, document.getElementById('root'));
