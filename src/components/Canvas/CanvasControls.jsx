import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { saveImage } from '../../services/images';
import { getCurrentUser } from '../../services/users';

export default function CanvasControls({ image }) {
  const history = useHistory();
  const handleSave = async (image) => {
    const user = await getCurrentUser();
    image = { ...image, userId: user.id };
    await saveImage(image);

    history.push('/profile');
  };

  return (
    <div>
      <button onClick={() => handleSave(image)}>Save</button>
    </div>
  );
}
