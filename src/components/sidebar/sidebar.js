import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

function Sidebar() {
  return (
    <div className="component-sidebar">
      <div className="container-nav-vertical d-lg-block d-none">
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tabCustom"
          role="tablist"
          aria-orientation="vertical"
        >
          <NavLink
            className="nav-link nav-link-side-navbar-custom my-2"
            to="/admin-dashboard"
          >
            <i className="fas fa-fw fa-tachometer-alt icon-side-navbar-custom"></i>
            Dashboard
          </NavLink>

          <NavLink
            className="nav-link nav-link-side-navbar-custom my-2"
            to="/liste-all-users"
          >
            <i className="fas fa-fw fa-cog icon-side-navbar-custom"></i>
            Custumers
          </NavLink>

          <NavLink
            className="nav-link nav-link-side-navbar-custom my-2"
            to="/messages"
          >
            <i className="fas fa-envelope icon-side-navbar-custom"></i>
            Messages
          </NavLink>
          <NavLink
            className="nav-link nav-link-side-navbar-custom my-2"
            to="/orders"
          >
            <i className="fas fa-fw fa-folder icon-side-navbar-custom"></i>
            Orders
          </NavLink>
          <NavLink
            className="nav-link nav-link-side-navbar-custom my-2"
            to="/charts"
          >
            <i className="fas fa-fw fa-chart-area icon-side-navbar-custom"></i>
            Charts
          </NavLink>
          <NavLink
            className="nav-link nav-link-side-navbar-custom my-2"
            to="/admin-tasks"
          >
            <i className="fas fa-plus icon-side-navbar-custom"></i>
            Tasks
          </NavLink>
          <NavLink
            className="nav-link nav-link-side-navbar-custom my-2"
            to="/help"
          >
            <i className="fas fa-fw fa-table icon-side-navbar-custom"></i>
            Help
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
