import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

function GraficaRendimiento({ data }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  return (
    <>
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            <Line data={data}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficaRendimiento;
