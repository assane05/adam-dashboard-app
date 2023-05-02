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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Documents
                </a>
              </li>
              <Link to="/liste-des-articles">
                <li class="nav-item">
                  <a class="nav-link">Actualités</a>
                </li>
              </Link>
            </ul>
            <span class="navbar-text">
              <button className="btn">s'inscrire</button>
              <button className="btn">connexion</button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavHomePage;
