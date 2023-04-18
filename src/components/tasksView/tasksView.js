import React from "react";
import "./tasksView.css";
import Tasks from "../tasks/tasks";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function TasksView() {
  return (
    <div className="component-tasks-view body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-4">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
export default TasksView;
