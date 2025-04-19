import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="mode-body">
      <div className="mode-container">
        <Header />
        <Form setMealName={props.setMealName} getMealData={props.getMealData} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
