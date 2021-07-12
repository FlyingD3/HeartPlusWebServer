import React, { Component } from "react";
import "./NotFound.css";

import NotFoundIcon from "./img/not-found.svg";
import BasicContainer from "../../utils/containers/basic/BasicContainer";

class NotFound extends Component {
  render() {
    return (
      <BasicContainer className="cnt-404">
        <img src={NotFoundIcon} alt="Not found icon" />
        <h1>PAGE NOT FOUND</h1>
        <hr />
        <h2>Hai provato a spegnere e riaccendere?</h2>
      </BasicContainer>
    );
  }
}

export default NotFound;
