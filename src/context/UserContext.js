import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { signIn, signOut } from '../services/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const user = await signIn(credentials);
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const logout = useCallback(() => {
    signOut().then(() => setUser(null));
  }, []);
};
