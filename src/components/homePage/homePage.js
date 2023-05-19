import React from "react";
import "./homePage.css";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import BannerHome from "../bannerHome/bannerHome";
function HomePage() {
  return (
    <div className="component-home-page">
      <div className="container-fluid">
        {/* inclusion de la page banniere */}
        <BannerHome />
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <div className="box-deux">
                        <span>document 3</span>
                      </div>
                    </div>
                    <div>
                      <FeatherIcon
                        icon="folder"
                        size="40"
                        fill="#ffca18"
                        stroke="none"
                        strokeWidth=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <div className="box-deux">
                        <span>document 3</span>
                      </div>
                    </div>
                    <div>
                      <FeatherIcon
                        icon="folder"
                        size="40"
                        fill="#ffca18"
                        stroke="none"
                        strokeWidth=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <div className="box-deux">
                        <span>document 3</span>
                      </div>
                    </div>

                    <div>
                      <FeatherIcon
                        icon="folder"
                        size="40"
                        fill="#ffca18"
                        stroke="none"
                        strokeWidth=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card shadow mb-4">
                  <div className="card-body">Actualités</div>
                  <div className="row">
                    <div className="container">
                      <div className="box">
                        <span>Article 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3 mb-5">
                    <div className="container">
                      <div className="box-trois">
                        <span>Article 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
