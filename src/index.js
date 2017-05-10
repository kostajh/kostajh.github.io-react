import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import withTracker from './components/withTracker';

ReactDOM.render(
  <BrowserRouter>
    <Route component={withTracker(App)} />
  </BrowserRouter>,
  document.getElementById('root')
);
