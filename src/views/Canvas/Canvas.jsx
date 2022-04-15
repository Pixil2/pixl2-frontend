import { useState } from 'react';
import CanvasControls from '../../components/Canvas/CanvasControls';
import Grid from '../../components/Canvas/Grid';
import Toolbar from '../../components/Canvas/ToolBar';
import { createImage } from '../../utils/grid';

export default function Canvas() {
  const [image, setImage] = useState(createImage('title', 10, 10));
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('black');

  return (
    <div>
      <Grid tool={tool} color={color} image={image} setImage={setImage} />
      <Toolbar tool={tool} setTool={setTool} />
      <CanvasControls image={image} />
    </div>
  );
}
