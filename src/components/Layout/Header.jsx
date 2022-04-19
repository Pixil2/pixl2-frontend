import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  const onClick = () => {
    window.location.href = './profile';
  };
  return (
    <header className={styles.Header}>
      <div className={styles.headerLogo}>
        <h1>PIXL 2</h1>
      </div>
      <div className={styles.headerLinkContainer}>
        <Link className={styles.headerLink} onClick={onClick}>
          Profile
        </Link>
        <Link className={styles.headerLink} to="/about">
          About
        </Link>
      </div>
    </header>
  );
}
