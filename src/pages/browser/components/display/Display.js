import React, { Component } from "react";

import "./Display.css";

import backIcon from "../../../../utils/buttons/icon/back-black.svg";
import { Link } from "react-router-dom";

class Display extends Component {
  state = {};

  render() {
    return (
      <div className="br-display">
        <div className="br-display-header">
          <h5>Patient Data</h5>
        </div>
        <div className="br-display-subheaders">
          <div className="br-display-header0"></div>
          <div className="br-display-header1"></div>
        </div>
        <div className="br-display-content">
          <div className="br-display-wrapper"></div>
          <Link to="/">
            <img id="back-btn" src={backIcon} alt="Back button" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Display;
