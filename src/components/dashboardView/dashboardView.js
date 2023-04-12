import React from "react";
import "./dashboardView.css";
import Dashboard from "../dashboard/index";
import NavAndSidebar from "../navAndSidebar/navAndSidebar";
import NavBar from "../navBar/navBar";

function DashboardView() {
  return (
    <div className="component-dashboard-view">
      <NavBar />
      <div className="row">
        <div className="col-lg-2">
          <NavAndSidebar />
        </div>
        <div className="col-lg-10">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
export default DashboardView;
