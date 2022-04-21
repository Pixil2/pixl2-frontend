import dotenv from 'dotenv';
dotenv.config();
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
  id: '1',
  title: 'A title',
  height: 10,
  width: 10,
  colorArray: ['rgb(0, 0, 0)'],
  userId: '100',
  isPublic: false,
  isApproved: null,
  tags: [{ name: 'nick cage' }],
};

const user = {
  id: '100',
  username: 'testUser',
};

const server = setupServer(
  rest.get(`${process.env.API_URL}/api/v1/images/user/100`, (req, res, ctx) => {
    return res(ctx.json([image]));
  }),
  rest.get(`${process.env.API_URL}/api/v1/images/1/tags`, (req, res, ctx) => {
    return res(ctx.json([image]));
  }),
  rest.get(`${process.env.API_URL}/api/v1/images`, (req, res, ctx) => {
    return res(ctx.json([image]));
  }),
  rest.get(`${process.env.API_URL}/api/v1/users/me`, (req, res, ctx) => {
    return res(ctx.json(user));
  }),
  rest.post(`${process.env.API_URL}/api/v1/users/me`, (req, res, ctx) => {
    return res(ctx.json(user));
  })
);
describe('Profile', () => {
  beforeAll(() => {
    // jest.useFakeTimers();
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it.skip('Tests functionality of profile view', async () => {
    const { container } = render(
      <UserProvider>
        <MemoryRouter initialEntries={['/profile']}>
          <Routes>
            <Route path="/profile" element={<Profile />} />
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
});
