import React, { useState } from "react";
import "./navAndSidebar.css";
import { Link } from "react-router-dom";

function NavAndSidebar() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  // const changeStyle1 = () => {
  //   if (
  //     style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  //   ) {
  //     setStyle(
  //       "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
  //     );
  //   } else {
  //     setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
  //   }
  // };
  return (
    <div className="component-nav-and-sidebar">
      <div>
        <body id="page-top">
          {/*  <!-- Page Wrapper --> */}
          <div id="wrapper">
            {/*  <!-- Sidebar --> */}
            <ul className={style} id="accordionSidebar">
              {/*  <!-- Sidebar - Brand --> */}
              <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="#"
              >
                {/* <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div> */}
                <div className="sidebar-brand-text mx-3">Admin</div>
                <div className="text-center d-none d-md-inline">
                  <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                    onClick={changeStyle}
                  ></button>
                </div>
              </a>

              {/*   <!-- Divider --> */}
              <hr className="sidebar-divider my-0" />

              {/*  <!-- Nav Item - Dashboard --> */}
              <li className="nav-item active">
                <Link to="/admin-dashboard">
                  <a className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>

              {/*  <!-- Divider --> */}
              <hr className="sidebar-divider" />

              {/*   <!-- Heading --> */}
              {/* <div className="sidebar-heading">Interface</div> */}

              {/*  <!-- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                <Link to="/liste-all-users">
                  <a
                    className="nav-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Custumers</span>
                  </a>
                </Link>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  {/* <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="buttons.html">
                    Buttons
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Cards
                  </a>
                </div> */}
                </div>
              </li>

              {/* <!-- Nav Item - Utilities Collapse Menu --> */}
              <li className="nav-item">
                <Link to="/messages">
                  <a
                    className="nav-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseUtilities"
                    aria-expanded="true"
                    aria-controls="collapseUtilities"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>Messages</span>
                  </a>
                </Link>
                <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
                >
                  {/* <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <a className="collapse-item" href="#">
                    exemple
                  </a>
                  <a className="collapse-item" href="#">
                    exemple
                  </a>
                </div> */}
                </div>
              </li>

              {/*  <!-- Divider --> */}
              {/* <hr className="sidebar-divider" /> */}

              {/* <!-- Heading --> */}
              {/* <div className="sidebar-heading">Addons</div> */}

              {/*  <!-- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                <Link to="/orders">
                  <a
                    className="nav-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded="true"
                    aria-controls="collapsePages"
                  >
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Orders</span>
                  </a>
                </Link>
                <div
                  id="collapsePages"
                  className="collapse"
                  aria-labelledby="headingPages"
                  data-parent="#accordionSidebar"
                ></div>
              </li>

              {/* <!-- Nav Item - Charts --> */}
              <li className="nav-item">
                <Link to="/charts">
                  <a className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span>
                  </a>
                </Link>
              </li>
              {/*  <!-- Nav Item - Tasks --> */}

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Tasks</span>
                </a>
              </li>
              {/*  <!-- Nav Item - Help ! --> */}
              <li className="nav-item">
                <Link to="/help">
                  <a className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Help !</span>
                  </a>
                </Link>
              </li>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider d-none d-md-block" />

              {/*   <!-- Sidebar Toggler (Sidebar) --> */}
              {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

              {/*  <!-- Sidebar Message --> */}
            </ul>
            {/*  <!-- End of Sidebar --> */}

            {/*  <!-- Content Wrapper --> */}

            {/*  <!-- End of Content Wrapper --> */}
          </div>
          {/*  <!-- End of Page Wrapper -->

          

          {/*  <!-- Logout Modal--> */}
        </body>
      </div>
    </div>
  );
}

export default NavAndSidebar;
