import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import "./NavbarUser.css";
import Logo from "./icons/logo.svg";
class NavbarUser extends Component {

  constructor(props){
    super(props)
    if(sessionStorage.getItem("loggedIN") == null){
      console.log("qui")
      this.state = {redirect:true}
      console.log(this.state.redirect)
    }
    else    this.state = {redirect:false}
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/login'/>;
    }
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
              <a>Area Pazienti</a>
            </Link>
          </div>
          <div className="nav-link">
            <Link to="/about">
              <a>Il Progetto</a>
            </Link>
          </div>
          <div className="nav-btn-link">
            <Link to="/sign-up">
              <a href="something" className="button6">
                Registra Paziente
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

export default NavbarUser;
