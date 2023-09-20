import "../css/App.css";
import "../css/monitor.css";
import Navbar from "../components/navbar";
import toast, { Toaster } from "react-hot-toast";
import { dataCpuTime } from "../data/datosExample";
import Select from "react-select";
import GraficaRendimiento from "../components/graficaRendimiento";
import { useState, useEffect } from "react";
import { getDataModules, getHistory, getIPsHistory } from "../services/api";
import { format, set } from 'date-fns'

function Rendimiento() {
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

  useEffect(() => {
    const getDataHistory = async () => {
      if (currentVM !== "") {
        getDataModules(currentVM);
        getHistory(currentVM)
          .then((res) => {
            if(res.status){
              const { history } = res;

              const labels = history.map((h) => {
                const date = new Date(h.fechaHora);
                return format(date, "dd/MM/yyyy HH:mm:ss");
              });

              const data = history.map((h) => {
                return h.percentajeRAM.toFixed(2);
              });
              // hacer el efecto de que se mueva la grafica horizontalmente osea que se va barriendo hacia la izquierda
              const newLabels = labels.slice(labels.length - 25, labels.length);
              const newData = data.slice(data.length - 25, data.length);

              setDataRamTime({
                labels: newLabels,
                datasets: [
                  {
                    label: '% RAM',
                    data: newData,
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

              const dataCPU = history.map((h) => {
                return h.percentajeCPU.toFixed(2);
              });

              const newDataCPU = dataCPU.slice(dataCPU.length - 25, dataCPU.length);

              setDataCpuTime({
                labels: newLabels,
                datasets: [
                  {
                    label: '% CPU',
                    data: newDataCPU,
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

              // dejar fijado el eje y de la grafica en 100
              // setDataCpuTime({
              //   labels: newLabels,
              //   datasets: [
              //     {
              //       label: '% CPU',
              //       data: newDataCPU,
              //       tension: 0.4,
              //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
              //       borderColor: '#0e90e8',
              //       // borderWidth: 2,
              //       fill: true,
              //       pointRadius: 0,
              //       pointBorderColor: 'rgba(54, 162, 235, 0.2)',
              //       pointBackgroundColor: '#0e90e8'
              //     },
              //   ]
              // });

            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    const interval = setInterval(() => {
      getDataHistory();
    }, 1000);
    return () => clearInterval(interval);
  }, [currentVM]);

  useEffect(() => {
    const getIPsVMs = async () => {
      getIPsHistory()
        .then((res) => {
          if (res.status) {
            const { ips } = res;
            const newSelectOptions = ips.map((ip) => {
              return { label: `VM ${ip.ip}`, value: ip.ip };
            });
            setSelectOptions(newSelectOptions);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const interval = setInterval(() => {
      getIPsVMs();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const changeIP = (selectOptions) => {
    setCurrentVM(selectOptions.value);
    notify(`Se ha seleccionado la ${selectOptions.label}`);
  };

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
