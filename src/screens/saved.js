import { getUser } from '../service/AuthService';
import React, {Component, useEffect, useState} from 'react';
import MealList from '../components/itemlist';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/allpages.css';


function Saved () {
  const [apiKey, setKey] = useState('&apiKey=4c79dafa41b2490e8ee389c5a4b6583c')
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
      if (list[i] == null) {continue;}
      idquery = idquery + list[i].toString() + ",";
    }

    idquery.slice(0, -1)

    // console.log(idquery)
    
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
      // console.log(response.data.saved);
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
        Saved Recipes
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div >
      {mealData && <MealList mealData={mealData} sender={"saved"}/>}
    </div>
  </div>
  )
}

export default Saved;