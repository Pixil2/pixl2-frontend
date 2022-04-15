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
  console.log(image);
  const res = await fetch(`${process.env.API_URL}/api/v1/images`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(image),
  });
};
