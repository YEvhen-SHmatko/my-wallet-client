import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/normalize.css';
import './fonts/Roboto/Roboto.css';
import './styles/MyNormalize.css';
import './styles/scroll.css';

window.React1 = require('react');

// Добавьте это в ваш файл с компонентом
require('react-dom');
window.React2 = require('react');

console.log(window.React1 === window.React2);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
