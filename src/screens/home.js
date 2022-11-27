import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (

      <div>
        <img src="https://picsum.photos/200/200" alt="bank"/>
        <h1>Quick Cook</h1>

        <p>Hello!!!!!</p>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/search">Search</Link>
        <br/>
        <Link to="/feed">Feed</Link>
        <br/>
        <Link to="/profile">Profile</Link>
      </div>
    )
  }
}

export default Home;