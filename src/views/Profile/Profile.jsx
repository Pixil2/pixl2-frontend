import { useEffect, useState } from 'react';
import { getUserImages } from '../../services/images';
import Grid from '../../components/Canvas/Grid';
import { getCurrentUser } from '../../services/users';
import { v4 as uuid } from 'uuid';
import styles from './Profile.css';

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

  return (
    <div className={styles.Profile}>
      {currentImages.map((item) => {
        return <Grid key={uuid()} image={item} />;
      })}
    </div>
  );
}
