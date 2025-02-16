import React from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css"
import logo from "../img/Page 1.png";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src={logo} alt="Home Logo" className="nav-logo" /></Link>
      </div>
      <div className="navber-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
