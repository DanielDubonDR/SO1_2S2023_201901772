import "../css/App.css";
import "../css/estadistica.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import BarraHorizontal from "../components/graficaBarraHorizontal";
import { useEffect, useState } from "react";

import io from "socket.io-client";

const socket = io(import.meta.env.VITE_URL);

function TiempoReal() {
  const [cantRegistros, setCantRegistros] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataCursos, setDataCursos] = useState({
    labels: ["SO1", "BD1", "LFP", "SA", "AYD1"],
    datasets: [
      {
      data: [0, 0, 0, 0, 0],
      backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)']
      },
    ],
    });

  const semestre = [
    { label: "Primer Semestre", value: "1S" },
    { label: "Segundo Semestre", value: "2S" },
  ];

  useEffect(() => {
    socket.on("redis", (data) => {
      // console.log(data);
      setCantRegistros(data.length);
      
      const labels = ["SO1", "BD1", "LFP", "SA", "AYD1"];

    });
  }, []);

  useEffect(() => {
    socket.on("redis", (data) => {

      const so = data.filter((item) => {
        return item.curso === "SO1" && item.semestre === selectedOption;
      });

      const bd = data.filter((item) => {
        return item.curso === "BD1" && item.semestre === selectedOption;
      });

      const lfp = data.filter((item) => {
        return item.curso === "LFP" && item.semestre === selectedOption;
      });

      const sa = data.filter((item) => {
        return item.curso === "SA" && item.semestre === selectedOption;
      });

      const ayd = data.filter((item) => {
        return item.curso === "AYD1" && item.semestre === selectedOption;
      });

      const labels = ["SO1", "BD1", "LFP", "SA", "AYD1"];
      const dataa = [so.length, bd.length, lfp.length, sa.length, ayd.length];

      setDataCursos({
        labels,
        datasets: [
          {
          data:dataa,
          backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 99, 132, 0.8)'],
          hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)']
          },
        ],
        });

    });
  }, [selectedOption]);

  const notify = (txt) => {
    toast.success(txt);
  };

  const changeSemestre = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <>
      <Navbar />
      <Toaster className="mt-5" position="bottom-right" />

      <div className="mt-4 container-fluid text-center d-flex justify-content-end fs-2 share-tech">
        <div className="mx-3">Cantidad de Datos: {cantRegistros}</div>
      </div>

      <div className="container-fluid mt-4 px-5">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="text-center">
              <h5 className="card-title oswald text-center fs-3">
                Curso vs Cantidad de Alumnos
              </h5>
            </div>
            <div className="mt-4 container-fluid text-center d-flex justify-content-center">
              <Select
                defaultValue={{ label: "Seleccione un semestre", value: 0 }}
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
                className="shadow size-select roboto-mono"
              />
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12 col-md-12">
            <BarraHorizontal data={dataCursos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TiempoReal;
