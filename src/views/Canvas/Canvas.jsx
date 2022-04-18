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
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('black');
  const [created, setCreated] = useState(false);
  console.log(canvasInfo);
  return (
    <div className={styles.Canvas}>
      {!created && (
        <CanvasForm
          image={image}
          setCanvasInfo={setCanvasInfo}
          setCreated={setCreated}
        />
      )}
      {created && (
        <>
          <Grid tool={tool} color={color} image={image} setImage={setImage} />
          <Toolbar tool={tool} setTool={setTool} />
          <CanvasControls image={image} />
        </>
      )}
    </div>
  );
}
