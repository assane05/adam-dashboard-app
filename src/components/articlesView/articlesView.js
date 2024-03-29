import React from "react";
import "./articlesView.css";

import Articles from "../articles/articles";
import NavHomePage from "../navHomePage/navHomePage";

function ArticlesView() {
  return (
    <div className="component-articles-view">
      <NavHomePage />
      <div className="container-fluid fixing-after-header-home">
        <Articles />
      </div>
    </div>
  );
}
export default ArticlesView;
