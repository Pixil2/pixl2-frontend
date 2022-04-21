import { useEffect, useState } from 'react';
import { getUserImages, deleteImageById } from '../../services/images';
import ProfileGrid from '../../components/Profile/ProfileGrid';
import { v4 as uuid } from 'uuid';
import styles from './Profile.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import { getTagByImageId } from '../../services/tags';
import { useCurrentUser } from '../../context/UserContext';

export default function Profile() {
  const [currentImages, setCurrentImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      //   const user = await getCurrentUser();
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
  }, []);

  const handleEdit = (id) => {
    navigate(`/canvas/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteImageById(id);
    const newCurrentImages = currentImages.filter((item) => item.id !== id);
    setCurrentImages(newCurrentImages);
  };

  console.log('user', user);

  return (
    <div className={styles.Profile}>
      <Header />
      <div className={styles.profileHeader}>
        <h1 className={styles.profileTitle}>User Gallery</h1>
        <p className={styles.profileCaption}>
          hey nice work! checkout all of your awesome artwork below or create a
          new image!
        </p>
      </div>
      <Link to="/canvas">
        <button className={`${styles.createButton} ${styles.imageButton}`}>
          Create Image
        </button>
      </Link>
      <div className={styles.ProfileContainer}>
        {currentImages.map((item, index) => {
          //   const tag = item.tags[0].name;
          //   console.log(tag);
          return (
            <div key={uuid()}>
              <div className={styles.imageHeader}>
                <h1 className={styles.imageTitle}>{item.title}</h1>
                <p className={styles.imageTag}>{tag}</p>
              </div>
              <ProfileGrid image={item} />
              <div className={styles.imageButtons}>
                <button
                  className={styles.imageButton}
                  value={item.id}
                  onClick={(e) => handleEdit(e.target.value)}
                >
                  edit
                </button>
                <button
                  className={styles.imageButton}
                  value={item.id}
                  onClick={(e) => handleDelete(e.target.value)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
