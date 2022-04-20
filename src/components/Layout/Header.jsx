import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.css';
import { useCurrentUser } from '../../context/UserContext';
import { signOut } from '../../services/users';

export default function Header() {
  const { user, logout } = useCurrentUser();
  const navigate = useNavigate();

  const toProfile = () => {
    window.location.href = './profile';
  };

  const toAbout = () => {
    window.location.href = './about';
  };
  const handleLogOut = async () => {
    await logout();
    navigate('/');
  };
  console.log(user);

  return (
    <header className={styles.Header}>
      <h1 className={styles.headerLogo}>PIXL 2</h1>
      <div className={styles.headerLinkContainer}>
        <Link className={styles.headerLink} onClick={toProfile} to="./profile">
          Profile
        </Link>
        <Link className={styles.headerLink} onClick={toAbout} to="./about">
          About
        </Link>
        {user.id && <button onClick={handleLogOut}>Log Out</button>}
      </div>
    </header>
  );
}
