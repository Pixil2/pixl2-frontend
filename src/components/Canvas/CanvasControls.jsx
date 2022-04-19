import React, { useState, useEffect } from 'react';
import { saveImage, updateImage } from '../../services/images';
import { getAllTags } from '../../services/tags';
import { getCurrentUser } from '../../services/users';

export default function CanvasControls({ image, edit }) {
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState('unselected');

  useEffect(() => {
    const fetchTags = async () => {
      const res = await getAllTags();
      console.log('res', res);
      setTagList([{ id: 'unselected', name: 'Unselected' }, ...res]);
    };
    fetchTags();
  }, []);

  const handleSave = async (image) => {
    const user = await getCurrentUser();
    image = { ...image, userId: user.id };
    let selectedTag = {};
    tagList.map((item) => {
      if (item.name === tag) {
        selectedTag = item;
      }
    });
    await saveImage(image, selectedTag.id);
    // if (!tag) window.location.href = './profile';
  };

  const handleUpdate = async (image) => {
    await updateImage(image);
    window.location.href = '../../profile';
  };

  return (
    <div>
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        {tagList.map((item) => {
          return <option key={item.id}>{item.name}</option>;
        })}
      </select>
      {tag}
      {!edit && <button onClick={() => handleSave(image)}>Save</button>}
      {edit && <button onClick={() => handleUpdate(image)}>Update</button>}
    </div>
  );
}
