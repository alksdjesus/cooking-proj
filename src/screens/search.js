import React, { useEffect, useState } from 'react';
import MealList from '../components/itemlist';
import '../css/search.css';
import '../css/allpages.css';
import '../css/item.css';
import {Link} from 'react-router-dom';
import { getUser } from '../service/AuthService';

const Search = () => {

  function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const user = getUser();
  const username = user !== 'undefined' && user ? user.username : '';

  // const [isLoading, setLoading] = useState(true)
  var [searchText, setText] = useState(null)
  // var [data, setData] = useState([])
  const [apiKey, setKey] = useState('&apiKey=893a373691f84a3c998659d1b2971344')
  const [baseSearchURL, setBaseURL] = useState('https://api.spoonacular.com/recipes/complexSearch?number=10&query=')
  var [someLink, setLink] = useState('test')

  useEffect(() => {
    // Run! Like go get some data from an API.
    getSearchRecipes()
  }, []);

  async function getSearchRecipes()  {
    if (onlyLettersAndSpaces(searchText) == true) {
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
  
  }

  function onTextChange (event) { 
    setText(searchText = event.target.value)
  }

  console.log(mealData);

  return (
    <div className='container'>
      <div className='title'>
        Search
      </div>
      <input 
        type="search"
        placeholder="Enter ingredients/recipe"
        onChange={onTextChange}  
      />
      <input
        type="image"
        src={require("../images/search.png")}
        onClick={getSearchRecipes}
      />
      <br/><br/><br/>
      <div>
        {mealData && <MealList mealData={mealData} sender={"search"}/>}
      </div>
    </div>
  );
};

export default Search;
