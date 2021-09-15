import React, { Component } from "react";

import Form from "./components/form/Form";
import "./Signup.css";
import NavbarUser from "../menu/components/navbarUser/NavbarUser";

class Signup extends Component {
  render() {
    return (
      <>
        <NavbarUser/>
        <div className="su-cnt">
        <div className="su-left-side">
            <Form />
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
