import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import styles from './Home.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.Home}>
        <div className={styles.leftSide}>
          <h4>Pixl description</h4>
          <div className={styles.signIn}>
            <Link>
              <button className={styles.link}>Sign In with Github</button>
            </Link>
            <Link to="/canvas">
              <button>Continue as Guest</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
