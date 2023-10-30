import Select from "react-select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function GraficaBarras({ data, title, changeSelect }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const semestre = [
    { label: "Primer Semestre", value: "1S" },
    { label: "Segundo Semestre", value: "2S" },
  ];

  const changeSemestre = (e) => {
    changeSelect(e.value);
  }

  return (
    <>
      <div className="card shadow">
        <div className="card-body text-center">
          <div className="row">
            <div className="text-center mb-2 share-tech fs-3">{title} </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-12">
              <Select
                defaultValue={{ label: "Semestre", value: 0 }}
                isSearchable={true}
                onChange={changeSemestre}
                options={semestre}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 5,
                  colors: {
                    ...theme.colors,
                    primary25: "#c4c4c4",
                    primary: "#000",
                  },
                })}
                className="roboto-mono"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="bar-container">
                <Bar
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficaBarras;
