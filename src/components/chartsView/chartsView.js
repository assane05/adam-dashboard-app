import React from "react";
import "./chartsView.css";
import NavBar from "../navBar/navBar";
import NavAndSidebar from "../navAndSidebar/navAndSidebar";
import Charts from "../charts/charts";

function ChartsView() {
  return (
    <div className="component-charts-view">
      <NavBar />
      <div className="row">
        <div className="col-lg-2">
          <NavAndSidebar />
        </div>
        <div className="col-lg-10">
          <Charts />
        </div>
      </div>
    </div>
  );
}
export default ChartsView;
