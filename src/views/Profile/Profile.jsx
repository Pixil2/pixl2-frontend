import { useEffect, useState } from 'react';
import { getImageById } from '../../services/images';
import Grid from '../../components/Canvas/Grid';

export default function Profile() {
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await getImageById(1);
      setCurrentImage(res);
    };
    fetch();
  }, []);

  console.log('currentImage', currentImage);

  return (
    <div>
      <Grid image={currentImage} />
    </div>
  );
}
