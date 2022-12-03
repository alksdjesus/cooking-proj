import React, {Component} from 'react';
import { getUser, resetUserSession } from '../service/AuthService';


const Profile = (props) => {
  const logoutHandler = () => {
    resetUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <input type="button" value="Logout" onClick={logoutHandler} />
    </div>
  )
}

export default Profile;