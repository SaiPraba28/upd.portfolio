import React from "react";
import "./styles/Navbar.css";  // make sure this file exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Sai Praba R</h2> {/* Replace with your name or brand */}
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li> 
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li> 
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

;
