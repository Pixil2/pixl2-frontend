import React, { useState, useEffect } from 'react';
import { saveImage, updateImage } from '../../services/images';
import { getAllTags, saveTag } from '../../services/tags';
import { getCurrentUser } from '../../services/users';
import styles from '../../views/Canvas/Canvas.css';

export default function CanvasControls({ image, edit }) {
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState('unselected');

  useEffect(() => {
    const fetchTags = async () => {
      const res = await getAllTags();
      console.log('res', res);
      setTagList(res);
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

    const res = await saveImage(image);
    console.log(selectedTag);
    // if (selectedTag.id != 1) {
    //   await saveTag(res.id, selectedTag.id);
    // }
    // if (!tag) window.location.href = './profile';
  };

  const handleUpdate = async (image) => {
    await updateImage(image);
    window.location.href = '../../profile';
  };

  return (
    <div className={styles.CanvasControls}>
      <select
        className={styles.canvasSelect}
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      >
        {tagList.map((item) => {
          return <option key={item.id}>{item.name}</option>;
        })}
      </select>
      {!edit && (
        <button
          className={styles.canvasButton}
          onClick={() => handleSave(image)}
        >
          Save
        </button>
      )}
      {edit && (
        <button
          className={styles.canvasButton}
          onClick={() => handleUpdate(image)}
        >
          Update
        </button>
      )}
    </div>
  );
}
