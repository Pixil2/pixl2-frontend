import React from 'react';
import Header from '../../components/Layout/Header';
import styles from './AboutUs.css';
import andrew from '../../assets/andrew.jpeg';
import james from '../../assets/james.png';
import phoenix from '../../assets/phoenix.png';
import emma from '../../assets/emma.jpeg';

export default function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <Header />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <div className={styles.aboutBioContainer}>
          <div className={styles.aboutBio}>
            <h3>Phoenix Nicholson</h3>
            <img src={phoenix} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={styles.aboutBioLink}
                href="https://www.linkedin.com/in/phoenix-nicholson/"
              >
                LinkedIn
              </a>{' '}
              |{' '}
              <a
                className={styles.aboutBioLink}
                href="https://github.com/phoenix-nicholson"
              >
                GitHub
              </a>
            </div>
            <p>
              I'm a Full-Stack Software Developer with a passion for expanding
              my knowledge in any subject, as well as working and writing code
              with teams. My hobbies mostly consist of watching anime and
              playing video games.
            </p>
          </div>
          <div className={styles.aboutBio}>
            <h3>James Demiraiakian</h3>
            <img src={james} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={styles.aboutBioLink}
                href="https://www.linkedin.com/in/james-demiraiakian/"
              >
                LinkedIn
              </a>{' '}
              |{' '}
              <a
                className={styles.aboutBioLink}
                href="https://github.com/james-demiraiakian"
              >
                GitHub
              </a>
            </div>
            <p>
              The SoCal Saber wielding developer who has the natural
              understanding of complex code spanning through the whole project
              and into the database through hard work and dedication to his
              studies. James is the coding Wizard of the group, able to solve
              problems and foresee future issues before they become issues.
            </p>
          </div>
          <div className={styles.aboutBio}>
            <h3>Andrew Joy</h3>
            <img src={andrew} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={styles.aboutBioLink}
                href="https://www.linkedin.com/in/andrewjoy12/"
              >
                LinkedIn
              </a>{' '}
              |{' '}
              <a
                className={styles.aboutBioLink}
                href="https://github.com/ajoy267"
              >
                GitHub
              </a>
            </div>
            <p>
              I'm a Full-Stack Software Engineer with a passion and background
              for athletics and gaming. I hope to translate my experience and
              skills into my code. My hobbies include cycling, running, playing
              video games, and binge watching movies.
            </p>
          </div>
          <div className={styles.aboutBio}>
            <h3>Emma Egstad</h3>
            <img src={emma} alt="" />
            <div className={styles.aboutBioLinks}>
              <a
                className={styles.aboutBioLink}
                href="https://www.linkedin.com/in/emmaegstad"
              >
                LinkedIn
              </a>{' '}
              |{' '}
              <a
                className={styles.aboutBioLink}
                href="https://github.com/emmaegstad"
              >
                GitHub
              </a>
            </div>
            <p>
              Emma is a web developer in Portland, OR. She loves to make pixel
              art of all kinds, but especially super adorable pixel cats. In
              addition to pixel art, Emma loves CSS, array methods, and MSW
              (just kidding).
            </p>
          </div>
        </div>
        <p className={styles.aboutCredit}>
          CHECK OUT THE ORIGINAL PROJECT HERE{' '}
          <a href="https://github.com/PIXLAPP/pixel-art-project">GITHUB</a> |{' '}
          <a href="https://pixlapp.github.io/pixel-art-project/">SITE</a>
        </p>
      </div>
    </div>
  );
}
