import React from "react";
import Meal from "./item";
import './item.css';

export default function MealList({ mealData, sender }) {

  if (sender === "search") {
    return (
      <div>
        <section className="recipe_grid">
          {mealData.results.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
      </div>
    );
  }

  if (sender === "feed") {
    return (
      <div>
        <section className="recipe_grid">
          {mealData.recipes.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
      </div>
    );
  }
}