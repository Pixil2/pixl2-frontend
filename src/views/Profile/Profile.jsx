import { useEffect, useState } from 'react';
import { getUserImages } from '../../services/images';
import ProfileGrid from '../../components/Profile/ProfileGrid';
import { getCurrentUser } from '../../services/users';
import { v4 as uuid } from 'uuid';
import styles from './Profile.css';
import PopUp from '../PopUp/PopUp';

export default function Profile() {
  const [currentImages, setCurrentImages] = useState([]);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const user = await getCurrentUser();
      const res = await getUserImages(user.id);
      console.log('res', res);
      setCurrentImages(res);
    };
    fetch();
  }, []);

  const handlePopup = () => {
    setPopUp(!popUp);
  };

  return (
    <div className={styles.Profile}>
      <button onClick={handlePopup}>Create Image</button>
      {popUp && <PopUp />}
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
