import React from "react";
import "./updateFolders.css";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function UpdateFolders() {
  return (
    <div className="component-update-folders body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-8 pt-4">
          <div className="container-fluid">
            <div class="card shadow mb-4">
              <div className="row">
                <div className="col-lg-12">
                  <div class="mb-4">
                    <div class="g-3">
                      <div class="col mt-3">
                        <label class="form-label">Titre</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="titre du document"
                        />
                      </div>
                      <div class="g-3">
                        <div class="col mt-3">
                          <label class="form-label">Date</label>
                          <input type="date" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="g-3">
                      <div class="col mt-3">
                        <label class="form-label">Label</label>

                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>image</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="g-3">
                      <div class="col mt-3">
                        <label class="form-label">image</label>
                        <input
                          type="file"
                          class="form-control"
                          placeholder="img"
                          title="choisir une image"
                        />
                      </div>
                    </div>
                    <div className="g-3">
                      <div class="col mt-3 mb-4">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Commentaire
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="m-auto py-3">
                      <button className="btn btn-primary mb-4 m-3">
                        Update
                      </button>
                      <button className="btn btn-primary mb-4 m-3">
                        Cancel
                      </button>
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
export default UpdateFolders;
