import "../css/App.css";
import "../css/monitor.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { selectOptions, dataRam, dataCpu, dataCPUProcess } from "../data/datosExample";
import Select from "react-select";
import RAM from "../components/ram_utilization";
import CPU from "../components/cpu_utilization";
import Acordeon from "../components/acordeon";
import { useState, useEffect } from "react";

function Monitor() {

  const [search, setSearch] = useState('');
  const [dataProccess, setDataProcess] = useState(dataCPUProcess.processes);
  
  useEffect(() => {
    // filtrar dataProcess por pid y nombre
    const newDataProcess = dataCPUProcess.processes.filter((process) => {
      return process.pid.toString().includes(search) || process.name.includes(search);
    });
    setDataProcess(newDataProcess);
  }, [search]);

  const notify = (txt) => {
    toast.success(txt);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
  }

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
            <RAM data={dataRam} />
          </div>
          <div className="col-12 col-md-6">
            <CPU data={dataCpu} />
          </div>
        </div>
      </div>

      <div className="mt-5 container-fluid text-center d-flex justify-content-center roboto-mono">
        <input 
        className="form-control form-control-lg shadow width-select" 
        type="text" placeholder="Buscar" 
        value={search}
        onChange={changeSearch}/>
      </div>

      <div>
        <div className="container-fluid mt-4 px-5">
          <Acordeon data={dataProccess} totalMemory={dataCPUProcess.total_ram} />
        </div>
      </div>
    </>
  );
}

export default Monitor;
