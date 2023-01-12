import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movie from "./reducers";

const store = createStore(movie);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App store={store} />
);
