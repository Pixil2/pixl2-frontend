import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import styles from './Home.css';

export default function Home() {
  const onClick = () => {
    window.location.href = './canvas';
  };
  return (
    <div>
      <Header />
      <main className={styles.Home}>
        <div className={styles.leftSide}>
          <h4>Pixl description</h4>
          <div className={styles.signIn}>
            <a href="http://localhost:7890/api/v1/users/login">
              <button className={styles.link}>Sign In with Github</button>
            </a>
            <Link to="/canvas">
              <button onClick={onClick}>Continue as Guest</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
