import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import Display from "./components/display/Display";
import Sidebar from "./components/sidebar/Sidebar";

import BinaryContainer from "../../../../utils/containers/binary/BinaryContainer";
import { API_BASE_URL } from "../../../../utils/Const";
import "./AdvancedMode.css";

import { RemoteBrowserContext } from "../../../../utils/context/RemoteBrowserContext";

class AdvancedMode extends Component {
  static contextType = RemoteBrowserContext;

  state = {
    vendors: [],
    products: [],
    versions: [],
    vulnerabilities: [],
    crtVendor: "",
    crtProduct: "",
    crtVersion: "",
    status: {
      vendors: null,
      products: null,
      versions: null,
      vulnerabilities: null
    },
    itemHTML: {},
    isShownItemHTML: false,
    redirect: false
  };

  componentDidMount() {
    // Loading vendors list
    this.vendors();
  }

  vendors = () => {
    // Reset flag
    this.setState((previous) => {
      return {
        ...previous,
        status: {
          vendors: false,
          products: null,
          versions: null,
          vulnerabilities: null
        },
        isShownItemHTML: false
      };
    });

    const DEF_URL = API_BASE_URL + "vendors";

    // Initiating request
    fetch(DEF_URL)
      // Evaluating result as JSON
      .then((res) => res.json())
      // Exporting data
      .then((res) => {
        // Handling json now requires one more step
        res = JSON.parse(res);
        // Updating state
        this.setState({
          vendors: res["vendor-list"],
          status: {
            vendors: true
          }
        });
      });
  };

  products = () => {
    const DEF_URL = API_BASE_URL + "vendors/browse/" + this.state.crtVendor;
    // Updating state
    this.setState((previous) => {
      return {
        ...previous,
        status: {
          ...previous.status,
          products: false,
          versions: null,
          vulnerabilities: null
        },
        isShownItemHTML: false
      };
    });

    // Initiating request
    fetch(DEF_URL)
      // Evaluating result as JSON
      .then((res) => res.json())
      // Exporting data
      .then((res) => {
        // Handling json now requires one more step
        res = JSON.parse(res);
        // Updating state
        this.setState((previous) => {
          return {
            ...previous,
            products: res["product-list"],
            status: {
              ...previous.status,
              products: true
            }
          };
        });
      });
  };

  versions = () => {
    const { crtVendor, crtProduct } = this.state;

    const DEF_URL =
      API_BASE_URL + "vendors/browse/" + crtVendor + "/" + crtProduct;

    // Reset flag
    this.setState((previous) => {
      return {
        ...previous,
        status: {
          ...previous.status,
          versions: false,
          vulnerabilities: null
        },
        isShownItemHTML: false
      };
    });

    // Initiating request
    fetch(DEF_URL)
      // Evaluating result as JSON
      .then((res) => res.json())
      // Exporting data
      .then((res) => {
        // Handling json now requires one more step
        res = JSON.parse(res);
        // Updating state
        this.setState((previous) => {
          return {
            ...previous,
            versions: res["version-list"],
            status: {
              ...previous.status,
              versions: true
            }
          };
        });
      });
  };

  vulnerabilities = () => {
    const { crtVendor, crtProduct, crtVersion } = this.state;

    const DEF_URL =
      API_BASE_URL +
      "vendors/browse/" +
      crtVendor +
      "/" +
      crtProduct +
      "/" +
      crtVersion;

    // Reset flag
    this.setState((previous) => {
      return {
        ...previous,
        status: {
          ...previous.status,
          vulnerabilities: false
        }
      };
    });

    // Initiating request
    fetch(DEF_URL)
      // Evaluating result as JSON
      .then((res) => res.json())
      // Exporting data
      .then((res) => {
        // Handling json now requires one more step
        res = JSON.parse(res);
        // Updating state
        this.setState((previous) => {
          return {
            ...previous,
            vulnerabilities: res["vulnerability-list"],
            status: {
              ...previous.status,
              vulnerabilities: true
            }
          };
        }, this.crtVulnerabilities);
      });
  };

  crtVendor = (item) => {
    this.setState({ crtVendor: item }, this.products);
  };

  crtProduct = (item) => {
    this.setState({ crtProduct: item }, this.versions);
  };

  crtVersion = (srcHTML, item) => {
    if (this.state.crtVersion !== item) {
      this.setState(
        {
          crtVersion: item,
          itemHTML: srcHTML.target,
          isShownItemHTML: false
        },
        this.vulnerabilities
      );
    }
  };

  crtVulnerabilities = () => {
    if (!this.state.isShownItemHTML)
      ReactDOM.render(
        <ul className="vr-list-nested">{this.appendCve()}</ul>,
        this.state.itemHTML
      );
    this.setState({ isShownItemHTML: true });
  };

  redirect = (id) => {
    const { setCve } = this.context;

    this.setState({ redirect: true }, setCve(id));
  };

  appendCve = () => {
    var el = [];

    el.push(
      <li key={this.state.crtVersion}>
        <span className="vr-list-header">{this.state.crtVersion}</span>
      </li>
    );

    this.state.vulnerabilities.forEach((e) => {
      el.push(
        <li className="vr-vln-item" key={e} onClick={() => this.redirect(e)}>
          {e}
        </li>
      );
    });

    return el;
  };

  render() {
    const { vendors, products, versions, status } = this.state;
    return (
      <>
        <BinaryContainer
          ltCnt={
            <Sidebar
              vendors={vendors}
              isLoaded={status.vendors}
              crtVendor={this.crtVendor}
            />
          }
          rtCnt={
            <Display
              products={products}
              versions={versions}
              areProductsLoaded={status.products}
              areVersionsLoaded={status.versions}
              crtProduct={this.crtProduct}
              crtVersion={this.crtVersion}
            />
          }
          isHiddenButtons={true}
        />
        {this.state.redirect && <Redirect to="/browser" />}
      </>
    );
  }
}

export default AdvancedMode;
