import React, { useState } from 'react';
import MealList from '../components/itemlist';
import './search.css';
import './allpages.css';
import {Link} from 'react-router-dom';

function Search() {

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  // const [isLoading, setLoading] = useState(true)
  var [searchText, setText] = useState(null)
  // var [data, setData] = useState([])
  const [apiKey, setKey] = useState('&apiKey=affe55df0130465780b612e83f9b8895')
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
    <div className='container'>
      <div className='title'>
        Search
      </div>
      <input 
        type="text"
        placeholder="Enter ingredients/recipe"
        onChange={onTextChange}  
      />
      <input
        type="image"
        src={require("../images/search.png")}
        onClick={getRecipes}
      />
      <div>
        {mealData && <MealList mealData={mealData} sender={"search"}  />}
      </div>
    </div>
  );
};

export default Search
