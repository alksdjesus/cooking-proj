import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Profile extends Component {
  render() {
    return (

      <div>
        <img src="https://picsum.photos/200/200" alt="bank"/>
        <h1>Profile</h1>

        <Link to="/">Home</Link>

      </div>
    )
  }
}

export default Profile;