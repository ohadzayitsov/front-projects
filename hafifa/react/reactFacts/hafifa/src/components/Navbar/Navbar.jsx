import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="nav-body">
      <img src={reactLogo} alt="" />
      <div id="nav-title">ReactFacts</div>
    </div>
  );
};

export default Navbar;
