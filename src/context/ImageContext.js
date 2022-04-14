import { createContext, useEffect, useState } from 'react';
import { createImage } from '../utils/grid';

export const imageContext = createContext();

export function ProvideImage({ children }) {
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImage(createImage('title', 10, 10));
    setLoading(false);
  }, [loading]);

  return (
    <imageContext.Provider value={{ image, loading, setLoading }}>
      {children}
    </imageContext.Provider>
  );
}
