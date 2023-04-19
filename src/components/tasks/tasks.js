import React, { useState } from "react";
import "./tasks.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

function Tasks() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="component-tasks">
      <div className="container-fluid">
        <div className="row mb-4 mt-4">
          <div className="col-md-6">
            <h1></h1>
            <p>Créez, consultez et gérez vos Documents</p>

            <Button variant="primary" onClick={handleShow}>
              Créer document <i className="fas fa-plus"></i>
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              size="lg"
              keyboard={false}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
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
                      <div className="m-auto">
                        <button className="btn btn-primary mb-4">
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-4">
            <div class="card shadow mb-4">
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
                    {/* <option value="1">One</option>
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
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Commentaire
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="m-auto">
                <button className="btn btn-primary mb-4">Ajouter</button>
              </div>
            </div>
          </div> */}

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <div className="box-deux">
                        <span>document 3</span>
                      </div>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <Link to="/update-to-folders">
                            <a className="dropdown-item" href="#">
                              Modifier
                            </a>
                          </Link>
                          <a className="dropdown-item" href="#">
                            Supprimer
                          </a>
                          <div className="dropdown-divider"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <FeatherIcon
                        icon="folder"
                        size="40"
                        fill="#ffca18"
                        stroke="none"
                        stroke-width=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <div className="box-deux">
                        <span>document 3</span>
                      </div>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <Link to="/update-to-folders">
                            <a className="dropdown-item" href="#">
                              Modifier
                            </a>
                          </Link>
                          <a className="dropdown-item" href="#">
                            Supprimer
                          </a>
                          <div className="dropdown-divider"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <FeatherIcon
                        icon="folder"
                        size="40"
                        fill="#ffca18"
                        stroke="none"
                        stroke-width=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <div className="py-3 d-flex flex-row align-items-center justify-content-between">
                      <div className="box-deux">
                        <span>document 3</span>
                      </div>
                      <div className="dropdown no-arrow">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <Link to="/update-to-folders">
                            <a className="dropdown-item" href="#">
                              Modifier
                            </a>
                          </Link>
                          <a className="dropdown-item" href="#">
                            Supprimer
                          </a>
                          <div className="dropdown-divider"></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <FeatherIcon
                        icon="folder"
                        size="40"
                        fill="#ffca18"
                        stroke="none"
                        stroke-width=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="card shadow mb-4">
                  <div class="card-body">Actualités</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
