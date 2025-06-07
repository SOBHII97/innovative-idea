// routing/OwnerRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OwnerRoute = ({ children }) => {
  const { isOwner } = useAuth();

  return isOwner() ? children : <Navigate to="/login" replace />;
};

export default OwnerRoute;
