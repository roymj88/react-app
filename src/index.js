import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App cat={2} txt="This is the prop value" />,
  document.getElementById('root')
);
