import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { UserProvider } from '../../context/UserContext';

it('Render the Home/Landing Page', async () => {
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

  const logo = await screen.findByRole('heading', { name: /pixl 2/i });
  const profileLink = screen.getByRole('link', { name: /profile/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  const description = screen.getByRole('heading', {
    name: /an interactive tool that brings creativity to life one pixel at a time\./i,
  });
  const picture = screen.getByRole('img', { name: /pixel image/i });
  const signInBtn = screen.getByRole('button', {
    name: /sign\-in with github/i,
  });
  const guestBtn = screen.getByRole('button', { name: /continue as guest/i });

  expect(logo).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(picture).toBeInTheDocument();
  expect(signInBtn).toBeInTheDocument();
  expect(guestBtn).toBeInTheDocument();
});
