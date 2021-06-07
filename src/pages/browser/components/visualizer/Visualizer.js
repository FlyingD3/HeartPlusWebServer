import React, { Component } from "react";

import "./Visualizer.css";

import loaderIcon from "../../../../utils/loaders/loader-blue.gif";

class Visualizer extends Component {
  static defaultProps = {
    isLoaded: false,
    cve: {}
  };

  cvssV3 = () => {
    const { cve } = this.props;

    let items = [];

    for (let [key, value] of Object.entries(cve.cvssV3)) {
      items.push(
        <li key={key + "v3"}>
          {key.charAt(0).toUpperCase() + key.slice(1) + ": "}
          <span>{value}</span>
        </li>
      );
    }

    return items;
  };

  cvssV2 = () => {
    const { cve } = this.props;

    let items = [];

    for (let [key, value] of Object.entries(cve.cvssV2)) {
      items.push(
        <li key={key + "v2"}>
          {key.charAt(0).toUpperCase() + key.slice(1) + ": "}
          <span>{value + ""}</span>
        </li>
      );
    }

    return items;
  };

  references = () => {
    const { cve } = this.props;

    let items = [];

    cve.references.forEach((el) => {
      items.push(
        <li key={el.url}>
          -{" "}
          <a href={el.url} target="_blank" rel="noopener noreferrer">
            {el.url}
          </a>
          <br />
          {this.tags(el.tags)}
          <span key={"refsource"} className="br-badge">
            {el.refsource}
          </span>
        </li>
      );
    });

    if (cve.references.length === 0) items.push("No references available...");

    return items;
  };

  tags = (group) => {
    let items = [];
    group.forEach((e, idx) => {
      items.push(
        <span key={idx} className="br-badge">
          {e}
        </span>
      );
    });
    return items;
  };

  configurations = () => {
    const { cve } = this.props;

    let items = [];

    cve.configurations.forEach((element) => {
      const { cpe23Uri, vulnerable } = element;

      items.push(
        <li key={cpe23Uri}>
          - {cpe23Uri} | Vulnerable: <span>{vulnerable ? "Yes" : "No"}</span>
        </li>
      );
    });

    if (cve.configurations.length === 0)
      items.push("No configurations available...");

    return items;
  };

  show = () => {
    const { cve, error, cveExist } = this.props;
    if (cveExist === undefined || cveExist === true) {
      return (
        <div className="br-display-data">
          <h5>Summary</h5>
          <p>{cve.description}</p>
          <span className="br-display-info">
            <h6>
              <span style={{ fontWeight: 700 }}>Source</span>: {cve.source}
            </h6>
            <h6>
              <span style={{ fontWeight: 700 }}>Publish date</span>:{" "}
              {cve.publishDate}
            </h6>
            <h6>
              <span style={{ fontWeight: 700 }}>Last update</span>:{" "}
              {cve.lastUpdate}
            </h6>
          </span>
          <div className="separator"></div>
          <h5>CVSS-(2) Scores &amp; Vulnerability Types</h5>
          <ul>{this.cvssV2()}</ul>
          <div className="separator"></div>
          <h5>CVSS-(3) Scores &amp; Vulnerability Types</h5>
          <ul>{this.cvssV3()}</ul>
          <div className="separator"></div>
          <h5>Configurations</h5>
          <ul>{this.configurations()}</ul>
          <div className="separator"></div>
          <h5>References</h5>
          <ul className="br-display-references">{this.references()}</ul>
        </div>
      );
    } else {
      return (
        <div className="br-display-data">
          <h5>{error.title.toUpperCase()}</h5>
          <p>{error.description}</p>
          <span className="br-display-info">
            <h6>
              <span style={{ fontWeight: 700 }}>Http code</span>:{" "}
              {error !== undefined && error.httpCode}
            </h6>
            <h6>
              <span style={{ fontWeight: 700 }}>Error code</span>:{" "}
              {error !== undefined && error.errorCode}
            </h6>
          </span>
        </div>
      );
    }
  };

  loading = () => {
    return (
      <div className="br-loader-wrapper">
        <img id="loader-icon" src={loaderIcon} alt="Loading icon" />
      </div>
    );
  };

  render() {
    return !this.props.isLoaded ? this.loading() : this.show();
  }
}

export default Visualizer;
