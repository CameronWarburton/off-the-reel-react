import React from "react";
import OffTheReelLogo from "../assets/Off The Reel Logo.png";
import { Link } from "react-router-dom";

function redirectToPage() {
  window.open("https://cameronwarburton.github.io/Advanced-E-Portfolio/", "_blank");
}

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img className="nav__logo" src={OffTheReelLogo} alt="Off The Reel Logo" />
      </Link>
      <ul className="nav__links">
        <li className="nav__link">
          <Link to='/'className="link__hover-effect">
            Home
          </Link>
        </li>
        <li className="nav__link">
          <Link to="/featured" className="link__hover-effect">
            Movies
          </Link>
        </li>
        <li className="nav__link">
          <button className="btn" onClick={redirectToPage}>
            Contact
          </button>
        </li>
      </ul>
      <button className="btn__menu" onclick="openMenu()">
        <i className="fas fa-bars"></i>
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onclick="closeMenu()">
          <i className="fas fa-times"></i>
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <a href="#" className="menu__link" onclick="closeMenu()">
              Home
            </a>
          </li>
          <li className="menu__list">
            <a href="#featured" className="menu__link" onclick="closeMenu()">
              Movies
            </a>
          </li>
          <li className="menu__list">
            <button className="btn" onclick="redirectToPage()">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
