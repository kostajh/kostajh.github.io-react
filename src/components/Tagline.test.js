import React from 'react';
import ReactDOM from 'react-dom';
import Tagline from './Tagline';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tagline />, div);
});
