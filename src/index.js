import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/tailwindcss/dist/base.css';
import '../node_modules/tailwindcss/dist/components.css';
import '../node_modules/tailwindcss/dist/utilities.css';
import '../node_modules/tailwindcss/dist/tailwind.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();