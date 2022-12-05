import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (

      <div>
        <article className='all-browsers'>
        <nav>
         <h1>
          <a href="/">Home</a> |
          <a href="/feed">Feed</a> | 
          <a href="/search">Search</a> | 
          <a href="/profile">Profile</a></h1>
        </nav>
        </article>
      </div>
    )
  }
}

export default Home;