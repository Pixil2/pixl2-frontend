import React from 'react';
import { saveImage } from '../../services/images';

export default function CanvasControls({ image }) {
  const handleSave = (image) => {
    saveImage(image);
  };

  return (
    <div>
      <button onClick={() => handleSave(image)}>Save</button>
    </div>
  );
}
