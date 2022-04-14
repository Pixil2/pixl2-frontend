import { createContext, useEffect, useState } from 'react';
import { createImage } from '../utils/grid';

export const imageContext = createContext();

export function ProvideImage({ children }) {
  const [image, setImage] = useState({});
  const [eraser, setEraser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImage(createImage('title', 15, 15));
    setEraser(createImage('eraser', 10, 10));
    setLoading(false);
  }, [loading]);

  return (
    <imageContext.Provider value={{ image, eraser, loading, setLoading }}>
      {children}
    </imageContext.Provider>
  );
}
