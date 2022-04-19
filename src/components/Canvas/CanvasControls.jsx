import React, { useState, useEffect } from 'react';
import { saveImage, updateImage } from '../../services/images';
import { getAllTags } from '../../services/tags';
import { getCurrentUser } from '../../services/users';

export default function CanvasControls({ image, edit }) {
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const res = await getAllTags();
      setTagList(res);
    };
    fetchTags();
  }, []);

  const handleSave = async (image) => {
    const user = await getCurrentUser();
    image = { ...image, userId: user.id };
    await saveImage(image);
    window.location.href = './profile';
  };

  const handleUpdate = async (image) => {
    await updateImage(image);
    window.location.href = '../../profile';
  };

  return (
    <div>
      <select>
        {tagList.map((item) => {
          return <option key={item.id}>{item.name}</option>;
        })}
      </select>
      {!edit && <button onClick={() => handleSave(image)}>Save</button>}
      {edit && <button onClick={() => handleUpdate(image)}>Update</button>}
    </div>
  );
}
