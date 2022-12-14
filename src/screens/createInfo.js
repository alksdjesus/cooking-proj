import { Link } from 'react-router-dom';
import '../css/allpages.css';
import '../css/profile.css';
import React, {Component, useState} from 'react';
import { getUser, resetUserSession } from '../service/AuthService';
import { SaveButton } from '../components/navbarElements.js';
import axios from 'axios';

const recipeAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/recipe';

const Create = (props) => {

  //getting loggind in user
  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';


  const [dish, setDish] = useState('');
  const [desc, setDesc] = useState('');
  const [mins, setMins] = useState('');
  const [pic, setPic] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (dish.trim() === '' || mins.trim() === '' || ingredients.trim() === '' || steps.trim() === '') {
      //setMessage('All fields are required');
      return;
    }
    //setMessage(null);
    
    const requestBody = {
      pk: username,
      sk: "recipe#" + dish,
      dish: dish,
      recipeDescription: desc,
      recipeIngredients: ingredients,
      recipePic: pic,
      recipeSteps: steps,
      recipeTime: mins
    }

    axios.post(recipeAPIURL, requestBody).then(response => {
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })
  }

// dish, description, ingredients, picture, steps, time
  return (
    <div className='profile_container'>
      <form onSubmit={submitHandler}>
        <div className='sub_title'>
          Recipe Upload
        </div>
        <input type="profile" placeholder="Recipe Name" value={dish} onChange={event => setDish(event.target.value)} /> <br/>
        <input type="profile" placeholder="Description" value={desc} onChange={event => setDesc(event.target.value)}/> <br/>
        <input type="profile" placeholder="Prep Time (in minutes)" value={mins} onChange={event => setMins(event.target.value)}/> <br/>
        <input type="profile" placeholder="Picture" value={pic} onChange={event => setPic(event.target.value)}/> <br/>
        <input type="profile" placeholder="Ingredients" value={ingredients} onChange={event => setIngredients(event.target.value)}/> <br/>
        <input type="profile" placeholder="Directions" value={steps} onChange={event => setSteps(event.target.value)}/> <br/>
        <SaveButton input type="submit">
          Save
        </SaveButton>
      </form>
    </div>
  )
}

export default Create;