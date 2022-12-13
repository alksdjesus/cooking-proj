import { getUser } from '../service/AuthService';
import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/allpages.css';


function Saved () {
  const [apiKey, setKey] = useState('&apiKey=e0ba8f96837748dc9473f52b42c3b8a8')
  const [mealData, setMealData] = useState(null);
  const [message, setMessage] = useState(null);

  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';

  useEffect(() => {
    // Run! Like go get some data from an API.
    getSaved()
  }, []);

  async function getRecipes(list)  {
    var idquery = ""

    for (var i = 0; i < list.length; i++)
    { 
      idquery = idquery + list[i].toString() + ",";
    }

    idquery.slice(0, -1)
    
    const saved = "https://api.spoonacular.com/recipes/informationBulk?ids=" + idquery + apiKey
    // setLink(someLink = (baseSearchURL + meal.id + apiKey))
     try {
      const response = await fetch(saved)
      const json = await response.json()
      setMealData(json)

    } catch (error) {
      console.error(error)
    } finally {
      // setLoading(false)
    }
  }

  async function getSaved() {
    var url = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo?username='
    url = url + username

    axios.get(url).then(response => {
      getRecipes(response.data.saved);
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
        <div className='title'>
          Saved
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
    )
}

export default Saved;