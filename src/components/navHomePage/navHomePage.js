import React from "react";
import "./navHomePage.css";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

function NavHomePage() {

  let user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.clear();
    toast.success('A bientot')
    navigate('/login')
  }

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
            
              {localStorage.getItem('user') ?
                <button onClick={logout} className="btn btn-connexion-home-page">
                  Deconnexion
                </button>
                :
                <span class="navbar-text">
                <Link to="/register">
                  <button className="btn">s'inscrire</button>
                </Link>
                <Link to="/login">
                  <button className="btn btn-connexion-home-page">
                    connexion
                  </button>
                </Link>
                </span>
              }
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavHomePage;
