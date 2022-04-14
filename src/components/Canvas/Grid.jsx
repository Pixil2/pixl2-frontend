import React, { useContext } from 'react';
import { renderImage } from '../../utils/grid';
import styles from './Grid.css';
import { imageContext } from '../../context/ImageContext';

export default function Grid() {
  const { image } = useContext(imageContext);
  const array = renderImage(image);

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
