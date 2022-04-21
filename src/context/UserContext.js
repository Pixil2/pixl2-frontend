import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

import { getCurrentUser, signIn, signOut } from '../services/users';
import { renderView } from '../utils/renderView';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const login = async (credentials) => {
    try {
      const user = await signIn(credentials);
      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const logout = useCallback(() => {
    signOut().then(() => setUser({}));
  }, []);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  const state = useMemo(
    () => ({ loading, user, logout, login }),
    [loading, user, logout, login]
  );

  return (
    <UserContext.Provider value={{ user, logout, state }}>
      {renderView({ ...state, children })}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error('useAuth must be used within UserProvider');

  return context;
};
