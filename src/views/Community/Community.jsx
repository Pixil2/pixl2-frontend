import { useEffect, useState } from 'react';
import {
  getUserImages,
  deleteImageById,
  getAllImages,
} from '../../services/images';
import ProfileGrid from '../../components/Profile/ProfileGrid';
import { getCurrentUser } from '../../services/users';
import { v4 as uuid } from 'uuid';
import styles from './Community.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import { getTagByImageId } from '../../services/tags';
import { useCurrentUser } from '../../context/UserContext';

export default function Community() {
  const { user } = useCurrentUser();
  const [currentImages, setCurrentImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllImages();
      const tagArray = [];
      await Promise.all(
        res.map(async (item) => {
          const tags = await getTagByImageId(item.id);
          tagArray.push({ ...tags });
        })
      );
      setCurrentImages(tagArray);
    };
    fetch();
  }, []);

  return (
    <div className={styles.Community}>
      <Header />
      <div className={styles.communityHeader}>
        <h1 className={styles.communityTitle}>Community Gallery</h1>
        <p className={styles.communityCaption}>
          hey nice work! checkout all of your awesome artwork below or create a
          new image!
        </p>
      </div>
      <Link to="/canvas">
        <button className={styles.createButton}>Create Image</button>
      </Link>
      <div className={styles.imageContainer}>
        {currentImages.map((item, index) => {
          const tag = item.tags[0].name;
          console.log(tag);
          return (
            <div key={uuid()}>
              <div className={styles.imageHeader}>
                <h1 className={styles.imageTitle}>{item.title}</h1>
                <p className={styles.imageTag}>{tag}</p>
              </div>
              <ProfileGrid image={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
