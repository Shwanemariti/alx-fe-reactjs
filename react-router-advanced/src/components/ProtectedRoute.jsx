import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the given element
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
