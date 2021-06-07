import React, { createContext, Component } from "react";

export const ScanContext = createContext();

class ScanContextProvider extends Component {
  state = {
    id: "",
    latestScan: "",
    getId: () => {
      return this.state.id;
    },
    setId: (id, fn) => this.setState({ id }, fn),
    getLatestScan: () => {
      return this.state.latestScan;
    },
    setLatestScan: (latestScan, fn) => this.setState({ latestScan }, fn)
  };
  render() {
    return (
      <ScanContext.Provider value={this.state}>
        {this.props.children}
      </ScanContext.Provider>
    );
  }
}

export default ScanContextProvider;
