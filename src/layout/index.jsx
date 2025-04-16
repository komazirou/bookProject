import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <div>
        <Header />
        <Form setMealName={props.setMealName} getMealData={props.getMealData} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
