import React, { StrictMode } from 'react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
