import React from "react";
import {Link} from 'react-router-dom';


export default function Meal({ meal }) {



  return (
    <div>
      <Link to="/recipe" state={{ meal }}>{meal.title}</Link>
      <ul className="instructions">
        <img className="img" src={meal.image} alt={meal.title}/>
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
    </div>

    

  );
}

