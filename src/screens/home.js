import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (

      <div>
        <article className='all-browsers'>
        <nav>
         <h1><a href="/">Home</a> |
          <a href="/Feed/">Feed</a> | 
          <a href="/Search/">Search</a> | 
          <a href="/Profile/">Profile</a></h1>
        </nav>
        </article>
      </div>
    )
  }
}

export default Home;