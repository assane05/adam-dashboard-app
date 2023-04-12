import React from "react";
import "./tableCustumers.css";

function TableCustumers() {
  return (
    <div className="component-table-custumers">
      <div className="card shadow mb-4">
        {/*  <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">New Customers</h6>
          <div className="dropdown no-arrow">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink"
            >
              <div className="dropdown-header">Dropdown Header:</div>
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                action
              </a>
            </div>
          </div>
        </div>
        {/*  <!-- Card Body --> */}
        <div className="card-body">
          <div className="mt-3 small">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark dev</td>
                  <td>
                    <i className="fas fa-envelope"></i>
                  </td>
                  <td>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark dev</td>
                  <td>
                    <i className="fas fa-envelope"></i>
                  </td>
                  <td>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mark dev</td>
                  <td>
                    <i className="fas fa-envelope"></i>
                  </td>
                  <td>
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TableCustumers;
