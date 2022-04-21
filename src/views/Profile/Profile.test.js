import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Profile from './Profile';

const server = setupServer(
  rest.get('/user/:userId', (req, res, ctx) => {
    return res(
      ctx({
        id: expect.any(String),
        title: 'A title',
        height: 10,
        width: 10,
        colorArray: [
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(215, 215, 215)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(243, 243, 244)',
          'rgb(216, 216, 217)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
        ],
        userId: '2',
        isPublic: false,
        isApproved: null,
      })
    );
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('Tests functionality of profile view', async () => {
  render(
    <UserProvider>
      <MemoryRouter initialEntries={['/profile']}>
        <Routes>
          <Route
            exact
            path="/profile"
            element={<Profile user={{ id: 1, username: 'whatever' }} />}
          />
        </Routes>
      </MemoryRouter>
    </UserProvider>
  );
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  screen.debug();
  const createButton = await screen.findByRole('button', {
    name: /create image/i,
  });
  expect(createButton).toBeInTheDocument();
});
