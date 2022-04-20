import styles from '../../views/Canvas/Canvas.css';
import paletteImg from '../../assets/palette.png';
import pencilImg from '../../assets/pencil.png';
import eraserImg from '../../assets/eraser.png';
import trashImg from '../../assets/trash.png';
import rainbowImg from '../../assets/rainbowheart.png';

export default function Toolbar({
  eraser,
  image,
  setImage,
  setTool,
  color,
  setColor,
}) {
  const handleClick = (selected) => {
    setTool(selected);
  };

  const handleColor = (e) => {
    console.log('e', e.target.value);
    setColor(e.target.value);
    setTool('pencil');
  };

  const handleClear = () => {
    const array = image.colorArray.map((item, index) => {
      return eraser.colorArray[index];
    });
    const newImage = { ...image, colorArray: array };
    setImage(newImage);
  };

  return (
    <div className={styles.ToolBar}>
      <label>
        <img
          className={styles.toolBarInput}
          src={paletteImg}
          alt="palette tool"
        />
        <input type="color" value={color} onChange={(e) => handleColor(e)} />
      </label>
      <button
        className={styles.toolBarButton}
        onClick={() => handleClick('pencil')}
      >
        <img className={styles.toolBarImg} src={pencilImg} alt="pencil-tool" />
      </button>
      <button
        className={styles.toolBarButton}
        onClick={() => handleClick('eraser')}
      >
        <img className={styles.toolBarImg} src={eraserImg} alt="eraser-tool" />
      </button>
      <button className={styles.toolBarButton} onClick={() => handleClear()}>
        <img className={styles.toolBarImg} src={trashImg} alt="trash-tool" />
      </button>
      <button
        className={styles.toolBarButton}
        onClick={() => handleClick('rainbow')}
      >
        <img
          className={styles.toolBarImg}
          src={rainbowImg}
          alt="rainbow-tool"
        />
      </button>
    </div>
  );
}
