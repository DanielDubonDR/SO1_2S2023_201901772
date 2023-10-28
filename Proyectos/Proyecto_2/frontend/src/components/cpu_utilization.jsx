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
          </div>
        </div>
      </div>
    </>
  );
}

export default CPU;
