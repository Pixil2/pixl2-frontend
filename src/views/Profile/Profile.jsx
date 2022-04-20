import { useEffect, useState } from 'react';
import { getUserImages, deleteImageById } from '../../services/images';
import ProfileGrid from '../../components/Profile/ProfileGrid';
import { getCurrentUser } from '../../services/users';
import { v4 as uuid } from 'uuid';
import styles from './Profile.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import { getTagByImageId } from '../../services/tags';

export default function Profile() {
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const user = await getCurrentUser();
      const res = await getUserImages(user.id);
      const tagArray = [];
      await Promise.all(
        res.map(async (item) => {
          const thing = await getTagByImageId(item.id);
          tagArray.push({ ...thing });
        })
      );
      setCurrentImages(tagArray);
    };
    fetch();
  }, [user]);

  const handleClick = () => {
    window.location.href = './canvas';
  };

  const handleEdit = (id) => {
    window.location.href = `./canvas/edit/${id}`;
  };

  const handleDelete = async (id) => {
    await deleteImageById(id);
    const newCurrentImages = currentImages.filter((item) => item.id !== id);
    setCurrentImages(newCurrentImages);
  };

  return (
    <div className={styles.Profile}>
      <Header />
      <Link to="/canvas">
        <button onClick={handleClick}>Create Image</button>
      </Link>
      <div className={styles.ProfileContainer}>
        {currentImages.map((item, index) => {
          const tag = item.tags[0].name;
          console.log(tag);
          return (
            <div key={uuid()}>
              <p>{item.title}</p>
              <ProfileGrid image={item} />
              <button
                value={item.id}
                onClick={(e) => handleEdit(e.target.value)}
              >
                edit
              </button>
              <button
                value={item.id}
                onClick={(e) => handleDelete(e.target.value)}
              >
                delete
              </button>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}
