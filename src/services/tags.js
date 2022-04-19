export const getAllTags = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/tags`, {
    credentials: 'include',
  });
  return res.json();
};
