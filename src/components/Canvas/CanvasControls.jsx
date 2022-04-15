import React from 'react';
import { saveImage } from '../../services/images';
import { getCurrentUser } from '../../services/users';

export default function CanvasControls({ image }) {
  const handleSave = async (image) => {
    const user = await getCurrentUser();
    console.log(user);
    image = { ...image, userId: user.id };
    await saveImage(image);
  };

  return (
    <div>
      <button onClick={() => handleSave(image)}>Save</button>
    </div>
  );
}
