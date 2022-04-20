import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Canvas from './Canvas';
import { UserProvider } from '../../context/UserContext';

it('Renders the staging form page for Canvas when the user is not signed in', async () => {
  render(
    <UserProvider>
      <MemoryRouter initialEntries={['/canvas']}>
        <Routes>
          <Route exact path="/canvas" element={<Canvas />} />
        </Routes>
      </MemoryRouter>
    </UserProvider>
  );

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const logo = await screen.findByRole('heading', { name: /pixl 2/i });
  const profileLink = screen.getByRole('link', { name: /profile/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  const instructions = screen.getByText(
    /let's get started! please give your artwork a title and a size \(1 \- 30\)\./i
  );
  const inputHead1 = screen.getByText(/title:/i);
  const input1 = screen.getByRole('textbox');
  const inputHead2 = screen.getByText(/size:/i);
  const input2 = screen.getByRole('spinbutton');
  const submitBtn = screen.getByRole('button', { name: /submit/i });

  expect(logo).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(instructions).toBeInTheDocument();
  expect(inputHead1).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(inputHead2).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});
