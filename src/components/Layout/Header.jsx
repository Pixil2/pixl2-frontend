import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.css';
import { useCurrentUser } from '../../context/UserContext';
import logo from '../../assets/logo.svg';

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

  const navLinks = () => {
    if (location.pathname === '/profile') {
      return (
        <>
          <Link className={styles.headerLink} to="/community">
            Community
          </Link>
          <Link className={styles.headerLink} to="/about">
            About
          </Link>
        </>
      );
    }
    if (location.pathname === '/community') {
      return (
        <>
          <Link className={styles.headerLink} to="/profile">
            Profile
          </Link>
          <Link className={styles.headerLink} to="/about">
            About
          </Link>
        </>
      );
    } else if (location.pathname === '/about') {
      return (
        <>
          <Link className={styles.headerLink} to="/community">
            Community
          </Link>
          <Link className={styles.headerLink} to="/profile">
            Profile
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className={styles.headerLink} to="/community">
            Community
          </Link>
          <Link className={styles.headerLink} to="/profile">
            Profile
          </Link>
          <Link className={styles.headerLink} to="/about">
            About
          </Link>
        </>
      );
    }
  };

  return (
    <header className={styles.Header}>
      <img className={styles.headerLogo} src={logo} onClick={handleClick} />
      <div className={styles.headerLinkContainer}>
        {navLinks()}
        {user?.id && (
          <button className={styles.headerButton} onClick={handleLogOut}>
            SIGN OUT
          </button>
        )}
      </div>
    </header>
  );
}
