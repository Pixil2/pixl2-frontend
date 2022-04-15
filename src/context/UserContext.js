import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getCurrentUser, signIn, signOut } from '../services/users';

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

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  export const useCurrentUser = () => {
    const context = useContext(UserContext);

    if (context === undefined)
      throw new Error('useAuth must be used within UserProvider');

    return { logout: context.logout, login: context.login };
  };
};
