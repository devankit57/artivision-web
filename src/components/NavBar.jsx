import React from "react";
import logo from "../images/logo.svg";
import "../App.css";

const NavBar = () => {
  return (
   
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" width={100} />
      <h1>ArtiVision </h1>
      
    </header>
  );
}

export default NavBar;
