import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="bg-img"></div>
      <nav className="navbar navbar-expand-lg">
        <div className="topnav">
          <Link className="effect-underline" to="/forHim">
            Home
          </Link>
          <Link className="effect-underline" to="/forHim">
            Him
          </Link>
          <Link className="effect-underline" to="/forHim">
            Her
          </Link>

          <Link className="topnavAbout effect-underline" to="/forHim">
            About Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
