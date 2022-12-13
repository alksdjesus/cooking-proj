import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/allpages.css';
import '../css/profile.css';
import { getUser, resetUserSession } from '../service/AuthService';
import axios from 'axios';
import { SaveButton } from '../components/navbarElements.js';
import Select from 'react-select';

const updateAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo';

const Info = (props) => {
  const navigate = useNavigate();


  //getting loggind in user
  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';


  // const [name, setName] = useState('');
  const [firstName, setFistName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [rated, setRated] = useState('');
  const [saved, setSaved] = useState('');
  const [message, setMessage] = useState(null);

  const logoutHandler = () => {
    resetUserSession();
    navigate('/login');
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
    submitIngredients();
    submitDietaryRestrictions();
    submitRated();
    submitSaved();

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

  const dietOptions = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'pescatarian', label: 'Pescatarian' },
    { value: 'gluten-free', label: 'Gluten-Free' },
    { value: 'lactose-intol', label: 'Lactose-Intolerant' },
    { value: 'vegan', label: 'Vegan' },
  ]

  const ingredientOptions = [
    { value: 'rice', label: 'Rice' },
    { value: 'beef', label: 'Beef' },
    { value: 'tomato', label: 'Tomato' },
    { value: 'lettuce', label: 'Lettuce' },
    { value: 'cabbage', label: 'Cabbage' },
    { value: 'milk', label: 'Milk' },
    { value: 'pork', label: 'Pork' },
  ]

//<input type="profile" placeholder="Name" value={name} onChange={event => setName(event.target.value)} /> <br/>

  return (
    <div className='profile_container'>
      <form onSubmit={submitHandler} align="left">
        <div className='sub_title'>
          General Information
        </div>
        <input type="profile" placeholder="First Name"value={firstName} onChange={event => setFistName(event.target.value)}/> <br/>
        <input type="profile" placeholder="Last Name"value={lastName} onChange={event => setLastName(event.target.value)}/> <br/>
        <input type="profile" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/> <br/>
        <input type="bio" placeholder="Bio" value={bio} onChange={event => setBio(event.target.value)} /> <br/>
        <br/>
        Dietary Restrictions:
        <Select options={dietOptions} isMulti name="diets"/>
        <br/>
        Ingredients:
        <Select options={ingredientOptions} isMulti name="ingredients"/>
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