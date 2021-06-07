import React, { Component } from "react";

import "./Display.css";

class Display extends Component {
  render() {
    return (
      <div className="abt-display">
        <div className="abt-col-one">
          <h3>Mission</h3>
          <p className="author-name">something...</p>
        </div>
        <div className="abt-col-two">
          <div className="author-cnt">
            <h3>Author</h3>
            <p className="author-name">Yuri Gentili</p>
            <p className="author-email">yurc3k@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
