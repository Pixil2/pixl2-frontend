import React, { useContext, useEffect } from 'react';
import { createImage, renderImage } from '../../utils/grid';
import styles from './Grid.css';
import Pixl from './Pixl';
import { imageContext } from '../../context/ImageContext';

export default function Grid() {
  const { image } = useContext(imageContext);
  const array = renderImage(image);

  const area = image.height * image.width;
  useEffect(() => {
    const res = createImage('title', 10, 10);
  }, []);

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
