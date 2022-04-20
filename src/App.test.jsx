import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

it('Renders PIXL2', async () => {
  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );
  const header = await screen.findByRole('heading', { name: /pixl 2/i });

  expect(header).toBeInTheDocument();
});
