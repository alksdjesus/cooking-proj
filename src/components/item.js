import React from "react";
import {Link} from 'react-router-dom';
import './item.css';

export default function Meal({ meal }) {

  return (
      <div className="recipe_container">
        <Link to="/recipe" state={{ meal }}>
          <img className="recipe_img" src={meal.image}/>
        </Link>
        <div className="recipe">
          <Link to="/recipe" state={{ meal }}>
            <div className="name">
              {meal.title}
            </div>
          </Link>
          <div className="recipe_details">
            Prep time: {meal.readyInMinutes} min. <br></br>
            No. of servings: {meal.servings}
          </div>
        </div>
      </div>
  );
}