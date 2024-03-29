export const getAllImages = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/images`, {
    credentials: 'include',
  });

  return res.json();
};

export const getImageById = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/images/${id}`, {
    credentials: 'include',
  });
  return res.json();
};

export const getUserImages = async (userId) => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/images/user/${userId}`,
    {
      credentials: 'include',
    }
  );
  return res.json();
};

export const saveImage = async (image) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/images`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(image),
  });
  return res.json();
};

export const updateImage = async (image) => {
  await fetch(`${process.env.API_URL}/api/v1/images/${image.id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(image),
  });
};

export const deleteImageById = async (id) => {
  await fetch(`${process.env.API_URL}/api/v1/images/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
  });
};
