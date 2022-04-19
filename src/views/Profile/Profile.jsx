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
      setCurrentImages(res);
    };
    fetch();
  }, []);

  const onClick = () => {
    window.location.href = './canvas';
  };

  const editBtn = (id) => {
    window.location.href = `./canvas/edit/${id}`;
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
              <p>{item.title}</p>
              <ProfileGrid image={item} />
              <button value={item.id} onClick={(e) => editBtn(e.target.value)}>
                edit
              </button>
              <button>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
