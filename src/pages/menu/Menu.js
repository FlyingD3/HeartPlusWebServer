import React, { Component } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import Background from "./components/background/Background";

import "./Menu.css";
import BinaryContainer from "./../../utils/containers/binary/BinaryContainer";

class Menu extends Component {
  render() {
    return (
      <BinaryContainer
        ltCnt={<Sidebar />}
        rtCnt={<Background />}
        isHiddenButtons={true}
      />
    );
  }
}

export default Menu;
