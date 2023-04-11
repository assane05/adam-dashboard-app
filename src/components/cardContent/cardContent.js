import React from "react";
import "./cardContent.css";
import TableOrders from "../tableOrders/tableOrders";
import TableCustumers from "../tableCustumers/tableCustumers";

function CardContent() {
  return (
    <div className="component-card-content">
      {/*  <!-- Content Row --> */}
      <div className="row">
        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Community
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    20k
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <!-- Earnings (Monthly) Card Example --> */}
        {/* <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Earnings (Annual)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $215,000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        {/*  <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Orders
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        50%
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info a1"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <!-- Pending Requests Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Daily Orders
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    56
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <!-- Content Row --> */}

      <div className="row">
        {/*   <!-- table --> */}
        <div className="col-xl-8 col-lg-7">
          <TableOrders />
        </div>

        {/*  <!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <TableCustumers />
        </div>
      </div>

      {/*   <!-- Content Row --> */}
      <div className="row">
        {/*   <!-- Content Column --> */}
        <div className="col-lg-6 mb-4">
          {/* <!-- Project Card Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">autre chose</h6>
            </div>
            {/* contenu  */}
          </div>

          {/* <!-- Color System --> */}
          <div className="row">
            <div className="col-lg-6 mb-4">je suis</div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          {/* <!-- Illustrations --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Rien</h6>
            </div>
            {/* contenu  */}
          </div>

          {/* <!-- Approach --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Rien</h6>
            </div>
            {/* contenu */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardContent;
