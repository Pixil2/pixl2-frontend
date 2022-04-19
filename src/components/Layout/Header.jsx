import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.headerLogo}>
        <h1>PIXL 2</h1>
      </div>
      <div className={styles.headerLinkContainer}>
        <Link className={styles.headerLink} to="/profile">
          Profile
        </Link>
        <Link className={styles.headerLink} to="/about">
          About
        </Link>
      </div>
    </header>
  );
}
