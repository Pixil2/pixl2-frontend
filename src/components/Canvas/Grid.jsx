import React from 'react';
import styles from './Grid.css';
import Pixl from './Pixl';

export default function Grid() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(<Pixl />);
  }
  return <div className={styles.Grid}>{array.map((item) => item)}</div>;
}
