import { useState } from 'react';
import CanvasControls from '../../components/Canvas/CanvasControls';
import Grid from '../../components/Canvas/Grid';
import Toolbar from '../../components/Canvas/ToolBar';
import { createImage } from '../../utils/grid';
import styles from './Canvas.css';

export default function Canvas() {
  const [image, setImage] = useState(createImage('title', 10, 10));
  const [eraser, setEraser] = useState(createImage('eraser', 10, 10));
  const [tool, setTool] = useState('pencil');

  return (
    <div className={styles.Canvas}>
      <Grid tool={tool} image={image} setImage={setImage} eraser={eraser} />
      <Toolbar
        tool={tool}
        setTool={setTool}
        eraser={eraser}
        image={image}
        setImage={setImage}
      />
      <CanvasControls image={image} />
    </div>
  );
}
