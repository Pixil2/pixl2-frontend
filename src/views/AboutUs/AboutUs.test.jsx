import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import AboutUs from './AboutUs';

it('Render the About Page', async () => {
  render(
    <UserProvider>
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </MemoryRouter>
    </UserProvider>
  );

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const banner = await screen.findByRole('banner');
  within(banner).getByRole('img');
  const profileLink = screen.getByRole('link', { name: /profile/i });
  const communityLink = screen.getByRole('link', { name: /community/i });
  const aboutHeading = screen.getByRole('heading', {
    name: /about us/i,
  });
  const aboutName = screen.getByRole('heading', {
    name: /james demiraiakian/i,
  });
  const aboutBio = screen.getByText(
    /the socal saber wielding developer who has the natural understanding of complex code spanning through the whole project and into the database through hard work and dedication to his studies\. james is the coding wizard of the group, able to solve problems and foresee future issues before they become issues\./i
  );
  const footer = screen.getByText(/check out the original project here \|/i);

  expect(banner).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
  expect(communityLink).toBeInTheDocument();
  expect(aboutHeading).toBeInTheDocument();
  expect(aboutName).toBeInTheDocument();
  expect(aboutBio).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
