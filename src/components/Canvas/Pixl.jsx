import React from 'react';
import styles from './Pixl.css';

export default function Pixl() {
  const handleClick = () => {
    console.log('something');
  };
  return <div onClick={handleClick} className={styles.Pixl}></div>;
}
