import React, { useEffect, useState } from 'react';
import MealList from '../components/itemlist';
import './search.css'
import {Link} from 'react-router-dom';


function Search() {

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  // const [isLoading, setLoading] = useState(true)
  var [searchText, setText] = useState(null)
  // var [data, setData] = useState([])
  const [apiKey, setKey] = useState('&apiKey=a14c2e19acc243e2b3c680b226ec1736')
  const [baseSearchURL, setBaseURL] = useState('https://api.spoonacular.com/recipes/complexSearch?number=10&query=')
  var [someLink, setLink] = useState('test')


   async function getRecipes()  {
    setLink(someLink = (baseSearchURL + searchText + apiKey))
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

  function onTextChange (event) { 
    setText(searchText = event.target.value)
  }

  return (

    <div>
        <div>
          <input
            placeholder="Search for a recipe!"
            onChange={onTextChange}  
            />
            <button  onClick={getRecipes}>
             Search
            </button>
            <Link to="/">Home</Link>
            <br/>
        </div>
        {mealData && <MealList mealData={mealData} sender={"search"}  />}
    </div>
  );
};

export default Search