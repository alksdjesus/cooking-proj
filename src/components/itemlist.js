import React from "react";
import Meal from "./item";
import FeedMeal from "./feeditem";
import '../css/item.css';
import '../css/feed.css';

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
        <section className="feed_grid">
          {mealData.map((meal) => {
            return <FeedMeal key={meal.id} meal={meal} />;
          })}
        </section>
      </div>
    );
  }

  if (sender === "saved") {
    return (
      <div>
        <section className="recipe_grid">
          {mealData.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
      </div>
    );
  }
}