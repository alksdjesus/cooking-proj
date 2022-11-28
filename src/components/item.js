import React from "react";
import {Link} from 'react-router-dom';

export default function Meal({ meal }) {

  return (
    <div>
      <Link to="/recipe" state={{ meal }}>{meal.title}</Link>
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
        <li><img className="img" src={meal.image}/></li>
      </ul>
    </div>
  );
}