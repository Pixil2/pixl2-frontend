import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../../context/UserContext';

export default function ProtectedRoute() {
  const { user } = useCurrentUser();
  if (user?.status === 401) {
    return <Navigate to="/" replace />;
  }
  if (user?.id) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
}
