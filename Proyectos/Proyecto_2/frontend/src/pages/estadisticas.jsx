import "../css/App.css";
import "../css/estadistica.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import GraficaCircular from "../components/graficaCircular";
import GraficaBarras from "../components/graficaBarras";
import Registros from "../components/registros";
import { getAprobacion, getRegistros } from "../services/api";

function Estadisticas() {
  const [dataRegistros, setDataRegistros] = useState([]);
  const [cantAprobados, setCantAprobados] = useState({aprobados:0, reprobados:0});
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

    useEffect(() => {
      const fetchRegistros = async () => {
        try {
          const data = await getRegistros();
          setDataRegistros(data);
        } catch (error) {
          console.error('Error al obtener registros:', error);
          toast.error('Error al obtener registros');
        }
      };
  
      fetchRegistros();
    }, []); 

    const getDataAprobacion = async(semestre, curso) => {

      try{

        const dataa = await getAprobacion(semestre, curso);
        console.log(dataa);

        const porcentajeAprobados = Math.round((Number(dataa[0].aprobados)/dataa[0].total)*10000)/100;
        const porcentajeReprobados = 100 - porcentajeAprobados;

        const data = [porcentajeAprobados, porcentajeReprobados];

        const newData = {
          labels: ["Aprobado", "Reprobados"],
          datasets: [
            {
              data,
              backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
              hoverBackgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderColor: ["#0e90e8", '#f73b63']
            },
          ],
        }

        setDataAprobados(newData);
        setCantAprobados({aprobados: dataa[0].aprobados, reprobados: dataa[0].reprobados});

      } catch (error) {
        console.error('Error al obtener registros:', error);
        toast.error('Error al obtener registros');
      }

    };

  const notify = (txt) => {
    toast.success(txt);
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
          <Registros data={dataRegistros} />
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <GraficaCircular data={dataAprobados} getDataAprobacion={getDataAprobacion} cant={cantAprobados}/>
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
