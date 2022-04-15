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
      <h1 className={styles.logo}>PIXL</h1>
      <Link to="/profile" onClick={onClick}>
        <p className={styles.gallery}>Gallery</p>
      </Link>
    </header>
  );
}
