import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../service/AuthService'
import './allpages.css'

const loginAPIUrl = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/login';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Both username and password are required');
      return;
    }
    setErrorMessage(null);
    
    const requestBody = {
      username: username,
      password: password
    }

    axios.post(loginAPIUrl, requestBody).then((response) => {
      setUserSession(response.data.user, response.data.token);
      props.history.push('/profile');
    }).catch((error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('sorry....the backend server is down. please try again later!!');
      }
    })
  }

  return (
    <div className='login_container'>
      <form onSubmit={submitHandler}>
        <div className='login'>
          Login
        </div>
        <input type="login" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
        <input type="login" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        <input type="submit" value="LOGIN" />
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  )
}

export default Login;