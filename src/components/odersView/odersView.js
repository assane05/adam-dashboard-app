import React from "react";
import "./odersView.css";
import NavBar from "../navBar/navBar";
import NavAndSidebar from "../navAndSidebar/navAndSidebar";
import Oders from "../oders/oders";

function OdersView() {
  return (
    <div className="component-oders-view">
      <NavBar />
      <div className="row">
        <div className="col-lg-2">
          <NavAndSidebar />
        </div>
        <div className="col-lg-10">
          <Oders />
        </div>
      </div>
    </div>
  );
}
export default OdersView;
