import { useState } from 'react';
import Grid from '../../components/Canvas/Grid';
import Toolbar from '../../components/Canvas/ToolBar';

export default function Canvas() {
  const [tool, setTool] = useState('pencil');

  return (
    <div>
      <Grid tool={tool} />
      <Toolbar tool={tool} setTool={setTool} />
    </div>
  );
}
