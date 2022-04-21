import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CanvasControls from '../../components/Canvas/CanvasControls';
import Grid from '../../components/Canvas/Grid';
import Toolbar from '../../components/Canvas/ToolBar';
import { createImage } from '../../utils/grid';
import styles from './Canvas.css';
import CanvasForm from '../../components/Canvas/CanvasForm';
import { useEffect } from 'react';
import Prompt from '../../components/Canvas/Prompt';
import { getImageById } from '../../services/images';
import Header from '../../components/Layout/Header';

export default function Canvas({ edit = false }) {
  const [created, setCreated] = useState(false);
  const [canvasInfo, setCanvasInfo] = useState({});
  const [image, setImage] = useState({});
  const [eraser, setEraser] = useState({});
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('#000000');
  const params = useParams();

  useEffect(() => {
    if (!edit) {
      const { title, size } = canvasInfo;
      setImage(createImage(title, size, size));
      setEraser(createImage('eraser', size, size));
    } else {
      const fetchImage = async () => {
        const res = await getImageById(params.id);
        setImage(res);
        setEraser(createImage('eraser', res.height, res.width));
      };
      fetchImage();
    }
  }, [canvasInfo, edit]);

  if (!created && !edit)
    return <CanvasForm setCreated={setCreated} setCanvasInfo={setCanvasInfo} />;

  return (
    <div className={styles.Canvas}>
      <Header />
      <div className={styles.canvasContainer}>
        <div className={styles.canvasTools}>
          <Toolbar
            tool={tool}
            setTool={setTool}
            eraser={eraser}
            image={image}
            setImage={setImage}
            color={color}
            setColor={setColor}
          />
          <Prompt />
        </div>
        <Grid
          tool={tool}
          image={image}
          setImage={setImage}
          eraser={eraser}
          color={color}
        />
        <CanvasControls image={image} edit={edit} />
      </div>
    </div>
  );
}
