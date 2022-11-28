import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './allpages.css';


function Profile () {
    return (
      <div className='container'>
        <div className='title'>
          Settings
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/profile">
          <h1>Edit Profile</h1>
        </Link>
        <Link to="/profile">
          Change Dietary Restrictions
        </Link>
        <Link to="/profile">
          Change Accessible Cookware
        </Link>
        <Link to="/profile">
          Sign Out
        </Link>
    </div>
    )
}

export default Profile;