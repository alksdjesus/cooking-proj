import React, { useEffect, useState } from 'react';
import { getUser } from '../service/AuthService';
import {useLocation} from "react-router-dom";
import axios from 'axios';
import '../css/allpages.css'
import '../css/recipe.css'
import { SaveButton } from '../components/navbarElements';
import Rating from '../components/rating';

export default function Recipe() {
  
  const location = useLocation();
  const meal = location.state.meal

  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';

  const updateAPIURL = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo';

  var [mealData, setMealData] = useState({});
  const [apiKey, setKey] = useState('/information?apiKey=affe55df0130465780b612e83f9b8895')
  const [baseSearchURL, setBaseURL] = useState('https://api.spoonacular.com/recipes/')
  const [message, setMessage] = useState(null);
  var [someLink, setLink] = useState('test')

  useEffect(() => {
    // Run! Like go get some data from an API.
    getRecipes()
  }, []);

  console.log(meal)

  async function getRecipes()  {
    setLink(someLink = (baseSearchURL + meal.id + apiKey))
     try {
      const response = await fetch(someLink)
      const json = await response.json()
      setMealData(json)

    } catch (error) {
      console.error(error)
    } finally {
      // setLoading(false)
    }
  }

  async function getRecipes()  {
    setLink(someLink = (baseSearchURL + meal.id + apiKey))
     try {
      const response = await fetch(someLink)
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
      updateSaved(response.data.saved);
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
  })
    
  }

  async function updateSaved(list) {
    if (list.includes(mealData.id)) {
      const index = list.indexOf(mealData.id);
      list.splice(index, 1);
    } else {
      list.push(mealData.id)
      list = [...new Set(list)];
    }

    console.log(list)
    const requestBody = {
      username: username,
      updateKey: "saved",
      updateValue: list
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
    // updateRating(response.data.saved);
  }

  async function getRated() {

    var url = 'https://5v7ysjln6j.execute-api.us-east-1.amazonaws.com/beta/profileinfo?username='
    url = url + username

    axios.get(url).then(response => {
      updateRated(response.data.rated);
      setMessage('Info Updated');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
  })
    
  }

  function updateRated(dict) {
    let dropdown = document.getElementById("rating")
    let rating = parseInt(dropdown.value)
    let id = mealData.id

    dict[id] = rating
    console.log(dict)

    const requestBody = {
      username: username,
      updateKey: "rated",
      updateValue: dict
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

  var desc = meal.summary
  desc = desc.replace(/\s*\<.*?\>\s*/g, ' ');
  //desc = desc.split('.')[0] + '.';

  var inst = meal.instructions
  inst = inst.replace(/\s*\<.*?\>\s*/g, ' ');
  inst = inst.replaceAll('\n', '\n\n')

  var ingredients = meal.extendedIngredients.original

  return (
    <div className='recipe_page'>
      <div className='recipe_title'>
        {mealData.title}
      </div>
      <img className="img" src={mealData.image} alt={mealData.title}/>
      <br/>
      <SaveButton onClick={() => getSaved()}>Save Recipe</SaveButton>
      {/* <SaveButton>Save Recipe</SaveButton> */}
        <select id="rating" onChange={() => getRated()}>
          <option value="">Select Rating</option>
          <option value="1">Rating 1/5</option>
          <option value="2">Rating 2/5</option>
          <option value="3">Rating 3/5</option>
          <option value="4">Rating 4/5</option>
          <option value="5">Rating 5/5</option>
        </select>
      <div className='text_container'>
        <div className='summary'>
          <div className='part_title'>
            Overview:
          </div>
          {desc}
          <br/><br/><br/>
          <div className='part_title'>
            Ingredients:
          </div>
          {ingredients}
          <br/><br/><br/>
          <div className='part_title'>
            Instructions:
          </div>
          {inst}
        </div>
      </div>
    </div>
  );
}

/*<select id="rating" onChange={() => getRated()}>
          <option value="">Select Rating</option>
          <option value="1">Rating 1/5</option>
          <option value="2">Rating 2/5</option>
          <option value="3">Rating 3/5</option>
          <option value="4">Rating 4/5</option>
          <option value="5">Rating 5/5</option>
        </select>*/