import React, { Component } from "react";

import "./Background.css";

import irib from "./icons/irib.png";

class Background extends Component {
  render() {
    return (
      <div className="mn-background-container">
        <a href="/#" className="mn-switch-button">
          <img src={irib} alt="IRIB CNR icon" />
        </a>
      </div>
    );
  }
}

export default Background;
