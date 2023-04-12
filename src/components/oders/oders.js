import React from "react";
import "./oders.css";

function Oders() {
  return (
    <div className="component-oders">
      <div class="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Liste des commandes
            </h6>
          </div>
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
                    <th>commande</th>
                    <th>Date</th>
                    <th>Etat</th>
                    <th>Facturation</th>
                    <th>total</th>
                    <th>actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>commande</th>
                    <th>Date</th>
                    <th>Etat</th>
                    <th>Facturation</th>
                    <th>total</th>
                    <th>actions</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>terminé</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>terminé</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>terminé</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>en entente</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>terminé</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>terminé</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>terminé</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                  <tr>
                    <td>#12 Adam</td>
                    <td>2023/04/10</td>
                    <td>en entente</td>
                    <td>Adresse de facturation.</td>
                    <td>Total de la commande.</td>
                    <td>Actions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Oders;
