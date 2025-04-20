import React from "react";
import Loading from "../components/loading";
import { useContext } from "react";
import { AppContext } from "../context";

const Home = () => {
  const contextValues = useContext(AppContext);
  return (
    <div>
      <h3>今夜のレシピを見つけよう</h3>
      {contextValues.loading && <Loading />}
    </div>
  );
};

export default Home;
