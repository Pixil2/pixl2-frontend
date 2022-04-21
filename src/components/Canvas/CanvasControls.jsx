import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../../services/users';
import { useCurrentUser } from '../../context/UserContext';
import { saveImage, updateImage } from '../../services/images';
import { getAllTags, saveTag } from '../../services/tags';
import styles from '../../views/Canvas/Canvas.css';
import { useNavigate } from 'react-router-dom';

export default function CanvasControls({ image, edit = false }) {
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState('unselected');
  const { user } = useCurrentUser();
  const navigate = useNavigate();

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
    if (!selectedTag) {
      alert('Please select a tag.');
    } else {
      const res = await saveImage(image);
      saveTag(res.id, selectedTag.id);
      navigate('/profile');
    }
  };

  const handleUpdate = async (image) => {
    await updateImage(image);
    navigate('/profile');
  };

  const handleClick = async () => {
    navigate('/');
  };

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
            SAVE
          </button>
        </>
      )}
      {!user.id && (
        <div onClick={handleClick} className={styles.guestControls}>
          <button className={styles.canvasButton}>GO BACK HOME</button>
          <p>To save your image, please sign in!</p>
        </div>
      )}
      {edit && (
        <>
          <button
            className={styles.canvasButton}
            onClick={() => handleUpdate(image)}
          >
            UPDATE
          </button>
        </>
      )}
    </div>
  );
}
