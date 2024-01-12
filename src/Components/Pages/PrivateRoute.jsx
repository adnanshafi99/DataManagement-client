import { Route, Navigate } from 'react-router-dom';
import React from 'react';

// Replace this with your actual authentication logic
const isAuthenticated = () => {
  // Return true if the user is authenticated, false otherwise
  // You might use Firebase authentication or your custom logic
  return true; // Replace with your authentication logic
};

const getUserEmail = () => {
  // Replace this with your actual logic to get the user's email
  // You might use Firebase authentication or your custom logic
  return "user@example.com"; // Replace with your logic to get the user's email
};

const PrivateRoute = ({ element, role, fallbackPath }) => {
  const isAuthenticatedUser = isAuthenticated();
  const userEmail = getUserEmail();

  if (!isAuthenticatedUser) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  // Check if the user has the required role or email
  if (role && role !== 'admin') {
    // Redirect to a fallback path if the user doesn't have the required role
    return <Navigate to={fallbackPath} />;
  }

  // Check if the user has the specific email for admin access
  if (role === 'admin' && userEmail !== 'admin@gmail.com') {
    // Redirect to a fallback path if the user doesn't have the admin email
    return <Navigate to={fallbackPath} />;
  }

  // Render the protected component if authenticated and has the required role or email
  return <Route element={element} />;
};

export default PrivateRoute;
