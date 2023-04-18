import React from "react";
import "./help.css";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function Help() {
  return (
    <div className="component-help body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-5">
          <div class="container-fluid">
            <h1 class="h3 mb-1 text-gray-800">Pages d’aide</h1>
            <p class="mb-4"></p>

            <div class="row">
              <div class="col-lg-12">
                <div class="card mb-4 py-3 ">
                  <div class="card-body">que puis-je faire pour vous </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-lg-12">
                <div class="card mb-4 py-3">
                  <div class="card-body">que puis-je faire pour vous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Help;
