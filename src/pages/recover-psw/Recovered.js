import React, { Component } from "react";
import "./Recovered.css"

import TickIcon from "./img/tick.svg";
import BasicContainer from "../../utils/containers/basic/BasicContainer";

class Recovered extends Component {
  render() {
    return (
      <BasicContainer className="cnt-recovered">
        <img src={TickIcon} alt="Not found icon" />
        <h1>Email di reimpostazione password inviata</h1>
        <hr />
        <h5>Un'e-mail è stata inviata all'indirizzo segnalato. Per reimpostare la password segui le istruzioni riportate nell'e-mail</h5>
      </BasicContainer>
    );
  }
}

export default Recovered;
