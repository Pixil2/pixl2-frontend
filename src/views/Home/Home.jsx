import React from 'react';
import Header from '../../components/Layout/Header';
import styles from './Home.css';
import pixelImg from '../../assets/rainbowpattern.png';

export default function Home() {
  const onClick = () => {
    window.location.href = './canvas';
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
            <a href="http://localhost:7890/api/v1/users/login">
              <button className={styles.button}>Sign-in with Github</button>
            </a>
            <button onClick={onClick} className={styles.button}>
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
