import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.scss';

ReactDOM.hydrate(
  <BrowserRouter basename="/" >
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
