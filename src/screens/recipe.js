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


export default function Recipe() {
  
  const location = useLocation();
  const meal = location.state.meal

  var [mealData, setMealData] = useState({});
  const [apiKey, setKey] = useState('/information?apiKey=539b28b197f8412eba867c3356a8d6a6')
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

  // var desc = meal.summary
  // desc = desc.replace(/\s*\<.*?\>\s*/g, ' ');
  // desc = desc.split('.')[0] + '.';

  // var inst = meal.instructions
  // inst = inst.replace(/\s*\<.*?\>\s*/g, ' ');
  // inst = inst.replaceAll('\n', '\n\n')

      return (
        <div className='container'>
          <div className='recipe_title'>
            {mealData.title}
          </div>
          <div className='sum_img'>
            <div className='summary_container'>
              <div className='summary'>
                {mealData.summary}
              </div>
            </div>
            <img className="img" src={mealData.image} alt={mealData.title}/>
          </div>
        </div>
      );


    }