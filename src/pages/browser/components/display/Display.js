import React, { Component } from "react";

import "./Display.css";
import Chart from "react-google-charts";

import backIcon from "../../../../utils/buttons/icon/back-black.svg";
import { Link } from "react-router-dom";

class Display extends Component {
  state = {};

  constructor(props){
    super(props)
    //verifico che il login è stato effettuato altrimenti rimando alla login
  }
  render() {
    return (
      <div className="br-display">
        <div className="br-display-header">
          <h5>Patient Data</h5>
        </div>
        <div className="br-display-subheaders">
          <div className="br-display-header0">Mario Rossi</div>
          <div className="br-display-header1">Età: 32 anni</div>
        </div>
        <div className="br-display-content">
          <div className="br-display-chart">
            <Chart
              width={"40rem"}
              height={"auto"}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "battiti"],
                ["6:00", 56],
                ["7:00", 65],
                ["8:00", 80],
                ["9:00", 67],
                ["10:00", 115],
                ["11:00", 78],
                ["12:00", 96],
              ]}
              options={{
                title: "Heart monitoring",
                hAxis: { title: "Time", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                animation: {
                  duration: 1000,
                  easing: "out",
                  startup: true,
                },
                backgroundColor: "#F5f5f5",
                legend: { position: "none", maxLines: 3 },

                series: { 0: { color: "#e2431e" } },
                chartArea: { width: "50%", height: "70%" },
                // lineWidth: 25
              }}
            />
          </div>
          <div className="br-display-info">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullamco
                laboriosam, nisi ut aliquid ex ea commodi consequatur...
          </div>
          <Link to="/">
            <img id="back-btn" src={backIcon} alt="Back button" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Display;
