import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router}  from 'react-router-dom';

import ReactRouter from './router/router';
import './index.scss';
import { store } from './store';

ReactDOM.render(
  <Router>
    <Provider store = { store }>
      <ReactRouter/>
    </Provider>
  </Router>,
   document.getElementById('root')
);
