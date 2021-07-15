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
              placeholder="Nome del paziente"
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
          {/*this.props.isLoaded ? this.show() : this.loading()*/}

          {/*MOCKUP*/}
          <div className="br-sidebar-input">
            <div className="CardInner">
              <label>Full name of the patient</label>
              <div className="container">
                <div className="Icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#657789"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <div className="InputContainer">
                  <input placeholder="search" />
                </div>
              </div>
            </div>
          </div>
          <div className="br-sidebar-items">
            <ul>
              <li>Mario Rossi</li>
              <li>Valeria Marrone</li>
              <li>Luigi Bianchi</li>
              <li>Eleonora Neri</li>
              <li>Giuseppe Verdi</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
