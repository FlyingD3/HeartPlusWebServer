import React, { Component } from "react";

import "./Versions.css";
import loaderIcon from "../../../../../../utils/loaders/loader-white.gif";
class Versions extends Component {
  static defaultProps = {
    header: "Unknown",
    style: {},
    isLoaded: null,
    items: []
  };

  show = () => {
    const { items, handler } = this.props;
    return (
      <>
        <div className="vr-list">
          <ul>
            {items.map((item) => {
              return (
                <li key={item} onClick={(e) => handler(e, item)}>
                  <span className="vr-list-item">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  };

  loading = () => {
    return (
      <div className="br-loader-wrapper">
        <img id="loader-icon" src={loaderIcon} alt="Loading icon" />
      </div>
    );
  };

  render() {
    return (
      <div style={this.props.style} className="am-visualizer">
        <div className="am-visualizer-header">
          <h5>{this.props.header}</h5>
        </div>
        <div className="am-visualizer-list">
          {this.props.isLoaded === null
            ? null
            : this.props.isLoaded
            ? this.show()
            : this.loading()}
        </div>
      </div>
    );
  }
}

export default Versions;
