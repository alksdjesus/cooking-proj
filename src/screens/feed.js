import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Feed extends Component {
  render() {
    return (

      <div>
        <img src="https://picsum.photos/200/200" alt="bank"/>
        <h1>Feed</h1>

        <Link to="/">Home</Link>

      </div>
    )
  }
}

export default Feed;