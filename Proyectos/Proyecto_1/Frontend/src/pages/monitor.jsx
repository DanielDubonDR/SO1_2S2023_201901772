import "../css/App.css";
import "../css/monitor.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { selectOptions, dataRam } from "../data/datosExample";
import Select from "react-select";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { dataCpu } from "../data/datosExample";

function Monitor() {
  console.log(dataRam);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const notify = (txt) => {
    toast.success(txt);
  };

  return (
    <>
      <Navbar />
      <Toaster className="mt-5" position="bottom-right" />
      <div className="mt-4 container-fluid text-center d-flex justify-content-center">
        <Select
          defaultValue={{ label: "Seleccione una maquina", value: 0 }}
          isSearchable={true}
          // onChange={changeDot}
          options={selectOptions}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: "#c4c4c4",
              primary: "#000",
            },
          })}
          className="shadow width-select"
        />
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <Doughnut data={dataCpu} options={{responsive:true}}/>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">CPU</h5>
                        <p className="card-text">CPU</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">CPU</h5>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">CPU</h5>
                        <p className="card-text">CPdU</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="card shadow">
                      <div className="card-body">
                        <h5 className="card-title">CPU</h5>
                        <p className="card-text">CPU</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Monitor;
