import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './redux/store';
import State from './hooks/state';
import './styles/normalize.css';
import './fonts/Roboto/Roboto.css';
import './styles/MyNormalize.css';
import './styles/scroll.css';

ReactDOM.render(
  <React.StrictMode>
    <State>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </State>
  </React.StrictMode>,
  document.getElementById('root'),
);
