import React from "react";
import Recipe from "../components/Recipe";
import { useContext } from "react";
import { AppContext } from "../context";
import Loading from "../components/loading";

const Meal = () => {
  const contextValues = useContext(AppContext);
  return <div>{contextValues.loading ? <Loading/> : <Recipe/>}</div>;
};

export default Meal;
