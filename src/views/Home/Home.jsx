import React from 'react';
import Header from '../../components/Layout/Header';
import styles from './Home.css';
import pixelImg from '../../assets/rainbowpattern.png';
import { useCurrentUser } from '../../context/UserContext';

export default function Home() {
  const { user } = useCurrentUser();

  const handleContinue = () => {
    window.location.href = './canvas';
  };

  const handleSignIn = () => {
    window.location.href = 'http://localhost:7890/api/v1/users/login';
  };

  console.log('user', user);

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
