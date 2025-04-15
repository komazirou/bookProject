import React from "react";


const Recipe = (props) => {
  console.log(props)
  return <h1>{props.mealData.name}</h1>;
};

export default Recipe;
