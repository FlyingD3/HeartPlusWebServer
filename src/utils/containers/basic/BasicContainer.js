import React, { Component } from "react";
import Back from "../../buttons/back/Back";

import "./BasicContainer.css";

class BasicContainer extends Component {
  static defaultProps = {
    className: "",
    isInvertedColors: false,
    isHiddenButtons: false
  };

  render() {
    return (
      <div className={"basic-cnt " + this.props.className}>
        {this.props.children}
        <Back
          isInvertedColors={this.props.isInvertedColors}
          isHidden={this.props.isHiddenButtons}
        />
      </div>
    );
  }
}

export default BasicContainer;
