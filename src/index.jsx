import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProvideImage } from './context/ImageContext';

render(
  <React.StrictMode>
    <ProvideImage>
      <App />
    </ProvideImage>
  </React.StrictMode>,
  document.getElementById('root')
);
