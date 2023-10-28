

export const dataAprobados = {
  labels: ["Aprobado", "Reprobados"],
  datasets: [
    {
      data: [40, 80],
      backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      hoverBackgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
	  borderColor: ["#0e90e8", '#f73b63']
    },
  ],
};

export const dataTop5 = {
	labels: ["Alumno1", "Alumno2", "Alumno3", "Alumno4", "Alumno5"],
	datasets: [
	  {
		data: [40, 80, 100, 60, 50],
		backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 159, 64, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 99, 132, 0.8)'],
		hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 99, 132, 1)']
	  },
	],
  };

  export const dataTop3 = {
	labels: ["SO1", "BD1", "SA"],
	datasets: [
	  {
		data: [40, 80, 100, 60, 50],
		backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(153, 102, 255, 0.8)'],
		hoverBackgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(153, 102, 255, 1)']
	  },
	],
  };

const porcentajesRam = [4,1,3,63,66,34,65,43,54,7,56,34,99,80]
const porcentajesCpu = [14,13,3,63,16,3,65,43,4,100,56,34,9,80]
const fechaTiempo = [
	'14/09/23 08:00', 
	'14/09/23 08:01',
	'14/09/23 08:02',
	'14/09/23 08:03',
	'14/09/23 08:04',
	'14/09/23 08:05',
	'14/09/23 08:06',
	'14/09/23 08:07',
	'14/09/23 08:08',
	'14/09/23 08:09',
	'14/09/23 08:10',
	'14/09/23 08:11',
	'14/09/23 08:12',
	'14/09/23 08:13'
]

export const dataRamTime = {
	labels: fechaTiempo,
	datasets: [
		{
			label: '% RAM',
			data: porcentajesRam,
			tension: 0.3,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: '#f73b63',
			// borderWidth: 2,
			fill: true,
			pointRadius: 5,
			pointBorderColor: 'rgba(255, 99, 132, 0.2)',
			pointBackgroundColor: '#f73b63'
		},
	]
}

export const dataCpuTime = {
	labels: fechaTiempo,
	datasets: [
		{
			label: '% CPU',
			data: porcentajesCpu,
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
}