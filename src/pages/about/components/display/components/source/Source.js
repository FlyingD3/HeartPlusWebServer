import React, { Component } from "react";

import "./Source.css";

class Source extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="abt-source">
        <h3>{item.name}</h3>
        {this.print(item)}
      </div>
    );
  }

  print(item) {
    return item.values.map((obj) => (
      <div key={obj.id}>
        <h5>{obj.src}</h5>
        <ul>{this.evaluate(obj)}</ul>
      </div>
    ));
  }

  evaluate(obj) {
    return obj.values.map((el) => (
      <li key={el.id}>
        <span style={{ fontWeight: 400 }}>{el.key ? el.key + ": " : null}</span>
        {el.value}
      </li>
    ));
  }
}

export default Source;
