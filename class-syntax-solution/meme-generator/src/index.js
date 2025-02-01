import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { configureStore } from '@reduxjs/toolkit'; // Import from Redux Toolkit
import rootReducer from './rootReducer'; // Your existing root reducer
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// Create the store using Redux Toolkit
const store = configureStore({
  reducer: rootReducer, // Pass your root reducer here
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();