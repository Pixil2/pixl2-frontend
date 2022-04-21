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

const user = {
  id: 1,
  username: 'whatever',
};

const server = setupServer(
  rest.get('/me', (req, res, ctx) => {
    return res(ctx.json(user));
  }),
  rest.get('/images', (req, res, ctx) => {
    return res(ctx.json(image));
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('Tests functionality of profile view', async () => {
  const container = render(
    <UserProvider>
      <MemoryRouter initialEntries={['/profile']}>
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
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
