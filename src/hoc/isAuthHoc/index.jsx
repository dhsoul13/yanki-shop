import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthHoc = ({ children }) => {
  const isAuth = false;

  if (isAuth) {
    return children;
  }

  return <Navigate to={'/auth'} />;
};

export default AuthHoc;
