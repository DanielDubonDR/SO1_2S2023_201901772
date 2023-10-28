import "../css/App.css";
import "../css/estadistica.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import GraficaCircular from "../components/graficaCircular";
import GraficaBarras from "../components/graficaBarras";
import Registros from "../components/registros";

function Estadisticas() {
  const [dataProccess, setDataProcess] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [currentVM, setCurrentVM] = useState("");

  const [dataAprobados, setDataAprobados] = useState({
    labels: ["Aprobado", "Reprobados"],
    datasets: [
      {
        data: [0, 100],
        backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        hoverBackgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
      borderColor: ["#0e90e8", '#f73b63']
      },
    ],
  });

  const [dataTop5, setDataTop5] = useState({
    labels: ["Alumno1", "Alumno2", "Alumno3", "Alumno4", "Alumno5"],
    datasets: [
      {
      data: [0, 0, 0, 0, 0],
      backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)']
      },
    ],
    });

  const [dataTop3, setDataTop3] = useState({
    labels: ["Curso1", "Curso2", "Curso3"],
    datasets: [
      {
      data: [0, 0, 0],
      backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(153, 102, 255, 0.8)'],
      hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(153, 102, 255, 1)']
      },
    ],
    });





  const notify = (txt) => {
    toast.success(txt);
  };


  const changeIP = (selectOptions) => {
    setCurrentVM(selectOptions.value);
    notify(`Se ha seleccionado la ${selectOptions.label}`);
  };
  return (
    <>
      <Navbar />
      <Toaster className="mt-5" position="bottom-right" />
      <div className="mt-4 container-fluid text-center d-flex justify-content-center">
      <button type="button" class="btn btn-primary oswald fs-5">Actualizar Datos</button>
      </div>
      <div className="container-fluid mt-4 px-5">
        <div className="row">
          <Registros data={dataProccess} />
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <GraficaCircular data={dataAprobados}/>
          </div>
          <div className="col-12 col-md-4">
            <GraficaBarras data={dataTop5} title='Alumnos con mejor promedio' />
          </div>
          <div className="col-12 col-md-4">
          <GraficaBarras data={dataTop3} title='Cursos con mayor número de alumnos' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Estadisticas;
