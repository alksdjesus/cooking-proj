import React, { useEffect, useState } from 'react';
import MealList from '../components/itemlist';

function Search() {

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  // const [isLoading, setLoading] = useState(true)
  var [searchText, setText] = useState(null)
  // var [data, setData] = useState([])
  const [apiKey, setKey] = useState('&apiKey=e0ba8f96837748dc9473f52b42c3b8a8')
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
        </div>
        <div>
            <button
              onClick={getRecipes}
              title= "Search"
            />
        </div>
        {mealData && <MealList mealData={mealData} />}
    </div>
  );
};

export default Search