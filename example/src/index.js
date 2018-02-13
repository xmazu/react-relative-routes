import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './App';

ReactDOM.render(
  <Router history={createHistory()}>
    <App />
  </Router>,
  document.getElementById('root')
);
