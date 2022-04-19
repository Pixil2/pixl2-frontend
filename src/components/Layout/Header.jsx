import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  const toProfile = () => {
    window.location.href = './profile';
  };

  const toAbout = () => {
    window.location.href = './about';
  };

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
      </div>
    </header>
  );
}
