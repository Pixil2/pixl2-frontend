import { useEffect, useState } from 'react';
import { getUserImages, deleteImageById } from '../../services/images';
import ProfileGrid from '../../components/Profile/ProfileGrid';
import { getCurrentUser } from '../../services/users';
import { v4 as uuid } from 'uuid';
import styles from './Profile.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import { getTagByImageId } from '../../services/tags';

export default function Profile() {
  const [currentImages, setCurrentImages] = useState([]);
  const navigate = useNavigate();

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
  }, []);

  const handleEdit = (id) => {
    navigate(`/canvas/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteImageById(id);
    const newCurrentImages = currentImages.filter((item) => item.id !== id);
    setCurrentImages(newCurrentImages);
  };

  return (
    <div className={styles.Profile}>
      <Header />
      <div className={styles.profileHeader}>
        <h1 className={styles.profileTitle}>User Gallery</h1>
        <p className={styles.profileCaption}>
          Hey, nice work. Check out all of your amazing artwork below or get
          back in there and make some more!
        </p>
        <Link to="/canvas">
          <button className={`${styles.createButton} ${styles.imageButton}`}>
            CREATE IMAGE
          </button>
        </Link>
      </div>
      <div className={styles.ProfileContainer}>
        {currentImages.map((item, index) => {
          const tag = item.tags[0].name;
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
                  EDIT
                </button>
                <button
                  className={styles.imageButton}
                  value={item.id}
                  onClick={(e) => handleDelete(e.target.value)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
