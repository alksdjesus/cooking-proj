import React, { Component, useState } from 'react';
import '../css/allpages.css';
import '../css/profile.css';
import { getUser, resetUserSession } from '../service/AuthService';
import axios from 'axios';

const updateAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo';

const Profile = (props) => {

  //getting loggind in user
  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';


  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [message, setMessage] = useState(null);

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('/login');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    setMessage(null);
    
    // const requestBody = {
    //   username: username,
    //   updateKey: "name",
    //   updateValue: name
    // }
    // axios.patch(updateAPIURL, requestBody).then(response => {
    //   setMessage('Info Updated');
    // }).catch(error => {
    //   if (error.response.status === 401) {
    //     setMessage(error.response.data.message);
    //   } else {
    //     setMessage('sorry....the backend server is down!! please try again later');
    //   }
    // })

    // if (name !== '') {
    //   submitName();
    // }

    if (bio !== '') {
      submitBio();
    }

    if (email !== '') {
      submitEmail();
    }
  }

//   const submitName = () => {
//     const requestBody = {
//       username: username,
//       updateKey: "name",
//       updateValue: name
//     }

//     axios.patch(updateAPIURL, requestBody).then(response => {
//       setMessage('Info Updated');
//     }).catch(error => {
//       if (error.response.status === 401) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage('sorry....the backend server is down!! please try again later');
//       }
//   })
// }

  const submitBio = () => {
    const requestBody = {
      username: username,
      updateKey: "bio",
      updateValue: bio
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

  const submitEmail = () => {
    const requestBody = {
      username: username,
      updateKey: "email",
      updateValue: email
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

//<input type="profile" placeholder="Name" value={name} onChange={event => setName(event.target.value)} /> <br/>

  return (
    <div className='profile_container'>
      <form onSubmit={submitHandler} align="left">
        <div className='profile'>
          Edit Profile
        </div>

        <input type="bio" placeholder="Bio" value={bio} onChange={event => setBio(event.target.value)} /> <br/>
        <input type="profile" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/> <br/>
        Ingredients:
        <select>
          <option value=""></option>
          <option value="rice">Rice</option>
          <option value="beef">Beef</option>
          <option value="cabbage">Cabbage</option>
          <option value="milk">Milk</option>
        </select>
        <br/>
        Dietary Restrictions:
        <select>
          <option value=""></option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="lactose-intol">Lactose-Intolerant</option>
        </select>
        <br/>
        <input type="submit" value="Save Changes" /> <br/>
      </form>
    </div>
  )
}

//<input type="button" value="Logout" onClick={logoutHandler}/>

export default Profile;