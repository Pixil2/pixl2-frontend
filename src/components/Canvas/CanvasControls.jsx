import React from 'react';
import { getImageById, saveImage, updateImage } from '../../services/images';
import { getCurrentUser } from '../../services/users';

export default function CanvasControls({ image, edit }) {
  const handleSave = async (image) => {
    const user = await getCurrentUser();
    image = { ...image, userId: user.id };
    await saveImage(image);
    window.location.href = './profile';
  };

  const handleUpdate = async (image) => {
    await updateImage(image);
    window.location.href = '../../profile';
  };

  return (
    <div>
      {!edit && <button onClick={() => handleSave(image)}>Save</button>}
      {edit && <button onClick={() => handleUpdate(image)}>Update</button>}
    </div>
  );
}
