import React, { useContext, useEffect } from 'react';
import { createImage } from '../../utils/grid';
import styles from './Grid.css';
import Pixl from './Pixl';
import { imageContext } from '../../context/ImageContext';

export default function Grid() {
  const array = [];
  const { image } = useContext(imageContext);

  console.log(image);

  // useEffect(() => {
  //   const res = createImage('title', 10, 10);
  //   // console.log(res);
  // }, []);

  for (let i = 0; i < 100; i++) {
    array.push(<Pixl />);
  }
  return (
    <div
      className={styles.Grid}
      style={{
        gridTemplateColumns: `repeat(${image.width}, 1fr)`,
        gridTemplateRows: `repeat(${image.height}, 1fr)`,
      }}
    >
      {array.map((item) => item)}
    </div>
  );
}
