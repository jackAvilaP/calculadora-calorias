import React from "react";
import "../styles/NavBars.css";
const NavBars = () => {
  return (
    <nav className="nav justify-content-center container-navBar bg-light">
        <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Nutrición</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Planes</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contactos</a>
        </li>
    </nav>
  );
};

export default NavBars;
