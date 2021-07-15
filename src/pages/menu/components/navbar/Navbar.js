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
            <Link to="/browser">
              <a>Check</a>
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/status">
              <a>Status</a>
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/about">
              <a>About</a>
            </Link>
          </div>
          <div className="nav-btn-link">
            <Link to="/login">
              <a href="something" className="button6">
                Login
              </a>
            </Link>
          </div>
          <div className="nav-btn-link">
            <Link to="/sign-up">
              <a href="something" className="button6">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </header>
      <div className="nav-burger-cnt">
          <ul className="navbar" id="navbar">
            <li>
              <a href="#">Check</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">About</a>
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
