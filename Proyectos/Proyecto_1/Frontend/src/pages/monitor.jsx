import "../css/App.css";
import "../css/monitor.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import RAM from "../components/ram_utilization";
import CPU from "../components/cpu_utilization";
import Acordeon from "../components/acordeon";
import { useState, useEffect } from "react";
import { getVMs, getDataModules } from "../services/api.js";

function Monitor() {
  const [search, setSearch] = useState("");
  const [dataProccess, setDataProcess] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [currentVM, setCurrentVM] = useState("");
  const [infoRam, setInfoRam] = useState({ porcentaje:0, total:0, uso:0, disponible:0 });
  const [infoCpu, setInfoCpu] = useState({ porcentaje:0, cpus:0, procesos:0, ram:0, nombre: '' });
  const [dataRam, setDataRam] = useState({
    labels: ["Utilizado", "No Utilizado"],
    datasets: [
      {
        data: [0, 100],
        backgroundColor: ["#f73b63", "#adacac"],
        hoverBackgroundColor: ["#FF6384", "#c4c4c4"]
      },
    ]
  });

  const [dataCpu, setDataCpu] = useState({
    labels: ["Utilizado", "No Utilizado"],
    datasets: [
      {
        data: [0, 100],
        backgroundColor: ["#0e90e8", "#adacac"],
        hoverBackgroundColor: ["#36A2EB", "#c4c4c4"]
      },
    ]
  });

  useEffect(() => {
    const getVMsData = async () => {
      getVMs()
        .then((res) => {
          const { ipAddresses } = res;
          const newSelectOptions = ipAddresses.map((ip) => {
            return { label: `VM ${ip}`, value: ip };
          });
          setSelectOptions(newSelectOptions);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const interval = setInterval(() => {
      getVMsData();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getDataModulesInterval = async () => {
      if (currentVM !== "") {
        getDataModules(currentVM)
          .then((res) => {
            const { RAM, CPU } = res.data;
            
            // Filtrar originalDataProcess en lugar de dataProcess
            const newDataProcess = CPU.processes.filter((process) => {
              return (
                process.pid.toString().includes(search) ||
                process.name.toLowerCase().includes(search.toLowerCase())
              );
            });
            setDataProcess(newDataProcess);

            setDataRam({
              labels: ["Utilizado", "No Utilizado"],
              datasets: [
                {
                  data: [RAM.ramPorcentaje, 100 - RAM.ramPorcentaje],
                  backgroundColor: ["#f73b63", "#adacac"],
                  hoverBackgroundColor: ["#FF6384", "#c4c4c4"],
                },
              ]
            });

            setDataCpu({
              labels: ["Utilizado", "No Utilizado"],
              datasets: [
                {
                  data: [CPU.cpu_percentaje, 100 - CPU.cpu_percentaje],
                  backgroundColor: ["#0e90e8", "#adacac"],
                  hoverBackgroundColor: ["#36A2EB", "#c4c4c4"],
                },
              ]
            });

            setInfoRam({
              porcentaje: RAM.ramPorcentaje,
              total: RAM.ramTotal,
              uso: RAM.ramUsada,
              disponible: RAM.ramDisponible
            });

            setInfoCpu({
              porcentaje: CPU.cpu_percentaje,
              cpus: CPU.num_cores,
              procesos: CPU.total_processes,
              ram: CPU.total_ram,
              nombre: CPU.name_cpu
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    const interval = setInterval(() => {
      getDataModulesInterval();
    }, 1000);
    return () => clearInterval(interval);
  }, [currentVM, search]);

  const notify = (txt) => {
    toast.success(txt);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value);
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
      <div className="container-fluid mt-4 px-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <RAM data={dataRam} infoRam={infoRam} />
          </div>
          <div className="col-12 col-md-6">
            <CPU data={dataCpu} cpuInfo={infoCpu} />
          </div>
        </div>
      </div>

      <div className="mt-5 container-fluid text-center d-flex justify-content-center roboto-mono">
        <input
          className="form-control form-control-lg shadow width-select"
          type="text"
          placeholder="Buscar"
          value={search}
          onChange={changeSearch}
        />
      </div>

      <div>
        <div className="container-fluid mt-4 px-5">
          <Acordeon data={dataProccess} totalMemory={infoCpu.ram} currentVM={currentVM}/>
        </div>
      </div>
    </>
  );
}

export default Monitor;
