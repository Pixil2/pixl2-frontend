import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Community from './Community';

const image = {
  id: expect.any(String),
  title: 'A title',
  height: 10,
  width: 10,
  colorArray: ['rgb(0, 0, 0)'],
  userId: '1',
  isPublic: false,
  isApproved: null,
};

it('Tests functionality of Community view', async () => {
  const container = render(
    <UserProvider>
      <MemoryRouter initialEntries={['/community']}>
        <Routes>
          <Route
            exact
            path="/community"
            element={
              <Community
                user={{
                  id: 1,
                  username: 'whatever',
                }}
                image={{ image }}
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
