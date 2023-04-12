import React from "react";
import "./tasksView.css";
import NavBar from "../navBar/navBar";
import NavAndSidebar from "../navAndSidebar/navAndSidebar";
import Tasks from "../tasks/tasks";

function TasksView() {
  return (
    <div className="component-tasks-view">
      <NavBar />
      <div className="row">
        <div className="col-lg-2">
          <NavAndSidebar />
        </div>
        <div className="col-lg-10">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
export default TasksView;
