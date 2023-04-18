import React from "react";
import "./allCustomersListView.css";
import Dashboard from "../dashboard/dashboard";
import AllCustomersList from "../allCustomersList/allCustomersList";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function AllCustomersListView() {
  return (
    <div className="component-all-customers-list-view body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-5">
          <AllCustomersList />
        </div>
      </div>
    </div>
  );
}
export default AllCustomersListView;
