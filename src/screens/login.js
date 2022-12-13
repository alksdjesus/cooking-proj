import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../service/AuthService'
import { Link, useNavigate } from 'react-router-dom';
import '../css/allpages.css'
import '../css/login.css'

const loginAPIUrl = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/login';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

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
      navigate('/profile');
      console.log(navigate('/profile'))
    }).catch((error) => {
      // console.log(error)
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('sorry....the backend server is down. please try again later!!');
      }
    })
  }

  return (
    <div className='login_background'>
      <div className='title_container'>
        <img className="login_title" src={require("../images/logo.png")}/>
        <div className='login_container'>
          <div className='login'>
            Login
          </div>
          <form onSubmit={submitHandler}>
            <input type="login" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
            <input type="submit" value="Log In" />
            <Link to="/register">
              <input type="submit" value="Register" />
            </Link>
          </form>
        </div>
      </div>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  )
}

export default Login;