import React from "react";
import "./articlesView.css";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";
import Articles from "../articles/articles";

function ArticlesView() {
  return (
    <div className="component-articles-view body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-5">
          <Articles />
        </div>
      </div>
    </div>
  );
}
export default ArticlesView;
