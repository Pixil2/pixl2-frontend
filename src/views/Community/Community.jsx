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

export default function Community() {
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
    <div className={styles.Profile}>
      <Header />
      <Link to="/canvas">
        <button>Create Image</button>
      </Link>
      <div className={styles.ProfileContainer}>
        {currentImages.map((item, index) => {
          const tag = item.tags[0].name;
          console.log(tag);
          return (
            <div key={uuid()}>
              <p>{item.title}</p>
              <ProfileGrid image={item} />
              Tag: {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}
