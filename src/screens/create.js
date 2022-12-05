import React, {Component, useState} from 'react';
import { getUser, resetUserSession } from '../service/AuthService';
import axios from 'axios';

const recipeAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/recipe';

const Profile = (props) => {

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
    <div>
      <form onSubmit={submitHandler}>
      <h1>Recipe Upload</h1>
      Recipe Name: <input type="text" value={dish} onChange={event => setDish(event.target.value)} /> <br/>
      Description: <input type="text" value={desc} onChange={event => setDesc(event.target.value)}/> <br/>
      Ready in <input type="text" value={mins} onChange={event => setMins(event.target.value)}/> minutes. <br/>
      Picture: <input type="text" value={pic} onChange={event => setPic(event.target.value)}/> <br/>
      Ingredients: <input type="text" value={ingredients} onChange={event => setIngredients(event.target.value)}/> <br/>
      Steps: <input type="text" value={steps} onChange={event => setSteps(event.target.value)}/> <br/>
      <input type="submit" value="Save Changes" />
      </form>
    </div>
  )
}

export default Profile;