import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../service/AuthService';
import '../css/allpages.css';
import '../css/login.css'

const registerUrl = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/register';
const loginAPIUrl = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/login';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();


  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
      setMessage('All fields are required');
      return;
    }
    setMessage(null);
    
    const registerBody = {
      username: username,
      email: email,
      name: name,
      password: password
    }
    
    axios.post(registerUrl, registerBody).then(response => {
      // setMessage('Registration Successful');

      // navigate('/information')
      axios.post(loginAPIUrl, requestBody).then((response) => {
        // getData();
        setMessage('Registration Successful');
        setUserSession(response.data.user, response.data.token);
        navigate('/information', {state:{uname: username}})
      }).catch((error) => {
        // console.log(error)
        if (error.response.status === 401 || error.response.status === 403) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('sorry....the backend server is down. please try again later!!');
        }
      })
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })

    const requestBody = {
      username: username,
      password: password
    }

    
    
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
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  )
}

export default Register;