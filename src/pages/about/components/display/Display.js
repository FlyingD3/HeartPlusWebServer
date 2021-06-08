import React, { Component } from "react";

import "./Display.css";

class Display extends Component {
  render() {
    return (
      <div className="abt-display">
        <div className="abt-col-one">
          <h3>Mission</h3>
          <p className="author-name">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="abt-col-two">
          <div className="author-cnt">
            <h3>Author</h3>
            <p className="author-name">...</p>

          </div>
        </div>
      </div>
    );
  }
}

export default Display;
