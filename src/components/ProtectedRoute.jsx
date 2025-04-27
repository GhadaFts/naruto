import React from 'react';
import { Navigate } from 'react-router-dom';
import { getRole } from '../utils/auth';

export default function ProtectedRoute({ children, allowedRoles }) {
  const role = getRole();
  if (!role) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" replace />;
  return children;
}
