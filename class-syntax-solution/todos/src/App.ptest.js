import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './app';

it('renders shallowly without crashing', function () {
  shallow(<App />);
});

it('renders completely without crashing', function () {
  mount(<App />);
});
