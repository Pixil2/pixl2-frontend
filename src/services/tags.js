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

export const getTagByImageId = async (imageId) => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/images/${imageId}/tags`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    }
  );
  return await res.json();
};

export const getImageByTagId = async (tagId) => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/tags/${tagId}/images`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    }
  );
  return await res.json();
};
