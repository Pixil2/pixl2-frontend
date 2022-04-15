import { createContext, useEffect, useState } from 'react';
import { createImage } from '../utils/grid';

export const imageContext = createContext();

export function ProvideImage({ children }) {
  const [image, setImage] = useState({});
  const [eraser, setEraser] = useState({});
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState();
  const [pixelArray, setPixelArray] = useState([]);

  useEffect(() => {
    setImage(createImage('title', 17, 17));
    setEraser(createImage('eraser', 10, 10));
    setLoading(false);
  }, [loading]);

  return (
    <imageContext.Provider
      value={{
        image,
        setImage,
        eraser,
        loading,
        setLoading,
        index,
        setIndex,
        pixelArray,
        setPixelArray,
      }}
    >
      {children}
    </imageContext.Provider>
  );
}
