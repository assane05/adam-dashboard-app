import React from "react";
import "./dashboardView.css";
import Dashboard from "../dashboard/index";
import NavAndSidebar from "../navAndSidebar/navAndSidebar";
import NavBar from "../navBar/navBar";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function DashboardView() {
  return (
    <div className="component-dashboard-view body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
export default DashboardView;
