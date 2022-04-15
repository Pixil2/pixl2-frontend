import styles from './Pixl.css';

export default function Pixl({ background, handleClick, index }) {
  return (
    <div
      onClick={() => handleClick(index)}
      className={styles.Pixl}
      style={{ background }}
    ></div>
  );
}
