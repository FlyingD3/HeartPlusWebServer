import React, { Component } from "react";

import Display from "./components/display/Display";
import Sidebar from "./components/sidebar/Sidebar";

import BinaryContainer from "../../utils/containers/binary/BinaryContainer";
import "./Browser.css";

import { RemoteBrowserContext } from "../../utils/context/RemoteBrowserContext";

class Browser extends Component {
  static contextType = RemoteBrowserContext;

  state = {

  };

  componentDidMount() {

  }

  render() {
    return (
      <BinaryContainer
        ltCnt={
          <Sidebar/>
        }
        rtCnt={
          <Display
          />
        }
        isHiddenButtons={true}
      />
    );
  }
}

export default Browser;
