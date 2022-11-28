import React, { useEffect, useState } from 'react';
import MealList from '../components/itemlist';
import {Link} from 'react-router-dom';
import Home from './home';

function Feed() {

  const [mealData, setMealData] = useState(null);

  const [apiKey, setKey] = useState('&apiKey=affe55df0130465780b612e83f9b8895')
  const [baseSearchURL, setBaseURL] = useState('https://api.spoonacular.com/recipes/random?number=1')
  var [someLink, setLink] = useState('test')


  // old: https://api.spoonacular.com/recipes/random?number=1&apiKey=539b28b197f8412eba867c3356a8d6a6
  // new: https://api.spoonacular.com/recipes/random?number=1&apiKey=539b28b197f8412eba867c3356a8d6a6


  useEffect(() => {
    // Run! Like go get some data from an API.
    getRecipes()
  }, []);

   async function getRecipes()  {
    setLink(someLink = (baseSearchURL + apiKey))
     try {
      const response = await fetch(someLink)
      const json = await response.json()
      setMealData(json)
      // alert(mealData)
    } catch (error) {
      console.error(error)
    } finally {
      // setLoading(false)
    }
    
  }

  return (
    <div>
      <div>
      <Home/>
        <button onClick={getRecipes}>Load New Recipes</button>
      </div>
        {mealData && <MealList mealData={mealData} sender={"feed"}/>}
    </div>
  );
};

export default Feed;
