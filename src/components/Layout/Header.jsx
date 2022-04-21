import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.css';
import { useCurrentUser } from '../../context/UserContext';
import logo from '../../assets/PIXL-logo.png';

export default function Header() {
  const { user, logout } = useCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = async () => {
    await logout();
    navigate('/');
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.Header}>
      <Link to="/">
        <img className={styles.headerLogo} src={logo} />
      </Link>
      <div className={styles.headerLinkContainer}>
        {location.pathname === '/profile' ? (
          <Link className={styles.headerLink} to="/community">
            Community
          </Link>
        ) : (
          <Link className={styles.headerLink} to="/profile">
            Profile
          </Link>
        )}
        <Link className={styles.headerLink} to="/about">
          About
        </Link>
        {user?.id && (
          <button className={styles.headerButton} onClick={handleLogOut}>
            Log Out
          </button>
        )}
      </div>
    </header>
  );
}
