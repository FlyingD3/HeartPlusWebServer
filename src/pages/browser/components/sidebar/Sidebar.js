import React, { Component } from "react";
import { PATIENT_MATCHER } from "../../../../utils/Const";

import "./Sidebar.css";

import loaderIcon from "../../../../utils/loaders/loader-red.gif";
import switchIcon from "./icon/switch.svg";
import searchIcon from "./icon/search.svg";

class Sidebar extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {patients:[]}
    //faccio il loading dei pazienti dal database
 this.loadPatients()
  } 

  loadPatients = () => {
    fetch("/patients/all")
    .then((response) => response.json()).then(resPatients=>{this.setState({patients: resPatients})}
    );
  }

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

  searchPatients(e){
    const {patients} = this.state;
    // patients.map
  }

  handleInput = (ev) => {
    console.log("qui")
    console.log(ev.target.value.toUpperCase())
   this.setState({ crtPatient: ev.target.value.toUpperCase() }, this.search);
  };
 
  render() {
    return (
      <div className="br-sidebar">
        <div className="br-sidebar-header">
          <h4>Pazienti</h4>
        </div>
        <div className="br-sidebar-list">
          <div className="br-sidebar-input">
            <div className="CardInner">
              <label>Nome del paziente</label>
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
                  <input placeholder="search" onChange={this.searchPatients}/>
                </div>
              </div>
            </div>
          </div>
          <div className="br-sidebar-items">
            <ul>
              {this.state.patients.map(element => 
                 <li>{element.name +" "+ element.lastname}</li>
              )}
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
