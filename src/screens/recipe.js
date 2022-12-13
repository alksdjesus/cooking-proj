// import React from "react";
// import {useLocation} from "react-router-dom";
// import '../App.css'
// import Home from "./home";


// export default function Recipe() {
//   const location = useLocation();
//   const meal = location.state.meal

//       return (
        
//         <><Home/><article className="all-browsers">
//           <h1>{meal.title}</h1>
//         </article><article>
//         <img className="img" src={meal.image} alt={meal.title}/>
//           </article></>

//       );
//     }

import React, { useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import '../css/allpages.css'
import '../css/recipe.css'
import { SaveButton } from '../components/navbarElements';


export default function Recipe() {
  
  const location = useLocation();
  const meal = location.state.meal

  var [mealData, setMealData] = useState({});
  const [apiKey, setKey] = useState('/information?apiKey=e0ba8f96837748dc9473f52b42c3b8a8')
  const [baseSearchURL, setBaseURL] = useState('https://api.spoonacular.com/recipes/')
  var [someLink, setLink] = useState('test')

  useEffect(() => {
    // Run! Like go get some data from an API.
    getRecipes()
  }, []);

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
      <SaveButton>Save Recipe</SaveButton>
        <select id="rating">
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