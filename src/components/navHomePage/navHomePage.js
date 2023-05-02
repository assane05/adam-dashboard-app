import React from "react";
import "./navHomePage.css";
import { Link } from "react-router-dom";

function NavHomePage() {
  return (
    <div className="component-nav-home-page">
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top topbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <Link class="nav-item" to="/">
                <a class="nav-link" href="#">
                  Documents
                </a>
              </Link>
              <Link class="nav-item" to="/liste-des-articles">
                <a class="nav-link">Actualités</a>
              </Link>
            </ul>
            <span class="navbar-text">
              <Link to="/register">
                <button className="btn">s'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="btn">connexion</button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavHomePage;
