import React, { useEffect, useState } from 'react';
import styles from './Grid.css';
import Pixl from './Pixl';
import { v4 as uuid } from 'uuid';

export default function Grid({ image, setImage, tool, eraser, color }) {
  const [pixelArray, setPixelArray] = useState([]);
  const [rainbowIndex, setRainbowIndex] = useState(0);

  const rainbowArray = [
    '#f54242',
    '#f59642',
    '#f5e942',
    '#84f542',
    '#42ddf5',
    '#b15beb',
    '#f779b4',
  ];

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

  const handleClick = (index) => {
    const newImage = { ...image };
    let i = rainbowIndex;

    if (tool === 'pencil') {
      newImage.colorArray[index] = color;
    } else if (tool === 'eraser') {
      newImage.colorArray[index] = eraser.colorArray[index];
    } else if (tool === 'rainbow') {
      if (rainbowIndex === 6) {
        i = 0;
        newImage.colorArray[index] = rainbowArray[rainbowIndex];
        setRainbowIndex(i);
        i++;
      } else {
        newImage.colorArray[index] = rainbowArray[rainbowIndex];
        i++;
        setRainbowIndex(i);
      }
    }
    setImage(newImage);
  };

  useEffect(() => {
    renderImage(image);
  }, [image, tool, color]);

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
