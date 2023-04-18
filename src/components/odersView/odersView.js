import React from "react";
import "./odersView.css";
import Oders from "../oders/oders";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function OdersView() {
  return (
    <div className="component-oders-view body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-5">
          <Oders />
        </div>
      </div>
    </div>
  );
}
export default OdersView;
