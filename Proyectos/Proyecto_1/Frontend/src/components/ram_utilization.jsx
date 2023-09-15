import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function RAM({ data }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <>
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">
                  <Doughnut data={data} options={{ responsive: true, plugins: {legend: {display: false}} }} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title oswald">Utilización de la RAM</h5>
                  <hr/>
                  <p className="my-0 share-tech"><span className="bold-text">Porcentaje de utilización:</span> 33%</p>
                  <p className="my-2 share-tech"><span className="bold-text">Memoria total:</span> 432422343 MB</p>
                  <p className="my-1 share-tech"><span className="bold-text">Memoria en uso:</span> 432422343 MB</p>
                  <p className="my-0 share-tech"><span className="bold-text">Memoria disponible:</span> 432422343 MB </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RAM;
