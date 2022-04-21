export const signIn = async ({ username }) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({ username }),
  });

  if (!res.ok) throw new Error('Invalid login credentials');

  return res.json();
};

export const signOut = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
};

export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });

    return res.json();
  } catch (error) {
    return null;
  }
};
