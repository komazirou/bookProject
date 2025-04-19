import React from "react";
import headerImg from "../assets/header.jpg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={headerImg} alt="header-image" />
      </Link>
    </header>
  );
};

export default Header;
