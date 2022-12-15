import React, { Component, useState, state } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/allpages.css';
import '../css/profile.css';
import { getUser, getFirst, resetUserSession } from '../service/AuthService';
import axios from 'axios';
import { SaveButton } from '../components/navbarElements.js';
import Select from 'react-select';
import { StyleSheetManager } from 'styled-components';

const updateAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo';

const Info = (props) => {
  const navigate = useNavigate();
  var dietaryRestrictions = new Array();
  var ingredients = new Array();
  var cuisines = new Array();


  //getting loggind in user
  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';

  // const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  //const [ingredients, setIngredients] = useState('');
  //const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [rated, setRated] = useState('');
  const [saved, setSaved] = useState('');
  const [message, setMessage] = useState(null);

  // const logoutHandler = () => {
  //   resetUserSession();
  //   navigate('/login');
  // }

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

    if (firstName !== '') {
      submitFirstName();
    }
    if (lastName !== '') {
      submitLastName();
    }
    if (bio !== '') {
      submitBio();
    }
    if (email !== '') {
      submitEmail();
    }
    // submitIngredients();
    // submitDietaryRestrictions();
    submitRated();
    submitSaved();
    // submitCuisines();

    // if (ingredients !== '') {
    //   submitIngredients();
    // }
    // if (dietaryRestrictions !== '') {
    //   submitDietaryRestrictions();
    // }
    // if (rated !== '') {
    //   submitRated();
    // }
    // if (saved !== '') {
    //   submitSaved();
    // }
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

  const submitFirstName = () => {
    const requestBody = {
      username: username,
      updateKey: "firstName",
      updateValue: firstName
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

  const submitLastName = () => {
    const requestBody = {
      username: username,
      updateKey: "lastName",
      updateValue: lastName
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

  const submitIngredients = () => {
    const requestBody = {
      username: username,
      updateKey: "ingredients",
      updateValue: []
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

  const submitDietaryRestrictions = () => {
    const requestBody = {
      username: username,
      updateKey: "dietaryRestrictions",
      updateValue: []
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

  const submitCuisines = () => {
    const requestBody = {
      username: username,
      updateKey: "cuisines",
      updateValue: []
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

  const submitRated = () => {
    const requestBody = {
      username: username,
      updateKey: "rated",
      updateValue: {}
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

  const submitSaved = () => {
    const requestBody = {
      username: username,
      updateKey: "saved",
      updateValue: []
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

  const optionStyles = {
    control: (styles) => ({ 
      ...styles, 
      backgroundColor: "white", 
      borderRadius: 20, 
      borderWidth: 2,
      boxShadow: 'none',
      borderColor: '#A6A6A6',
      padding: 2.5,
      width: 500,
      outline: 'none',
    }),
    multiValue: (styles) => {
      return {
        ...styles,
        borderRadius: 20,
        borderWidth: 2,
        padding: 2,
        paddingLeft: 4,
        fontSize: 16,
        marginLeft: -4,
        marginRight: 10,
        onmouseover: "this.style.textDecoration = 'underline'",
      }
    },
    menu: (styles) => {
      return {
        ...styles,
        width: 500,
        borderRadius: 10,
      }
    },
    option: (styles) => {
      return {
        ...styles,
        marginTop: -4,
        marginBottom: -4,
        width: 483,
        borderRadius: 10,
      }
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        borderRadius: 20,
      }
    }
  }

  return (
    <div className='profile_container'>
      <form onSubmit={submitHandler} align="left">
        <div className='sub_title'>
          General Information
        </div>
        <div className='saved_title'>
          Username: 
        </div>
        <div className='saved_info'>
          {username}
        </div>
        <br/>
        <input type="profile" placeholder="First Name"value={firstName} onChange={event => setFirstName(event.target.value)}/> <br/>
        <input type="profile" placeholder="Last Name"value={lastName} onChange={event => setLastName(event.target.value)}/> <br/>
        <input type="profile" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/> <br/>
        <textarea type="bio" placeholder="Bio" value={bio} onChange={event => setBio(event.target.value)} /> <br/>
        <br/>
        <SaveButton input type="submit">
          Save
        </SaveButton>
         <br/>
      </form>
    </div>
  )
}

//<input type="button" value="Logout" onClick={logoutHandler}/>

export default Info;