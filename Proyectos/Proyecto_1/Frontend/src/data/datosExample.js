export const selectOptions = [
  { value: "192.168.0.1", label: "Maquina 1" },
  { value: "192.168.0.2", label: "Maquina 2" },
  { value: "192.168.0.3", label: "Maquina 3" },
  { value: "192.168.0.4", label: "Maquina 4" },
  { value: "192.168.0.5", label: "Maquina 5" },
];

export const dataRam = {
  labels: ["Utilizado", "No Utilizado"],
  datasets: [
    {
      data: [40, 60], // Valores de los sectores
      backgroundColor: ["#f73b63", "#adacac"], // Colores de los sectores
      hoverBackgroundColor: ["#FF6384", "#c4c4c4"] // Colores al pasar el mouse
    },
  ],
};

export const dataCpu = {
  labels: ["Utilizado", "No Utilizado"],
  datasets: [
    {
      data: [60, 50], // Valores de los sectores
      backgroundColor: ["#0e90e8", "#adacac"], // Colores de los sectores
      hoverBackgroundColor: ["#36A2EB", "#c4c4c4"] // Colores al pasar el mouse
    },
  ],
};
