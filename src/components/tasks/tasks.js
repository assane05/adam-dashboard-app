import React, { useState } from "react";
import "./tasks.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Tasks() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="component-tasks">
      <div className="container-fluid">
        <div className="row mb-4 mt-4">
          <div className="col-md-6">
            <h1>Produits</h1>
            <p>Créez, consultez et gérez vos produits</p>
          </div>
          {/* modal  */}
          <div className="col-md-6">
            <Button variant="primary" onClick={handleShow}>
              Créer un produit
              <i className="fas fa-plus m-2"></i>
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Créer un nouveau produit
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="row  mt-4">
                  <div class="col-md-6">
                    {/* <label class="form-label">Nom du Produit</label> */}

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nom du Produit"
                    />
                  </div>
                  <div class="col-md-6">
                    {/* <label class="form-label">Categorie</label> */}

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Categorie"
                    />
                  </div>
                </div>
                <div class="row g-3 mt-4">
                  <div class="col-md-6">
                    {/* <label class="form-label">Quantité en stock</label> */}

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Quantité en stock"
                    />
                  </div>
                  <div class="col-md-6">
                    {/* <label class="form-label">Description de l'article</label> */}

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Description de l'article "
                    />
                  </div>
                </div>
                <div class="row g-3 mt-4">
                  <div class="col-md-6">
                    {/* <label class="form-label">Prix d'achat</label> */}

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Prix d'achat "
                    />
                  </div>
                  <div class="col-md-6">
                    {/* <label class="form-label">Prix de vente</label> */}

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Prix de vente"
                    />
                  </div>
                </div>
                <div class="row g-3 mt-4 ">
                  <div class="col-md-6">
                    {/* <label class="form-label">image du Produit</label> */}
                    <input
                      type="file"
                      class="form-control"
                      placeholder="img"
                      title="choisir une image"
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button> */}
                <Button variant="primary" onClick={handleClose}>
                  Ajouter
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

        <div className="card shadow mb-4">
          {/* <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Liste des produits</h6>
          </div> */}
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Nom produit</th>
                    <th>Categorie</th>
                    <th>Prix d'achat</th>
                    <th>Prix de vente</th>
                    <th>Quantité</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Nom produit</th>
                    <th>Categorie</th>
                    <th>Prix d'achat</th>
                    <th>Prix de vente</th>
                    <th>Quantité</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>Banane</td>
                    <td>Fruit</td>
                    <td>500 XOF</td>
                    <td>575 XOF</td>
                    <td>5 kg</td>
                    <td>Actions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* AJOUTER PRODUIT X */}
      </div>
    </div>
  );
}
export default Tasks;
