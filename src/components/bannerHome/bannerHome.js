import React from "react";
import "./bannerHome.css";
import doc from "../../img/dossier.png";
function BannerHome() {
  return (
    <div className="component-banner-home bg-container-banner">
      <div className="container-fluid pt-5 mb-5 ">
        <div className="row">
          <div className="col-md-6">
            <div className="bloc-desc-download">
              <img src={doc} className="taille-img-doc" />
              <div className="">
                <h1 className="title-download-doc">
                  Telechargez les documents de votre choix
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div class="card text-center mb-3  card-download-doc-home">
                <div class="card-body">
                  <button class="btn btn-download-doc">
                    Téléchargez un document
                  </button>
                  <p className="un-fichier">ou un fichier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerHome;
