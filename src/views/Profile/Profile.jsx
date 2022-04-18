import { useEffect, useState } from 'react';
import { getUserImages } from '../../services/images';
import ProfileGrid from '../../components/Profile/ProfileGrid';
import { getCurrentUser } from '../../services/users';
import { v4 as uuid } from 'uuid';
import styles from './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const user = await getCurrentUser();
      const res = await getUserImages(user.id);
      console.log('res', res);
      setCurrentImages(res);
    };
    fetch();
  }, []);

  const onClick = () => {
    window.location.href = './canvas';
  };

  return (
    <div className={styles.Profile}>
      <Link to="/canvas">
        <button onClick={onClick}>Create Image</button>
      </Link>
      <div className={styles.ProfileContainer}>
        {currentImages.map((item) => {
          return (
            <div key={uuid()}>
              <ProfileGrid image={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
