import React, { Component } from "react";
import { PATIENT_MATCHER } from "../../../../utils/Const";

import "./Sidebar.css";

import loaderIcon from "../../../../utils/loaders/loader-red.gif";
import switchIcon from "./icon/switch.svg";
import searchIcon from "./icon/search.svg";

class Sidebar extends Component {
  state = {};

  load = () => {
    const { crtPatient } = this.state;
    if (!Object.is(this.isPatient(crtPatient), null))
      this.setState({ crtFilteredItems: this.isPatient(crtPatient) }, () =>
        this.props.onPatientChange(undefined, crtPatient)
      );
  };

  isPatient = (id) => {
    return id.match(PATIENT_MATCHER);
  };

  search = () => {
    if (this.state.crtPatient.length === 0)
      this.setState({
        crtFilteredItems: [],
      });
    else this.load();
  };

  handleInput = (ev) => {
    this.setState({ crtPatient: ev.target.value.toUpperCase() }, this.search);
  };

  show = () => {
    const { items, load, error } = this.props;
    const { crtFilteredItems } = this.state;
    let data;
    // Loading items
    data = crtFilteredItems.map((id) => {
      return (
        // We are modifyng the key to avoid collision with visualizer keys
        <li key={id + "src"} onClick={(e) => this.props.onPatientChange(e, id)}>
          {id}
        </li>
      );
    });

    return (
      <>
        <div className="br-sidebar-input">
          <div className="br-sidebar-search">
            <img src={searchIcon} alt="Search icon" />
            <input
              id="vendor-search"
              type="text"
              placeholder="CVE-2020-0001"
              onChange={this.handleInput}
            />
          </div>
          <img
            className="br-switch-style"
            src={switchIcon}
            alt="change search method"
            onClick={this.onSwitchChange}
          ></img>
        </div>
        <div className="br-sidebar-items">
          <ul>{data}</ul>
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
      <div className="br-sidebar">
        <div className="br-sidebar-header">
          <h4>PATIENTS</h4>
        </div>
        <div className="br-sidebar-list">
          {this.props.isLoaded ? this.show() : this.loading()}
        </div>
      </div>
    );
  }
}

export default Sidebar;
