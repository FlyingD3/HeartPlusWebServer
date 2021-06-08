import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "./icons/logo.svg";
class Navbar extends Component {
  render() {
    return (
      <header class="header-cnt">
        <div class="nav-logo">
          <img src={Logo} alt="logo icon" />
          <a href="/">HeartPlus</a>
        </div>
        <div class="nav-link-cnt">
          <div class="nav-link">
            <Link to="/browser">
              <a>Check</a>
            </Link>
          </div>
          <div class="nav-link">
            <Link to="/status">
              <a>Status</a>
            </Link>
          </div>
          <div class="nav-link">
            <Link to="/about">
              <a>About</a>
            </Link>
          </div>
          <div class="nav-btn-link">
            <Link to="/login">
              <a href="something" className="button6">
                Login
              </a>
            </Link>
          </div>
          <div class="nav-btn-link">
            <Link to="/sign-up">
              <a href="something" className="button6">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
