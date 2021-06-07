import React, { Component } from "react";

import bckgPanel from "./img/bckg-panel.svg";

import "./Sidebar.css";

class Sidebar extends Component {
  state = {
    version: "0.0.0.1"
  };

  render() {
    return (
      <div className="abt-sidebar">
        <img src={bckgPanel} alt="HeartPlus setting" />
        <div className="footer">
          <h5>Version {this.state.version}</h5>
          <h5>
            Built with <span style={{ color: "#d80000" }}>❤</span>
          </h5>
        </div>
      </div>
    );
  }
}

export default Sidebar;
