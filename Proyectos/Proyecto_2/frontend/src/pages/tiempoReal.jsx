import "../css/App.css";
import "../css/estadistica.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import GraficaRendimiento from "../components/graficaRendimiento";
import { useState, useEffect } from "react";
import { format } from 'date-fns';

function TiempoReal() {
  const [selectOptions, setSelectOptions] = useState([]);
  const [currentVM, setCurrentVM] = useState("");
  const [dataRamTime, setDataRamTime] = useState({
    labels: ['0'],
    datasets: [
      {
        label: '% RAM',
        data: [0],
        tension: 0.3,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#f73b63',
        // borderWidth: 2,
        fill: true,
        pointRadius: 0,
        pointBorderColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: '#f73b63'
      },
    ]
  });

  const [dataCpuTime, setDataCpuTime] = useState({
    labels: ['0'],
    datasets: [
      {
        label: '% CPU',
        data: [0],
        tension: 0.4,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#0e90e8',
        // borderWidth: 2,
        fill: true,
        pointRadius: 0,
        pointBorderColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: '#0e90e8'
      },
    ]
  });

  const [lastInfo, setLastInfo] = useState({});

  

  const notify = (txt) => {
    toast.success(txt);
  };

  return (
    <>
      <Navbar />
      <Toaster className="mt-5" position="bottom-right" />
      <div className="mt-4 container-fluid text-center d-flex justify-content-center">
        <Select
          defaultValue={{ label: "Seleccione una máquina", value: 0 }}
          isSearchable={true}
          onChange={changeIP}
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
          className="shadow width-select roboto-mono"
        />
      </div>

      <div className="mt-4 container-fluid text-center d-flex justify-content-center">
        
      </div>
      
      <div className="container-fluid mt-4 px-5">
      <div className="row">
          <div className="col-12 col-md-6">
            <div className="text-center">
              <h5 className="card-title oswald text-center">Rendimiento RAM</h5>
            </div>
              <hr/>
              <p className="my-2 share-tech"><span className="bold-text">Memoria total:</span> {lastInfo.ramUsada+lastInfo.ramLibre+lastInfo.ramBuffers+lastInfo.ramCache} MB</p>
          </div>
          <div className="col-12 col-md-6">
          <div className="text-center">
              <h5 className="card-title oswald text-center">Rendimiento CPU</h5>
            </div>
              <hr/>
              <p className="my-2 share-tech"><span className="bold-text">CPU:</span> {lastInfo.nameCPU} MB</p>
              <p className="my-2 share-tech"><span className="bold-text">Cores:</span> {lastInfo.numCores}</p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12 col-md-6">
            <GraficaRendimiento data={dataRamTime} />
          </div>
          <div className="col-12 col-md-6">
            <GraficaRendimiento data={dataCpuTime} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TiempoReal;
