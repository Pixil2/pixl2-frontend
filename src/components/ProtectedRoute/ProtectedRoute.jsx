import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCurrentUser } from '../../context/UserContext';

export default function ProtectedRoute({ children }) {
  const { user } = useCurrentUser();
  if (user?.status === 401) {
    return <Navigate to="/" replace />;
  }
  if (user?.id) {
    return children;
  }
}
