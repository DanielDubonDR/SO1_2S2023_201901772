import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function CPU({ data, cpuInfo }) {
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
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title oswald">Utilización del CPU</h5>
                  <hr/>
                  <p className="my-3 share-tech"><span className="bold-text">Porcentaje de utilización:</span> {cpuInfo.porcentaje}%</p>
                  <p className="my-3 share-tech"><span className="bold-text">No de nucleos:</span> {cpuInfo.cpus}</p>
                  <p className="my-2 share-tech"><span className="bold-text">Procesos:</span> {cpuInfo.procesos}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CPU;
