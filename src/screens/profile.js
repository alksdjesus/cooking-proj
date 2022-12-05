import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import './allpages.css';
import './settings.css'
import { getUser, resetUserSession } from '../service/AuthService';
import axios from 'axios';

const updateAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo';

const Profile = (props) => {

  //getting loggind in user
  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';


  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('/login');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      setMessage('All fields are required');
      return;
    }
    setMessage(null);
    
    const requestBody = {
      username: "mingmar",
      updateKey: "name",
      updateValue: "mingmar"
    }
    axios.patch(updateAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
      <div className='title'>
      Edit Profile
      </div>
      <br></br>
      <br></br>
      <br></br>
      Name: <input type="login" value={name} onChange={event => setName(event.target.value)} /> <br/>
      Email: <input type="login"/> <br/>
      Username: <input type="login"/> <br/>
      Ingredients:
      <select>
        <option value=""></option>
        <option value="rice">Rice</option>
        <option value="beef">Beef</option>
        <option value="cabbage">Cabbage</option>
        <option value="milk">Milk</option>
      </select>
      Dietary Restrictions: dropdown menu
      <select>
        <option value=""></option>
        <option value="vegetarian">Vegetarian</option>
        <option value="pescatarian">Pescatarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
      Recipes: list of recipes
      <input type="submit" value="Save Changes" />
      </form>
      <input type="button" value="Logout" onClick={logoutHandler} />
    </div>
  )
}

export default Profile;