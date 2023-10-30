import Select from "react-select";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";

function GraficaCircular({ data, getDataAprobacion, cant, porcentaje }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedSemestre, setSelectedSemestre] = useState("");

  const verifyData = () => {
    if (selectedCurso !== "" && selectedSemestre !== "") {
      getDataAprobacion(selectedSemestre, selectedCurso);
    }
  };

  useEffect(() => {
    verifyData();
  }, [selectedCurso, selectedSemestre]);

  const onChangeCurso = (e) => {
    setSelectedCurso(e.value);
  };

  const onChangeSemestre = (e) => {
    setSelectedSemestre(e.value);
  }

  const cursos = [
    { label: "Sistemas Operativos 1", value: "SO1" },
    { label: "Sistemas de Bases de Datos 1", value: "BD1" },
    { label: "Lenguajes Formales y de Programación", value: "LFP" },
    { label: "Software Avanzado", value: "SA" },
    { label: "Analisis y Diseño 1", value: "AYD1" },
  ];

  const semestre = [
    { label: "Primer Semestre", value: "1S" },
    { label: "Segundo Semestre", value: "2S" },
  ];

  return (
    <>
      <div className="card shadow">
        <div className="card-body text-center">
          <div className="row">
            <div className="text-center mb-2 share-tech fs-3">
              Porcentaje de Aprobación de un Curso{" "}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <Select
                defaultValue={{ label: "Curso", value: 0 }}
                isSearchable={true}
                onChange={onChangeCurso}
                options={cursos}
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
            <div className="col-12 col-md-6">
              <Select
                defaultValue={{ label: "Semestre", value: 0 }}
                isSearchable={true}
                onChange={onChangeSemestre}
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
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="pie-container">
                <Pie
                  data={data}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              Reprobados: {cant.reprobados} - {porcentaje.reprobados}%
            </div>
            <div className="col-12 col-md-6">
              Aprobados: {cant.aprobados} - {porcentaje.aprobados}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficaCircular;
