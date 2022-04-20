import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext';

it('Renders PIXL2', async () => {
  render(
    <UserProvider>
      <MemoryRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </UserProvider>
  );
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const header = await screen.findByRole('heading', { name: /pixl 2/i });
  expect(header).toBeInTheDocument();
});
