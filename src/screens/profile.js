import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Home from './home';


class Profile extends Component {
  render() {
    return (

      <div>
        <Home/>
        <h1>Profile</h1>
      </div>
    )
  }
}

export default Profile;