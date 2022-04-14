import { useContext } from 'react';
import styles from './Pixl.css';
import { imageContext } from '../../context/ImageContext';

export default function Pixl(background) {
  const { image, eraser } = useContext(imageContext);
  const eraserArr = eraser.colors;
  const colorArr = image.colors;

  const handleClick = () => {
    console.log(tool);
  };
  return (
    <div onClick={handleClick} className={styles.Pixl} style={background}></div>
  );
}
