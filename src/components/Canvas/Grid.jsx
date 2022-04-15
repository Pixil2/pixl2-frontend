import React, { useEffect, useState } from 'react';
import styles from './Grid.css';
import Pixl from './Pixl';
import { v4 as uuid } from 'uuid';

export default function Grid({ image, setImage }) {
  // const [image, setImage] = useState(createImage('title', 10, 10));
  const [pixelArray, setPixelArray] = useState([]);

  function renderImage(imageObject) {
    const colorArray = imageObject.colorArray;
    const area = imageObject.height * imageObject.width;
    const image = [];

    for (let i = 0; i < area; i++) {
      if (imageObject.height >= imageObject.width) {
        image.push(
          <Pixl
            pixelIndex={i}
            key={uuid()}
            background={colorArray[i]}
            width={`${Math.round(500 / imageObject.height)}px`}
            height={`${Math.round(500 / imageObject.height)}px`}
            handleClick={handleClick}
            index={i}
          />
        );
      } else {
        image.push(
          <Pixl
            pixelIndex={i}
            key={uuid()}
            background={colorArray[i]}
            width={`${Math.round(500 / imageObject.width)}px`}
            height={`${Math.round(500 / imageObject.width)}px`}
            handleClick={handleClick}
            index={i}
          />
        );
      }
    }

    setPixelArray(image);
  }

  const handleClick = async (index) => {
    const newImage = { ...image };
    newImage.colorArray[index] = 'rgb(0, 0, 0)';

    setImage(newImage);
  };

  useEffect(() => {
    renderImage(image);
  }, [image]);

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
