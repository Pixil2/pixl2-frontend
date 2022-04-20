import React from 'react';
import Header from '../../components/Layout/Header';
import styles from './Home.css';
import pixelImg from '../../assets/rainbowpattern.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/canvas');
  };

  //refactor to use API_URL
  const handleSignIn = () => {
    window.location.href = `${process.env.API_URL}/api/v1/users/login`;
  };

  return (
    <div className={styles.Home}>
      <Header />
      <main className={styles.homeContainer}>
        <div className={styles.leftSide}>
          <h4 className={styles.leftSideCaption}>
            An interactive tool that brings creativity to life one pixel at a
            time.
          </h4>
          <div className={styles.signIn}>
            <button className={styles.button} onClick={handleSignIn}>
              Sign-in with Github
            </button>
            <button onClick={handleContinue} className={styles.button}>
              Continue as Guest
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
