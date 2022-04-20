import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../../services/users';
import { useCurrentUser } from '../../context/UserContext';
import { saveImage, updateImage } from '../../services/images';
import { getAllTags, saveTag } from '../../services/tags';
import styles from '../../views/Canvas/Canvas.css';

export default function CanvasControls({ image, edit = false }) {
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState('unselected');
  const { user } = useCurrentUser();

  useEffect(() => {
    const fetchTags = async () => {
      const res = await getAllTags();
      setTagList(res);
    };
    fetchTags();
  }, []);

  const handleSave = async (image) => {
    let selectedTag;
    const user = await getCurrentUser();
    image = { ...image, userId: user.id };
    tagList.map((item) => {
      if (item.name === tag) {
        selectedTag = item;
      }
    });
    console.log('selectedTag', selectedTag);
    if (!selectedTag) {
      alert('Please select a tag.');
    } else {
      const res = await saveImage(image);
      saveTag(res.id, selectedTag.id);
      window.location.href = './profile';
    }
  };

  const handleUpdate = async (image) => {
    await updateImage(image);
    window.location.href = '../../profile';
  };

  console.log('user', user);

  return (
    <div className={styles.CanvasControls}>
      {!edit && user.id && (
        <>
          <select
            className={styles.canvasSelect}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option defaultValue>Please add a tag</option>
            {tagList.map((item) => {
              return <option key={item.id}>{item.name}</option>;
            })}
          </select>
          <button
            className={styles.canvasButton}
            onClick={() => handleSave(image)}
          >
            Save
          </button>
        </>
      )}
      {!user.id && (
        <>
          <p>To create a profile and save your image, please sign in!</p>{' '}
          <button className={styles.canvasButton}>Download</button>
        </>
      )}
      {edit && (
        <>
          <button
            className={styles.canvasButton}
            onClick={() => handleUpdate(image)}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
}
