import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar"
import Display from "./components/display/Display"

import "./Menu.css";


class Menu extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Display/>
      </>
    );
  }
}

export default Menu;
