import React from "react";
import OffTheReelLogo from "../assets/Off The Reel Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function openMenu() {
  document.body.classList += " menu--open"
  }

  function closeMenu() {
    document.body.classList.remove('menu--open')
    }

function redirectToPage() {
  window.open("https://cameronwarburton.github.io/Advanced-E-Portfolio/", "_blank");
}

const Nav = () => {
  return (
    <nav className="row">
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
          <Link to="/movies" className="link__hover-effect">
            Movies
          </Link>
        </li>
        <li className="nav__link">
          <button className="btn" onClick={redirectToPage}>
            Contact
          </button>
        </li>
      </ul>
      <button className="btn__menu" onClick={openMenu}>
        <FontAwesomeIcon icon="bars"/>
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon="times"/>
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link link__hover-effect" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/movies" className="menu__link link__hover-effect" onClick={closeMenu}>
              Movies
            </Link>
          </li>
          <li className="menu__list">
            <button className="btn" onClick={redirectToPage}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
