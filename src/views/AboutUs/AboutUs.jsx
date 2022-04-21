import React from 'react';
import Header from '../../components/Layout/Header';
import styles from './AboutUs.css';
import rainbowpattern from '../../assets/rainbowpattern.png';

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className={styles.AboutUs}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <div className={styles.aboutBioContainer}>
          <div className={styles.aboutBio}>
            <img src={rainbowpattern} alt="" />
            <h3>Phoenix Nicholson</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              dignissim nibh. Mauris vel risus elementum, facilisis dui vitae,
              bibendum metus. Donec facilisis efficitur aliquet. Sed tincidunt
              dictum dolor a faucibus. Proin ex purus, accumsan ac dolor eu,
              vulputate commodo ipsum.
            </p>
          </div>
          <div className={styles.aboutBio}>
            <img src={rainbowpattern} alt="" />
            <h3>James Demiraiakian</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              dignissim nibh. Mauris vel risus elementum, facilisis dui vitae,
              bibendum metus. Donec facilisis efficitur aliquet. Sed tincidunt
              dictum dolor a faucibus. Proin ex purus, accumsan ac dolor eu,
              vulputate commodo ipsum.
            </p>
          </div>
          <div className={styles.aboutBio}>
            <img src={rainbowpattern} alt="" />
            <h3>Andrew Joy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              dignissim nibh. Mauris vel risus elementum, facilisis dui vitae,
              bibendum metus. Donec facilisis efficitur aliquet. Sed tincidunt
              dictum dolor a faucibus. Proin ex purus, accumsan ac dolor eu,
              vulputate commodo ipsum.
            </p>
          </div>
          <div className={styles.aboutBio}>
            <img src={rainbowpattern} alt="" />
            <h3>Emma Egstad</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              dignissim nibh. Mauris vel risus elementum, facilisis dui vitae,
              bibendum metus. Donec facilisis efficitur aliquet. Sed tincidunt
              dictum dolor a faucibus. Proin ex purus, accumsan ac dolor eu,
              vulputate commodo ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
