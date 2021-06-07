import React, { Component } from "react";

import "./Display.css";
import backIcon from "../../../../../../utils/buttons/icon/back-white.svg";
import BinaryContainer from "../../../../../../utils/containers/binary/BinaryContainer";

import Products from "../products/Products";
import Versions from "../versions/Versions";

import switchIcon from "./icon/switch-white.svg";

import { Link } from "react-router-dom";

class Display extends Component {
  static defaultProps = {
    isLoaded: null,
    products: []
  };

  state = {};

  render() {
    const {
      products,
      areProductsLoaded,
      crtProduct,
      versions,
      areVersionsLoaded,
      crtVersion
    } = this.props;

    return (
      <div className="br-display">
        <div className="am-display-header">
          <h5>Vulnerability details</h5>
        </div>

        <div className="am-display-content">
          <BinaryContainer
            className="am-visualizers-group"
            ltCnt={
              <Products
                items={products}
                isLoaded={areProductsLoaded}
                handler={crtProduct}
                header="Products"
                style={{ backgroundColor: "#326AA7" }}
              />
            }
            rtCnt={
              <Versions
                items={versions}
                isLoaded={areVersionsLoaded}
                handler={crtVersion}
                header="Versions"
                style={{ backgroundColor: "#4C7CB2" }}
              />
            }
            isAdaptableToContext={true}
            isHiddenButtons={true}
          />

          <Link to="/">
            <img id="back-btn" src={backIcon} alt="Back button" />
          </Link>
          <Link to="/browser" onClick={window.scrollTo(0, 0)}>
            <img id="switch-btn" src={switchIcon} alt="Switch button" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Display;
