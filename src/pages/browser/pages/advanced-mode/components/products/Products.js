import React, { Component } from "react";

import "./Products.css";
import loaderIcon from "../../../../../../utils/loaders/loader-white.gif";
class Products extends Component {
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
        <div className="am-visualizer-items">
          <ul>
            {items.map((item) => {
              return (
                <li key={item} onClick={() => handler(item)}>
                  {item}
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

export default Products;
