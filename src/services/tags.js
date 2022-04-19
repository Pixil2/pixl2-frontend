export const getAllTags = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/tags`, {
    credentials: 'include',
  });
  return res.json();
};

export const saveTag = async (imageId, tagId) => {
  await fetch(`${process.env.API_URL}/api/v1/images/${imageId}/tags/${tagId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
};
