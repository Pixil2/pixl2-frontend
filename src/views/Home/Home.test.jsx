import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
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
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const banner = await screen.findByRole('banner');
  within(banner).getByRole('img');
  const communityLink = screen.getByRole('link', { name: /community/i });
  const profileLink = screen.getByRole('link', { name: /profile/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  const description = screen.getByRole('heading', {
    name: /bringing your creativity to life one pixel at a time\./i,
  });
  const picture = screen.getByRole('img', { name: /pixel image/i });
  const signInBtn = screen.getByRole('button', {
    name: /sign\-in with github/i,
  });
  const guestBtn = screen.getByRole('button', { name: /continue as guest/i });

  expect(banner).toBeInTheDocument();
  expect(communityLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(picture).toBeInTheDocument();
  expect(signInBtn).toBeInTheDocument();
  expect(guestBtn).toBeInTheDocument();
});
