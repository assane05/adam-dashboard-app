import React from "react";
import "./chartsView.css";
import Charts from "../charts/charts";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function ChartsView() {
  return (
    <div className="component-charts-view body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-5">
          <Charts />
        </div>
      </div>
    </div>
  );
}
export default ChartsView;
