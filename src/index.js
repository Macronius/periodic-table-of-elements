import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { SelectedValueProvider } from './contexts/selectedValue.context';
import { ElementProvider } from './contexts/element.context';

import './styles/index.css';


ReactDOM.render(
  <React.StrictMode>
    <SelectedValueProvider>
      <ElementProvider>
      <App />
      </ElementProvider>
    </SelectedValueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);