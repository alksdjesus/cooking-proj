import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './allpages.css';
import './settings.css'


function Profile () {
    return (
      <div className='container'>
        <div className='title'>
          Settings
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='menu'>
          <Link to="/profile">
            <div className='selection'>Edit Profile</div>
          </Link>
          <Link to="/profile">
            <div className='selection'>Change Dietary Restrictions</div>
          </Link>
          <Link to="/profile">
            <div className='selection'>Change Accessible Cookware</div>
          </Link>
          <Link to="/profile">
            <div className='selection'>Sign Out</div>
          </Link>
        </div>
    </div>
    )
}

export default Profile;