import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'; // Import from Redux Toolkit
import reducer from './reducer'; // Your existing reducer
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// Create the store using Redux Toolkit
const store = configureStore({
  reducer: reducer, // Pass your reducer here
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