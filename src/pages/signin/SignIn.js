import React, { Component } from "react";

import Form from "./components/form/Form";
import NavBar from "../menu/components/navbar/Navbar";

import "./SignIn.css";
class SignIn extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="su-cnt">
          <div className="su-left-side">
            <Form/>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
