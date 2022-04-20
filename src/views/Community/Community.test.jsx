import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Community from './Community';

it('Tests functionality of profile view', async () => {
  const container = render(
    <UserProvider>
      <MemoryRouter initialEntries={['/profile']}>
        <Routes>
          <Route
            exact
            path="/profile"
            element={
              <Community
                user={{
                  id: 1,
                  username: 'whatever',
                }}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </UserProvider>
  );
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const createButton = await screen.findByRole('button', {
    name: /create image/i,
  });
  expect(createButton).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
