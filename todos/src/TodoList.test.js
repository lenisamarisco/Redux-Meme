import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';
import { configureStore } from '@reduxjs/toolkit'; // Use Redux Toolkit
import { Provider } from 'react-redux';
import reducer from './reducer';

// Create the store using Redux Toolkit
const store = configureStore({
  reducer: reducer,
});

it('renders without crashing', function () {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
});