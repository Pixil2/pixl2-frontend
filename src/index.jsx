import React, { StrictMode } from 'react';
import App from './App';
import { ProvideImage } from './context/ImageContext';
import { UserProvider } from './context/UserContext';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <UserProvider>
      <ProvideImage>
        <App />
      </ProvideImage>
    </UserProvider>
  </StrictMode>
);
