import React from "react";
import Recipe from "../components/Recipe";
const Meal = (props) => {
  return (
    <div>
      <Recipe mealData={props.mealData} />
    </div>
  );
};

export default Meal;
