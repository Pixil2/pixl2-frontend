import styles from './Pixl.css';

export default function Pixl({ background, handleClick, index }) {
  return (
    <div
      onMouseDown={() => handleClick(index)}
      className={styles.Pixl}
      style={{ background }}
    ></div>
  );
}
