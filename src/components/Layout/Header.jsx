import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.logo}>PIXL</h1>
      <Link to="/profile">
        <p className={styles.gallery}>Gallery</p>
      </Link>
    </header>
  );
}
