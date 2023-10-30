import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function BarraHorizontal({ data }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <>
      <div className="row high-horizontal-bars d-flex justify-content-center">
        <Bar
          data={data}
          options={{
            responsive: true,
            indexAxis: "y",
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
    </>
  );
}

export default BarraHorizontal;
