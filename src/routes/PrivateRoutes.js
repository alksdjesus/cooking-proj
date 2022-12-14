import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getToken } from '../service/AuthService';
import Navbar from '../components/navbar.js';

const PrivateRoutes = () => {
  return (
    getToken() ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoutes