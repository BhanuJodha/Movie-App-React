import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './components/App';
import reducers from "./reducers";

const middelware = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === "function"){
    action(dispatch);
    return;
  }
  next(action);
}

const store = createStore(reducers, applyMiddleware(middelware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App store={store} />
);
