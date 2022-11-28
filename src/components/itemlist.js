import React from "react";
import Meal from "./item";

export default function MealList({ mealData, sender }) {

  if (sender === "search") {
    return (

      <main>
        <section className="meals">
          {mealData.results.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
      </main>
    );
  }

  if (sender === "feed") {
    return (

      <main>
        <section className="meals">
          {mealData.recipes.map((meal) => {
            return <Meal key={meal.id} meal={meal} />;
          })}
        </section>
      </main>
    );
  }
}
