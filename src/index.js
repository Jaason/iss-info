import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Position from './components/Position';

// Render the main component into the dom
ReactDOM.render(
  <Position />,
  document.querySelector('[data-iss-position]')
);
