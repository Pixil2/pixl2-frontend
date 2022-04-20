import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.css';
import { useCurrentUser } from '../../context/UserContext';

export default function Header() {
  const { user, logout } = useCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);

  const handleLogOut = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className={styles.Header}>
      <h1 className={styles.headerLogo}>PIXL 2</h1>
      <div className={styles.headerLinkContainer}>
        {location.pathname === '/profile' ? (
          <Link className={styles.headerLink} to="/community">
            Community Gallery
          </Link>
        ) : (
          <Link className={styles.headerLink} to="/profile">
            Profile
          </Link>
        )}
        <Link className={styles.headerLink} to="/about">
          About
        </Link>
        {user.id && (
          <button className={styles.headerButton} onClick={handleLogOut}>
            Log Out
          </button>
        )}
      </div>
    </header>
  );
}
