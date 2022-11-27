import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <article>
        <Link to="/recipe">{meal.title}</Link>
        <br/>
      {/* <img src={imageUrl} alt="recipe" /> */}
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      {/* <a href={meal.sourceUrl}>Go to Recipe</a> */}
    </article>
  );
}