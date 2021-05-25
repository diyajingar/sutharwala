import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as router } from 'react-router-dom';

ReactDOM.render(
  <router basename="/sutharwala">
    <App />
  </router>,
  document.getElementById('root')
);

reportWebVitals();