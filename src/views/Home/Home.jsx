import React from 'react';
import Header from '../../components/Layout/Header';
import styles from './Home.css';
import pixelImg from '../../assets/pattern.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/canvas');
  };

  const handleSignIn = () => {
    window.location.href = `${process.env.API_URL}/api/v1/users/login`;
  };

  return (
    <div className={styles.Home}>
      <Header />
      <main className={styles.homeContainer}>
        <div className={styles.leftSide}>
          <h4 className={styles.leftSideCaption}>
            Bringing your creativity to life one pixel at a time.
          </h4>
          <div className={styles.signIn}>
            <button className={styles.button} onClick={handleSignIn}>
              SIGN-IN WITH GITHUB
            </button>
            <button
              onClick={handleContinue}
              className={`${styles.button} ${styles.continue}`}
            >
              CONTINUE AS GUEST
            </button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={pixelImg} alt="pixel image" className={styles.pixelImg} />
        </div>
      </main>
    </div>
  );
}
