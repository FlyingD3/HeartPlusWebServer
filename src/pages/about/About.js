import React, { Component } from "react";
import BinaryContainer from "./../../utils/containers/binary/BinaryContainer";

import "./About.css";
import Sidebar from "./components/sidebar/Sidebar";
import Display from "./components/display/Display";

class About extends Component {
  render() {
    return (
      <BinaryContainer
        ltCnt={<Sidebar />}
        rtCnt={<Display />}
        isInvertedColors={true}
      />
    );
  }
}

export default About;
