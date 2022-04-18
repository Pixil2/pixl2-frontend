import { useState } from 'react';
import CanvasControls from '../../components/Canvas/CanvasControls';
import Grid from '../../components/Canvas/Grid';
import Toolbar from '../../components/Canvas/ToolBar';
import { createImage } from '../../utils/grid';
import styles from './Canvas.css';
import CanvasForm from '../../components/Canvas/CanvasForm';

export default function Canvas() {
  const [canvasInfo, setCanvasInfo] = useState();
  const [image, setImage] = useState(createImage('title', 10, 10));
  const [eraser, setEraser] = useState(createImage('eraser', 10, 10));
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('#000000');

  return (
    <div className={styles.Canvas}>
      <Grid
        tool={tool}
        image={image}
        setImage={setImage}
        eraser={eraser}
        color={color}
      />
      <Toolbar
        tool={tool}
        setTool={setTool}
        eraser={eraser}
        image={image}
        setImage={setImage}
        color={color}
        setColor={setColor}
      />
      <CanvasControls image={image} />
    </div>
  );
}
