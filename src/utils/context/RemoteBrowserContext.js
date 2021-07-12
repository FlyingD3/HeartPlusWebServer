import React, { createContext, Component } from "react";

export const RemoteBrowserContext = createContext();

class RemoteBrowserContextProvider extends Component {
  state = {
    id: "",
    getCve: () => {
      return this.state.id;
    },
    setCve: (id, fn) => this.setState({ id }, fn)
  };
  render() {
    return (
      <RemoteBrowserContext.Provider value={this.state}>
        {this.props.children}
      </RemoteBrowserContext.Provider>
    );
  }
}

export default RemoteBrowserContextProvider;
