import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';

import App from './App';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
