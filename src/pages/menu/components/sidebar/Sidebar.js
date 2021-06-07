import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Sidebar.css";

import heartIcon from "./icons/heart.svg";
import securityIcon from "./icons/security.svg";
import settingIcon from "./icons/settings.svg";
import aboutIcon from "./icons/about.svg";

class Sidebar extends Component {
  render() {
    return (
      <div className="mn-nav-bar">
        <ul className="mn-nav-items">
          <li>
            <Link to="/browser">
              <img alt="News icon" src={heartIcon} />
            </Link>
          </li>
          <li>
            <Link to="/status">
              <img alt="Security icon" src={securityIcon} />
            </Link>
          </li>
          <li>
            <Link to="/setting">
              <img alt="Setting icon" src={settingIcon} />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img alt="About icon" src={aboutIcon} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
