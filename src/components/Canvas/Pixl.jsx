import { useContext, useEffect, useState } from 'react';
import styles from './Pixl.css';
import { imageContext } from '../../context/ImageContext';
import { createImage, renderImage } from '../../utils/grid';

export default function Pixl({ background, pixelIndex, hello }) {
  const { image, eraser, setIndex, index } = useContext(imageContext);
  const eraserArr = eraser.colors;
  const colorArr = image.colors;

  const handleClick = () => {
    setIndex(pixelIndex);
    image.colors[pixelIndex] = 'rgb(0, 0, 0)';
    console.log(index);
  };

  useEffect(() => {
    renderImage(image);
  }, [image]);

  return (
    <div
      onClick={handleClick}
      className={styles.Pixl}
      style={{ background }}
    ></div>
  );
}
