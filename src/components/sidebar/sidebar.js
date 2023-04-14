import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="component-sidebar">
      <div class="sidebar">
        <ul class="list-unstyled">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
