import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PrivateRoutes = () => {
  return (
    getToken() ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoutes