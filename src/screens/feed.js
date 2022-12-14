import React, { useEffect, useState } from 'react';
import MealList from '../components/itemlist';
import { Link } from 'react-router-dom';
import '../css/allpages.css';
import '../css/item.css';

const Feed = () => {

  const [mealData, setMealData] = useState(null);

  const [apiKey, setKey] = useState('&apiKey=0fdb28e86ada4091a5018498977de77d')
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

  /*<div>
    <FeedButton onClick={getRecipes}>Refresh</FeedButton>
  </div>*/

  return (
    <div className='container'>
      <div className='title'>
        Feed
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div >
        {mealData && <MealList mealData={mealData} sender={"feed"}/>}
      </div>
    </div>
  );
};

export default Feed;

// import React from 'react';

// const Feed = () => {
//   return (
//     <div>
//       This is the Feed page!
//     </div>
//   )
// }

// export default Feed;
