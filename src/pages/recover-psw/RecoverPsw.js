import React, { Component } from "react";

import Form from "./components/form/Form";
import NavBar from "../menu/components/navbar/Navbar";

import "./RecoverPsw.css";

class RecoverPsw extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="su-cnt">
          <div className="su-left-side">
            <Form />
          </div>
        </div>
      </>
    );
  }
}

export default RecoverPsw;