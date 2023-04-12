import React from "react";
import "./allCustomersListView.css";
import Dashboard from "../dashboard/dashboard";
import NavBar from "../navBar/navBar";
import NavAndSidebar from "../navAndSidebar/navAndSidebar";
import AllCustomersList from "../allCustomersList/allCustomersList";

function AllCustomersListView() {
  return (
    <div className="component-all-customers-list-view">
      <NavBar />
      <div className="row">
        <div className="col-lg-2">
          <NavAndSidebar />
        </div>
        <div className="col-lg-10">
          <AllCustomersList />
        </div>
      </div>
    </div>
  );
}
export default AllCustomersListView;
