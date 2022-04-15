import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProvideImage } from './context/ImageContext';
import { UserProvider } from './context/UserContext';

render(
  <React.StrictMode>
    <ProvideImage>
      <UserProvider>
        <App />
      </UserProvider>
    </ProvideImage>
  </React.StrictMode>,
  document.getElementById('root')
);
