import React, { Component } from "react";
import { Link } from "react-router-dom";

import blackIcon from "../icon/back-black.svg";
import whiteIcon from "../icon/back-white.svg";

import "./Back.css";

class Back extends Component {
  static defaultProps = {
    isInvertedColors: false,
    isHidden: false
  };

  render() {
    return (
      <Link to="/" style={{ display: this.props.isHidden ? "none" : "block" }}>
        <img
          id="util-back-btn"
          src={this.props.isInvertedColors ? whiteIcon : blackIcon}
          alt="Back icon"
        />
      </Link>
    );
  }
}

export default Back;
