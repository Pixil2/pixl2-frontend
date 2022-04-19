import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import styles from './Home.css';
import pixelImg from '../../assets/rainbowpattern.png';

export default function Home() {
  return (
    <div className={styles.Home}>
      <Header />
      <main className={styles.homeContainer}>
        <div className={styles.leftSide}>
          <h4 className={styles.leftSideCaption}>
            A interactive tool that brings your creativity to life one pixel at
            a time.
          </h4>
          <div className={styles.signIn}>
            <a href="http://localhost:7890/api/v1/users/login">
              <button className={styles.button}>Sign-in with Github</button>
            </a>
            <Link to="/canvas">
              <button className={styles.button}>Continue as Guest</button>
            </Link>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={pixelImg} alt="pixel image" className={styles.pixelImg} />
        </div>
      </main>
    </div>
  );
}
