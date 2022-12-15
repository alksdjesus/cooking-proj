import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/allpages.css';
import '../css/login.css'

const registerUrl = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/register';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
      setMessage('All fields are required');
      return;
    }
    setMessage(null);
    
    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password
    }
    axios.post(registerUrl, requestBody).then(response => {
      setMessage('Registration Successful');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

  return (
    <div className='login_background'>
      <div className='title_container'>
        <img className="login_title" src={require("../images/logo.png")}/>
        <div className='login_container'>
          <div className='login'>
            Register
          </div>
          <form onSubmit={submitHandler}>
            <input type="login" placeholder="Name" value={name} onChange={event => setName(event.target.value)} /> <br/>
            <input type="login" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} /> <br/>
            <input type="login" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
            <input type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
            <input type="submit" value="Register" />
          </form>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  )
}

export default Register;