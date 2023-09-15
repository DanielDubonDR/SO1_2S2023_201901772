import "../css/App.css";
import "../css/monitor.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { dataRamTime, dataCpuTime, selectOptions } from "../data/datosExample";
import Select from "react-select";
import GraficaRendimiento from "../components/graficaRendimiento";

function Rendimiento() {
  

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
          className="shadow width-select roboto-mono"
        />
      </div>
      <div className="container-fluid mt-4 px-5">
        <div className="row">
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

export default Rendimiento;
