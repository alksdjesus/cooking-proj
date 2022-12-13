import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PublicRoutes = ({ component: Component, ...rest}) => {
  return (
    !getToken() ? <Outlet/> : <Navigate to="/feed" />
  )
}

export default PublicRoutes

// const PublicRoute = ({ component: Component, ...rest}) => {
//   return (
//     <Route 
//       {...rest}
//       render={props => {
//         return !getToken() ? <Component {...props} />
//         : <Navigate to={{ pathname: '/feed'}} />
//       }}
//     />
//   )
// }

// export default PublicRoute