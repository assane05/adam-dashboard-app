import React from "react";
import "./homePageView.css";
import HomePage from "../homePage/homePage";
import NavHomePage from "../navHomePage/navHomePage";

function HomePageView() {
  return (
    <div className="component-home-page-view">
      <NavHomePage />
      <div className="container-fluid fixing-after-header-home">
        <HomePage />
      </div>
    </div>
  );
}
export default HomePageView;
