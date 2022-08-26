import React from "react";
import "../styles/NavBars.css";
const NavBars = () => {
  return (
    <nav className="nav justify-content-center container-navBar bg-light">
        <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Nutrition</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Plans</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
        </li>
    </nav>
  );
};

export default NavBars;
