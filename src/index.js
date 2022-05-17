import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { SelectedValueProvider } from './contexts/selectedValue.context';
import { ElementProvider } from './contexts/element.context';
import { TemperatureValueProvider } from './contexts/temperatureValue.context';
import { DisplayModeProvider } from './contexts/displayMode.context';

import './styles/index.css';


ReactDOM.render(
  <React.StrictMode>
    <SelectedValueProvider>
    <ElementProvider>
    <DisplayModeProvider>
    <TemperatureValueProvider>
    <App />
    </TemperatureValueProvider>
    </DisplayModeProvider>
    </ElementProvider>
    </SelectedValueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);