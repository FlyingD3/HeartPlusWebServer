import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "./icons/logo.svg";
class Navbar extends Component {
  render() {
    return (
      <>
      <header className="header-cnt">
        <div className="nav-logo">
          <img src={Logo} alt="logo icon" />
          <a href="/">HeartPlus</a>
        </div>
        <div className="nav-link-cnt">
          <div className="nav-link">
            <Link to="/about">
              <a>Il Progetto</a>
            </Link>
          </div>
          <div className="nav-btn-link">
            <Link to="/login">
              <a href="something" className="button6">
                Login
              </a>
            </Link>
          </div>
        </div>
      </header>
      <div className="nav-burger-cnt">
          <ul className="navbar" id="navbar">
            <li>
              <a href="#">Area Pazienti</a>
            </li>
            <li>
              <a href="#">Progetto</a>
            </li>
            <a className="close" href="#">
              <img
                src="https://ljc-dev.github.io/testing0/ham-close.svg"
                alt="close"
              />
            </a>
          </ul>
          <a className="hamburger" href="#navbar">
            <img src="https://ljc-dev.github.io/testing0/ham.svg" alt="menu" />
          </a>
        </div>
      </>
    );
  }
}

export default Navbar;
