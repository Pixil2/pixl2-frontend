import React from 'react';
import { useCurrentUser } from '../../context/UserContext';
import { Route } from 'react-router-dom';

export default function ProtectedRoute({ children, ...routeProps }) {
  const context = useCurrentUser();
  console.log('context.user :>> ', context.user);

  return (
    <>
      <Route
        {...routeProps}
        render={({ location }) =>
          context.user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
