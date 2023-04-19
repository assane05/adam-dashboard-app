import React from "react";
import "./navbarNav.css";
import { NavLink, Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

function NavbarNav() {
  return (
    <div className="component-navbar-nav">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand-md  navbar-light bg-white shadow topbar fixed-top">
            {/* px-lg-5 py-md-3 */}
            <div className="container-fluid">
              <a className="d-none d-lg-block welcome-header m-0 mt-3">Logo </a>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              {/* <NavLink className=" mr-lg-5 mr-0" to="/">
                <img className="logo-header" alt="" />
              </NavLink> */}
              <div class="collapse navbar-collapse">
                <form className="d-none d-sm-inline-block milieu-for-desktop form-inline ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  {/* milieu-for-desktop */}
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder=" Recherche "
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <Avatar className="avatar-rs-custom no-display-desktop">RS</Avatar> */}

              <ul className="navbar-nav ml-auto">
                {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </a>
                  {/*   <!-- Dropdown - Messages --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                {/*  <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell fa-fw"></i>
                    {/*  <!-- Counter - Alerts --> */}
                    <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                  {/*   <!-- Dropdown - Alerts --> */}
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white"></i>
                        </div>
                      </div>
                      <div>je suis une notification</div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-success">
                          <i className="fas fa-donate text-white"></i>
                        </div>
                      </div>
                      <div>je suis une notification</div>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>je suis une notification</div>
                    </a>
                    <a
                      className="dropdown-item text-center small text-gray-500"
                      href="#"
                    >
                      Show All Alerts
                    </a>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Assane
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                    />
                  </a>
                  {/*  <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    {/* <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                     */}
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>

              <div className="ml-auto no-view-tablette">
                <div className="avatar-group d-flex align-items-center">
                  {/* <Notifications /> */}
                  {/* <Avatar className="avatar-rs-custom"> */}
                  {/* {this.state.userName
                    .split(" ")
                    .map((n, i, a) =>
                      i === 0 || i + 1 === a.length ? n[0] : null
                    )
                    .join("")} */}
                  {/* </Avatar> */}
                  {/* <Dropdown
                  className="name-avatar-custom"
                  //   title={this.state.userName}
                  placement="bottomEnd"
                  trigger="hover"
                > */}
                  {/* <NavLink
                className="dropdown-item-header-dashboard"
                to="/compte-bakeliste"
              >
                Mon compte
              </NavLink> */}

                  {/* <Dropdown.Item onClick={this.doLogout}> */}
                  {/* <Dropdown.Item>Déconnexion</Dropdown.Item> */}
                  {/* </Dropdown> */}
                </div>
              </div>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-block d-lg-none">
                <div className="container-nav-vertical">
                  <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tabCustom"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <NavLink
                      className="nav-link nav-link-side-navbar-custom"
                      to="/admin-dashboard"
                    >
                      <i className="fas fa-fw fa-tachometer-alt icon-side-navbar-custom"></i>
                      Dashboard
                    </NavLink>
                    <NavLink
                      className="nav-link nav-link-side-navbar-custom"
                      to="/liste-all-users"
                    >
                      <i className="fas fa-fw fa-cog icon-side-navbar-custom"></i>
                      Custumers
                    </NavLink>
                    <NavLink
                      className="nav-link nav-link-side-navbar-custom"
                      to="/messages"
                    >
                      <i className="fas fa-envelope icon-side-navbar-custom"></i>
                      Messages
                    </NavLink>
                    <NavLink
                      className="nav-link nav-link-side-navbar-custom"
                      to="/orders"
                    >
                      <i className="fas fa-fw fa-folder icon-side-navbar-custom"></i>
                      Orders
                    </NavLink>
                    <NavLink
                      className="nav-link nav-link-side-navbar-custom"
                      to="/charts"
                    >
                      <i className="fas fa-fw fa-chart-area icon-side-navbar-custom"></i>
                      Charts
                    </NavLink>
                    <NavLink
                      className="nav-link nav-link-side-navbar-custom"
                      to="/admin-tasks"
                    >
                      <i className="fas fa-plus icon-side-navbar-custom"></i>
                      Tasks
                    </NavLink>
                    <NavLink
                      className="nav-link nav-link-side-navbar-custom"
                      to="/help"
                    >
                      <i className="fas fa-fw fa-table icon-side-navbar-custom"></i>
                      Help
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a> */}
      </div>
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              etes-vous sur de vouloir deconnecter ?
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <Link to="/" className="btn btn-primary">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarNav;
