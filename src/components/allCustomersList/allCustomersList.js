import React from "react";
import "./allCustomersList.css";

function AllCustomersList() {
  return (
    <div className="component-all-customers-list">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Liste de tous les clients
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
                  <th>id</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>crée</th>
                  <th>mise à jour</th>
                  <th>statuts</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Order</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>crée</th>
                  <th>mise à jour</th>
                  <th>statuts</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Assane</td>
                  <td>Adam</td>
                  <td>2023/04/10</td>
                  <td>2023/04/10</td>
                  <td>client</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllCustomersList;
