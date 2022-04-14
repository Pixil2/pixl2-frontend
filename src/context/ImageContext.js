import { createContext, useEffect, useState } from 'react';

export const imageContext = createContext();

export function ProvideImage({ children }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setImage({
      title: 'title',
      height: 10,
      width: 10,
      colors: [
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
        'rgb(243, 243, 244)',
        'rgb(216, 216, 217)',
      ],
    });
    setLoading(false);
  }, [loading]);

  //   const login = (email, password) => {
  //     const loginSuccessful =
  //       email === process.env.AUTH_EMAIL &&
  //       password === process.env.AUTH_PASSWORD;
  //     if (loginSuccessful) setUser({ email });
  //     return loginSuccessful;
  //   };

  //   const logout = (callback) => {
  //     setUser(null);
  //     callback();
  //   };

  return (
    <imageContext.Provider value={{ image, loading, setLoading }}>
      {children}
    </imageContext.Provider>
  );
}
