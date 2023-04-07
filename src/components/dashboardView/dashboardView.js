import React from "react";
import "./dashboardView.css";
import Dashboard from "../dashboard/index";

function DashboardView() {
  return (
    <div className="component-dashboard-view">
      <div className="row">
        <Dashboard />
      </div>
    </div>
  );
}
export default DashboardView;
