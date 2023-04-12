import React from "react";
import "./messages.css";

function Messages() {
  return (
    <div className="component-messages">
      <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 class="h3 mb-1 text-gray-800">
          liste de tous les clients inscrits
        </h1>
        <p class="mb-4"></p>

        {/* <!-- Content Row --> */}
        <div class="row">
          {/* <!-- Border Left Utilities --> */}
          <div class="col-lg-12">
            <div class="card mb-4 py-3 border-bottom-info">
              <div class="card-body">un nouveau client s'est inscrit </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!-- Border Bottom Utilities --> */}
          <div class="col-lg-12">
            <div class="card mb-4 py-3 border-bottom-warning">
              <div class="card-body">un nouveau client s'est inscrit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
