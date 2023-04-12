import React from "react";
import "./charts.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

function Charts() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Avril",
    "Mai",
    "Juin",
    "Jul",
    "Aut",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Données",
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#cccccc",
          "#FE452A",
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45, 100],
      },
    ],
  };
  return (
    <div className="component-charts">
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Statistiques</h1>
        <p className="mb-4">representation des données en mode graphique</p>

        {/* <!-- Content Row --> */}
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            {/* <!-- Area Chart --> */}
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Barre</h6>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <Bar data={data} />
                </div>
                <hr />
              </div>
            </div>
            {/* <!-- Bar Chart --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Reprsentation en Barres
                </h6>
              </div>
              <div className="card-body">
                <div className="chart-bar">
                  <Line data={data} />
                </div>
                <hr />
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              {/*  Card Header - Dropdown  */}
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  circulaire
                </h6>
              </div>
              {/* Card Body */}
              <div className="card-body">
                <div className="chart-pie pt-4">
                  <Pie data={data} />
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
  );
}
export default Charts;
