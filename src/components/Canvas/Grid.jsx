import React, { useContext } from 'react';
import { renderImage } from '../../utils/grid';
import styles from './Grid.css';
import { imageContext } from '../../context/ImageContext';

export default function Grid(tool) {
  const { image, index, setPixelArray } = useContext(imageContext);

  const pixelArray = renderImage(image);

  const pixelClick = () => {
    console.log('array', pixelArray[i]);
  };

  return (
    <div
      className={styles.Grid}
      style={{
        gridTemplateColumns: `repeat(${image.width}, 1fr)`,
        gridTemplateRows: `repeat(${image.height}, 1fr)`,
      }}
    >
      {pixelArray.map((item) => item)}
    </div>
  );
}
