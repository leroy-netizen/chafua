import React from "react";
import logo from "../assets/images/react2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>React Facts</h1>
    </div>
  );
};

export default Header;
