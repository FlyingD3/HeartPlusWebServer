import React, { Component } from "react";
import Back from "../../buttons/back/Back";

import "./BinaryContainer.css";

class BinaryContainer extends Component {
  static defaultProps = {
    rtCnt: "",
    ltCnt: "",
    className: "",
    isInvertedColors: false,
    isHiddenButtons: false,
    isInvertedColumns: false,
    isAdaptableToContext: false
  };

  switchTo = () => {
    let result;

    if (this.props.isAdaptableToContext)
      result = !this.props.isInvertedColumns
        ? "adpt-bi-cnt"
        : "adpt-rev-bi-cnt";
    else result = !this.props.isInvertedColumns ? "bi-cnt" : "rev-bi-cnt";

    return result + " " + this.props.className;
  };

  render() {
    return (
      <div className={this.switchTo()}>
        {this.props.ltCnt}
        {this.props.rtCnt}
        <Back
          isInvertedColors={this.props.isInvertedColors}
          isHidden={this.props.isHiddenButtons}
        />
      </div>
    );
  }
}

export default BinaryContainer;
