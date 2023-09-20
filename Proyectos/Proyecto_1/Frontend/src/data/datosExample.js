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
      data: [0, 100], // Valores de los sectores
      backgroundColor: ["#f73b63", "#adacac"], // Colores de los sectores
      hoverBackgroundColor: ["#FF6384", "#c4c4c4"] // Colores al pasar el mouse
    },
  ]
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

export const dataCPUProcess = {
	cpu_percentaje: 20,
	num_cores: 12,
	total_ram: 16137712,
	processes:[
		{
			pid: 1,
			name: "systemd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 13568,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 301,
					name: "systemd-journal",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 30848,
					ram_porcentaje: 0
				},
				{
					pid: 374,
					name: "systemd-udevd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7808,
					ram_porcentaje: 0
				},
				{
					pid: 904,
					name: "systemd-oomd",
					user: 108,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6784,
					ram_porcentaje: 0
				},
				{
					pid: 905,
					name: "systemd-resolve",
					user: 101,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 13824,
					ram_porcentaje: 0
				},
				{
					pid: 906,
					name: "systemd-timesyn",
					user: 103,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7296,
					ram_porcentaje: 0
				},
				{
					pid: 976,
					name: "accounts-daemon",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7996,
					ram_porcentaje: 0
				},
				{
					pid: 977,
					name: "acpid",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 1792,
					ram_porcentaje: 0
				},
				{
					pid: 980,
					name: "avahi-daemon",
					user: 114,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 3840,
					ram_porcentaje: 0
				},
				{
					pid: 981,
					name: "bluetoothd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 4992,
					ram_porcentaje: 0
				},
				{
					pid: 982,
					name: "cron",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 2816,
					ram_porcentaje: 0
				},
				{
					pid: 983,
					name: "dbus-daemon",
					user: 102,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6016,
					ram_porcentaje: 0
				},
				{
					pid: 984,
					name: "NetworkManager",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 18908,
					ram_porcentaje: 0
				},
				{
					pid: 991,
					name: "input-remapper-",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 34988,
					ram_porcentaje: 0
				},
				{
					pid: 992,
					name: "irqbalance",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 3968,
					ram_porcentaje: 0
				},
				{
					pid: 993,
					name: "networkd-dispat",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 20864,
					ram_porcentaje: 0
				},
				{
					pid: 994,
					name: "polkitd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 11784,
					ram_porcentaje: 0
				},
				{
					pid: 995,
					name: "power-profiles-",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7516,
					ram_porcentaje: 0
				},
				{
					pid: 996,
					name: "rsyslogd",
					user: 104,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6016,
					ram_porcentaje: 0
				},
				{
					pid: 1012,
					name: "switcheroo-cont",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6656,
					ram_porcentaje: 0
				},
				{
					pid: 1014,
					name: "systemd-logind",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7976,
					ram_porcentaje: 0
				},
				{
					pid: 1015,
					name: "thermald",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 11008,
					ram_porcentaje: 0
				},
				{
					pid: 1016,
					name: "udisksd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 13864,
					ram_porcentaje: 0
				},
				{
					pid: 1017,
					name: "wpa_supplicant",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 10752,
					ram_porcentaje: 0
				},
				{
					pid: 1111,
					name: "ModemManager",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 11864,
					ram_porcentaje: 0
				},
				{
					pid: 1123,
					name: "unattended-upgr",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 23936,
					ram_porcentaje: 0
				},
				{
					pid: 1136,
					name: "containerd",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 43968,
					ram_porcentaje: 0
				},
				{
					pid: 1359,
					name: "upowerd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 9216,
					ram_porcentaje: 0
				},
				{
					pid: 1451,
					name: "gdm3",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 8576,
					ram_porcentaje: 0
				},
				{
					pid: 1473,
					name: "kerneloops",
					user: 113,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 2212,
					ram_porcentaje: 0
				},
				{
					pid: 1475,
					name: "kerneloops",
					user: 113,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 2064,
					ram_porcentaje: 0
				},
				{
					pid: 1539,
					name: "rtkit-daemon",
					user: 116,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 3200,
					ram_porcentaje: 0
				},
				{
					pid: 1876,
					name: "packagekitd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 47444,
					ram_porcentaje: 0
				},
				{
					pid: 2063,
					name: "colord",
					user: 123,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 13348,
					ram_porcentaje: 0
				},
				{
					pid: 2151,
					name: "systemd",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 10752,
					ram_porcentaje: 0
				},
				{
					pid: 2198,
					name: "gnome-keyring-d",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7704,
					ram_porcentaje: 0
				},
				{
					pid: 3225,
					name: "fwupd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 91172,
					ram_porcentaje: 0
				},
				{
					pid: 4097,
					name: "snapd",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 34704,
					ram_porcentaje: 0
				},
				{
					pid: 6721,
					name: "dockerd",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 78404,
					ram_porcentaje: 0
				},
				{
					pid: 17865,
					name: "cupsd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 13696,
					ram_porcentaje: 0
				},
				{
					pid: 17883,
					name: "cups-browsed",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 11648,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2,
			name: "kthreadd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 3,
					name: "rcu_gp",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 4,
					name: "rcu_par_gp",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 5,
					name: "slub_flushwq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 6,
					name: "netns",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 8,
					name: "kworker/0:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 10,
					name: "mm_percpu_wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 11,
					name: "rcu_tasks_kthre",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 12,
					name: "rcu_tasks_rude_",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 13,
					name: "rcu_tasks_trace",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 14,
					name: "ksoftirqd/0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 15,
					name: "rcu_preempt",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 16,
					name: "migration/0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 17,
					name: "idle_inject/0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 19,
					name: "cpuhp/0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 20,
					name: "cpuhp/1",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 21,
					name: "idle_inject/1",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 22,
					name: "migration/1",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 23,
					name: "ksoftirqd/1",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 24,
					name: "kworker/1:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 25,
					name: "kworker/1:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 26,
					name: "cpuhp/2",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 27,
					name: "idle_inject/2",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 28,
					name: "migration/2",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 29,
					name: "ksoftirqd/2",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 31,
					name: "kworker/2:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 32,
					name: "cpuhp/3",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 33,
					name: "idle_inject/3",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 34,
					name: "migration/3",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 35,
					name: "ksoftirqd/3",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 37,
					name: "kworker/3:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 38,
					name: "cpuhp/4",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 39,
					name: "idle_inject/4",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 40,
					name: "migration/4",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 41,
					name: "ksoftirqd/4",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 43,
					name: "kworker/4:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 44,
					name: "cpuhp/5",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 45,
					name: "idle_inject/5",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 46,
					name: "migration/5",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 47,
					name: "ksoftirqd/5",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 48,
					name: "kworker/5:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 49,
					name: "kworker/5:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 50,
					name: "cpuhp/6",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 51,
					name: "idle_inject/6",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 52,
					name: "migration/6",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 53,
					name: "ksoftirqd/6",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 55,
					name: "kworker/6:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 56,
					name: "cpuhp/7",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 57,
					name: "idle_inject/7",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 58,
					name: "migration/7",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 59,
					name: "ksoftirqd/7",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 61,
					name: "kworker/7:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 62,
					name: "cpuhp/8",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 63,
					name: "idle_inject/8",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 64,
					name: "migration/8",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 65,
					name: "ksoftirqd/8",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 67,
					name: "kworker/8:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 68,
					name: "cpuhp/9",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 69,
					name: "idle_inject/9",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 70,
					name: "migration/9",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 71,
					name: "ksoftirqd/9",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 72,
					name: "kworker/9:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 73,
					name: "kworker/9:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 74,
					name: "cpuhp/10",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 75,
					name: "idle_inject/10",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 76,
					name: "migration/10",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 77,
					name: "ksoftirqd/10",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 79,
					name: "kworker/10:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 80,
					name: "cpuhp/11",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 81,
					name: "idle_inject/11",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 82,
					name: "migration/11",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 83,
					name: "ksoftirqd/11",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 84,
					name: "kworker/11:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 85,
					name: "kworker/11:0H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 86,
					name: "kdevtmpfs",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 87,
					name: "inet_frag_wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 88,
					name: "kauditd",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 89,
					name: "khungtaskd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 90,
					name: "oom_reaper",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 91,
					name: "kworker/u24:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 92,
					name: "writeback",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 93,
					name: "kcompactd0",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 94,
					name: "ksmd",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 96,
					name: "khugepaged",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 97,
					name: "kintegrityd",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 98,
					name: "kblockd",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 99,
					name: "blkcg_punt_bio",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 100,
					name: "tpm_dev_wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 101,
					name: "ata_sff",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 102,
					name: "md",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 103,
					name: "edac-poller",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 104,
					name: "devfreq_wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 105,
					name: "watchdogd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 106,
					name: "kworker/0:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 107,
					name: "kswapd0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 108,
					name: "ecryptfs-kthrea",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 109,
					name: "kworker/1:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 110,
					name: "kthrotld",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 111,
					name: "irq/123-aerdrv",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 112,
					name: "irq/123-pcie-dp",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 113,
					name: "irq/124-aerdrv",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 114,
					name: "irq/124-pcie-dp",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 115,
					name: "irq/125-aerdrv",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 116,
					name: "irq/125-pcie-dp",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 117,
					name: "irq/126-aerdrv",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 118,
					name: "irq/126-pcie-dp",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 121,
					name: "kworker/3:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 122,
					name: "kworker/4:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 124,
					name: "kworker/6:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 127,
					name: "kworker/10:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 129,
					name: "acpi_thermal_pm",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 130,
					name: "xenbus_probe",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 131,
					name: "hwrng",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 132,
					name: "mld",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 133,
					name: "kworker/2:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 134,
					name: "ipv6_addrconf",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 141,
					name: "kstrp",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 143,
					name: "zswap-shrink",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 148,
					name: "charger_manager",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 167,
					name: "kworker/7:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 171,
					name: "kworker/8:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 172,
					name: "kworker/10:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 184,
					name: "kworker/3:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 185,
					name: "kworker/11:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 186,
					name: "kworker/1:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 187,
					name: "kworker/4:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 188,
					name: "kworker/9:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 189,
					name: "kworker/6:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 191,
					name: "kworker/5:1H",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 210,
					name: "scsi_eh_0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 211,
					name: "scsi_tmf_0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 212,
					name: "nvme-wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 213,
					name: "nvme-reset-wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 214,
					name: "nvme-delete-wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 215,
					name: "nvme-auth-wq",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 227,
					name: "irq/74-ELAN0710",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 232,
					name: "irq/18-alcor_sd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 237,
					name: "scsi_eh_1",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 238,
					name: "scsi_tmf_1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 239,
					name: "usb-storage",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 240,
					name: "uas",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 260,
					name: "jbd2/sdb2-8",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 261,
					name: "ext4-rsv-conver",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 328,
					name: "kworker/2:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 417,
					name: "kworker/6:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 427,
					name: "cryptd",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 440,
					name: "irq/143-mei_me",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 479,
					name: "cfg80211",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 602,
					name: "irq/144-rtw88_p",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 623,
					name: "card0-crtc0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 624,
					name: "card0-crtc1",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 625,
					name: "card0-crtc2",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 650,
					name: "nvkm-disp",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 795,
					name: "card1-crtc0",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 796,
					name: "card1-crtc1",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 797,
					name: "card1-crtc2",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 798,
					name: "card1-crtc3",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 1068,
					name: "kworker/10:4",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 2247,
					name: "krfcommd",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 4609,
					name: "kworker/7:3",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 8398,
					name: "kworker/0:3",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 11359,
					name: "kworker/u25:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 11889,
					name: "kworker/11:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 13753,
					name: "kworker/u24:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 14117,
					name: "kworker/0:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 15822,
					name: "kworker/2:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 16489,
					name: "kworker/u24:3",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 16623,
					name: "kworker/u24:4",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 17345,
					name: "kworker/u24:0",
					user: 0,
					state: "2 - Uninterruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 17864,
					name: "kworker/9:1",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 19119,
					name: "kworker/7:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 19393,
					name: "kworker/8:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 19394,
					name: "kworker/8:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 19395,
					name: "kworker/3:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 20798,
					name: "kworker/u25:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 21303,
					name: "kworker/u25:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 21471,
					name: "kworker/4:0",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 21472,
					name: "kworker/5:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 21631,
					name: "kworker/u24:5",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 22894,
					name: "kworker/11:2",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 24141,
					name: "kworker/u25:3",
					user: 0,
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 3,
			name: "rcu_gp",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4,
			name: "rcu_par_gp",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5,
			name: "slub_flushwq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 6,
			name: "netns",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8,
			name: "kworker/0:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10,
			name: "mm_percpu_wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11,
			name: "rcu_tasks_kthre",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 12,
			name: "rcu_tasks_rude_",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 13,
			name: "rcu_tasks_trace",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14,
			name: "ksoftirqd/0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 15,
			name: "rcu_preempt",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 16,
			name: "migration/0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 17,
			name: "idle_inject/0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19,
			name: "cpuhp/0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 20,
			name: "cpuhp/1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 21,
			name: "idle_inject/1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 22,
			name: "migration/1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 23,
			name: "ksoftirqd/1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 24,
			name: "kworker/1:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 25,
			name: "kworker/1:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 26,
			name: "cpuhp/2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 27,
			name: "idle_inject/2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 28,
			name: "migration/2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 29,
			name: "ksoftirqd/2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 31,
			name: "kworker/2:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 32,
			name: "cpuhp/3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 33,
			name: "idle_inject/3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 34,
			name: "migration/3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 35,
			name: "ksoftirqd/3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 37,
			name: "kworker/3:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 38,
			name: "cpuhp/4",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 39,
			name: "idle_inject/4",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 40,
			name: "migration/4",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 41,
			name: "ksoftirqd/4",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 43,
			name: "kworker/4:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 44,
			name: "cpuhp/5",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 45,
			name: "idle_inject/5",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 46,
			name: "migration/5",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 47,
			name: "ksoftirqd/5",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 48,
			name: "kworker/5:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 49,
			name: "kworker/5:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 50,
			name: "cpuhp/6",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 51,
			name: "idle_inject/6",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 52,
			name: "migration/6",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 53,
			name: "ksoftirqd/6",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 55,
			name: "kworker/6:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 56,
			name: "cpuhp/7",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 57,
			name: "idle_inject/7",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 58,
			name: "migration/7",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 59,
			name: "ksoftirqd/7",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 61,
			name: "kworker/7:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 62,
			name: "cpuhp/8",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 63,
			name: "idle_inject/8",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 64,
			name: "migration/8",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 65,
			name: "ksoftirqd/8",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 67,
			name: "kworker/8:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 68,
			name: "cpuhp/9",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 69,
			name: "idle_inject/9",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 70,
			name: "migration/9",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 71,
			name: "ksoftirqd/9",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 72,
			name: "kworker/9:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 73,
			name: "kworker/9:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 74,
			name: "cpuhp/10",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 75,
			name: "idle_inject/10",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 76,
			name: "migration/10",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 77,
			name: "ksoftirqd/10",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 79,
			name: "kworker/10:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 80,
			name: "cpuhp/11",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 81,
			name: "idle_inject/11",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 82,
			name: "migration/11",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 83,
			name: "ksoftirqd/11",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 84,
			name: "kworker/11:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 85,
			name: "kworker/11:0H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 86,
			name: "kdevtmpfs",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 87,
			name: "inet_frag_wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 88,
			name: "kauditd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 89,
			name: "khungtaskd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 90,
			name: "oom_reaper",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 91,
			name: "kworker/u24:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 92,
			name: "writeback",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 93,
			name: "kcompactd0",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 94,
			name: "ksmd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 96,
			name: "khugepaged",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 97,
			name: "kintegrityd",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 98,
			name: "kblockd",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 99,
			name: "blkcg_punt_bio",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 100,
			name: "tpm_dev_wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 101,
			name: "ata_sff",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 102,
			name: "md",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 103,
			name: "edac-poller",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 104,
			name: "devfreq_wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 105,
			name: "watchdogd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 106,
			name: "kworker/0:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 107,
			name: "kswapd0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 108,
			name: "ecryptfs-kthrea",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 109,
			name: "kworker/1:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 110,
			name: "kthrotld",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 111,
			name: "irq/123-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 112,
			name: "irq/123-pcie-dp",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 113,
			name: "irq/124-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 114,
			name: "irq/124-pcie-dp",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 115,
			name: "irq/125-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 116,
			name: "irq/125-pcie-dp",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 117,
			name: "irq/126-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 118,
			name: "irq/126-pcie-dp",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 121,
			name: "kworker/3:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 122,
			name: "kworker/4:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 124,
			name: "kworker/6:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 127,
			name: "kworker/10:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 129,
			name: "acpi_thermal_pm",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 130,
			name: "xenbus_probe",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 131,
			name: "hwrng",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 132,
			name: "mld",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 133,
			name: "kworker/2:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 134,
			name: "ipv6_addrconf",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 141,
			name: "kstrp",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 143,
			name: "zswap-shrink",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 148,
			name: "charger_manager",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 167,
			name: "kworker/7:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 171,
			name: "kworker/8:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 172,
			name: "kworker/10:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 184,
			name: "kworker/3:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 185,
			name: "kworker/11:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 186,
			name: "kworker/1:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 187,
			name: "kworker/4:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 188,
			name: "kworker/9:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 189,
			name: "kworker/6:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 191,
			name: "kworker/5:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 210,
			name: "scsi_eh_0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 211,
			name: "scsi_tmf_0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 212,
			name: "nvme-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 213,
			name: "nvme-reset-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 214,
			name: "nvme-delete-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 215,
			name: "nvme-auth-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 227,
			name: "irq/74-ELAN0710",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 232,
			name: "irq/18-alcor_sd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 237,
			name: "scsi_eh_1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 238,
			name: "scsi_tmf_1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 239,
			name: "usb-storage",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 240,
			name: "uas",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 260,
			name: "jbd2/sdb2-8",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 261,
			name: "ext4-rsv-conver",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 301,
			name: "systemd-journal",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 30848,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 328,
			name: "kworker/2:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 374,
			name: "systemd-udevd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 7808,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 417,
			name: "kworker/6:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 427,
			name: "cryptd",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 440,
			name: "irq/143-mei_me",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 479,
			name: "cfg80211",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 602,
			name: "irq/144-rtw88_p",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 623,
			name: "card0-crtc0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 624,
			name: "card0-crtc1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 625,
			name: "card0-crtc2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 650,
			name: "nvkm-disp",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 795,
			name: "card1-crtc0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 796,
			name: "card1-crtc1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 797,
			name: "card1-crtc2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 798,
			name: "card1-crtc3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 904,
			name: "systemd-oomd",
			user: 108,
			state: "1 - Interruptible",
			ram_memory: 6784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 905,
			name: "systemd-resolve",
			user: 101,
			state: "1 - Interruptible",
			ram_memory: 13824,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 906,
			name: "systemd-timesyn",
			user: 103,
			state: "1 - Interruptible",
			ram_memory: 7296,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 976,
			name: "accounts-daemon",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 7996,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 977,
			name: "acpid",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 1792,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 980,
			name: "avahi-daemon",
			user: 114,
			state: "1 - Interruptible",
			ram_memory: 3840,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 1023,
					name: "avahi-daemon",
					user: 114,
					state: "8193 - Desconocido",
					pid_parent: 980,
					ram_memory: 1288,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 981,
			name: "bluetoothd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 4992,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 982,
			name: "cron",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 2816,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 983,
			name: "dbus-daemon",
			user: 102,
			state: "1 - Interruptible",
			ram_memory: 6016,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 984,
			name: "NetworkManager",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 18908,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 991,
			name: "input-remapper-",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 34988,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 1104,
					name: "input-remapper-",
					user: 0,
					state: "8193 - Desconocido",
					pid_parent: 991,
					ram_memory: 21588,
					ram_porcentaje: 0
				},
				{
					pid: 2982,
					name: "input-remapper-",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 991,
					ram_memory: 25648,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 992,
			name: "irqbalance",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 3968,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 993,
			name: "networkd-dispat",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 20864,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 994,
			name: "polkitd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 995,
			name: "power-profiles-",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 7516,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 996,
			name: "rsyslogd",
			user: 104,
			state: "1 - Interruptible",
			ram_memory: 6016,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1012,
			name: "switcheroo-cont",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 6656,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1014,
			name: "systemd-logind",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 7976,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1015,
			name: "thermald",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11008,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1016,
			name: "udisksd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 13864,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1017,
			name: "wpa_supplicant",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 10752,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1023,
			name: "avahi-daemon",
			user: 114,
			state: "8193 - Desconocido",
			ram_memory: 1288,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1068,
			name: "kworker/10:4",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1104,
			name: "input-remapper-",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 21588,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1111,
			name: "ModemManager",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11864,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1123,
			name: "unattended-upgr",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 23936,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1136,
			name: "containerd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 43968,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1359,
			name: "upowerd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 9216,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1451,
			name: "gdm3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 8576,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2118,
					name: "gdm-session-wor",
					user: 0,
					state: "1 - Interruptible",
					pid_parent: 1451,
					ram_memory: 10876,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 1473,
			name: "kerneloops",
			user: 113,
			state: "1 - Interruptible",
			ram_memory: 2212,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1475,
			name: "kerneloops",
			user: 113,
			state: "1 - Interruptible",
			ram_memory: 2064,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1539,
			name: "rtkit-daemon",
			user: 116,
			state: "1 - Interruptible",
			ram_memory: 3200,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1876,
			name: "packagekitd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 47444,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2063,
			name: "colord",
			user: 123,
			state: "1 - Interruptible",
			ram_memory: 13348,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2118,
			name: "gdm-session-wor",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 10876,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2250,
					name: "gdm-wayland-ses",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2118,
					ram_memory: 6144,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2151,
			name: "systemd",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 10752,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2152,
					name: "(sd-pam)",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 2151,
					ram_memory: 7404,
					ram_porcentaje: 0
				},
				{
					pid: 2158,
					name: "pipewire",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6528,
					ram_porcentaje: 0
				},
				{
					pid: 2159,
					name: "pipewire-media-",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6400,
					ram_porcentaje: 0
				},
				{
					pid: 2160,
					name: "pulseaudio",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 29964,
					ram_porcentaje: 0
				},
				{
					pid: 2171,
					name: "dbus-daemon",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 5504,
					ram_porcentaje: 0
				},
				{
					pid: 2193,
					name: "gvfsd",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 8192,
					ram_porcentaje: 0
				},
				{
					pid: 2200,
					name: "xdg-document-po",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 7680,
					ram_porcentaje: 0
				},
				{
					pid: 2202,
					name: "gvfsd-fuse",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 2151,
					ram_memory: 6400,
					ram_porcentaje: 0
				},
				{
					pid: 2213,
					name: "xdg-permission-",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6272,
					ram_porcentaje: 0
				},
				{
					pid: 2235,
					name: "tracker-miner-f",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 26764,
					ram_porcentaje: 0
				},
				{
					pid: 2298,
					name: "gnome-session-c",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 5632,
					ram_porcentaje: 0
				},
				{
					pid: 2300,
					name: "gvfs-udisks2-vo",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 11392,
					ram_porcentaje: 0
				},
				{
					pid: 2323,
					name: "gnome-session-b",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 17920,
					ram_porcentaje: 0
				},
				{
					pid: 2326,
					name: "gvfs-gphoto2-vo",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 7040,
					ram_porcentaje: 0
				},
				{
					pid: 2333,
					name: "gvfs-goa-volume",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6528,
					ram_porcentaje: 0
				},
				{
					pid: 2339,
					name: "goa-daemon",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 40704,
					ram_porcentaje: 0
				},
				{
					pid: 2354,
					name: "gvfs-afc-volume",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 8064,
					ram_porcentaje: 0
				},
				{
					pid: 2351,
					name: "goa-identity-se",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 15488,
					ram_porcentaje: 0
				},
				{
					pid: 2370,
					name: "gvfs-mtp-volume",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6656,
					ram_porcentaje: 0
				},
				{
					pid: 2375,
					name: "gnome-shell",
					user: 1000,
					state: "0 - Running",
					pid_parent: 2151,
					ram_memory: 538360,
					ram_porcentaje: 3
				},
				{
					pid: 2469,
					name: "evolution-sourc",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 26624,
					ram_porcentaje: 0
				},
				{
					pid: 2473,
					name: "dconf-service",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6272,
					ram_porcentaje: 0
				},
				{
					pid: 2479,
					name: "evolution-calen",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 31104,
					ram_porcentaje: 0
				},
				{
					pid: 2459,
					name: "gnome-shell-cal",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 18048,
					ram_porcentaje: 0
				},
				{
					pid: 2494,
					name: "evolution-addre",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 29440,
					ram_porcentaje: 0
				},
				{
					pid: 2512,
					name: "at-spi2-registr",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 7552,
					ram_porcentaje: 0
				},
				{
					pid: 2510,
					name: "gjs",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 28216,
					ram_porcentaje: 0
				},
				{
					pid: 2528,
					name: "sh",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 1536,
					ram_porcentaje: 0
				},
				{
					pid: 2529,
					name: "gsd-a11y-settin",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 7040,
					ram_porcentaje: 0
				},
				{
					pid: 2532,
					name: "gsd-color",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 27908,
					ram_porcentaje: 0
				},
				{
					pid: 2533,
					name: "gsd-datetime",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 16384,
					ram_porcentaje: 0
				},
				{
					pid: 2536,
					name: "gsd-housekeepin",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 8448,
					ram_porcentaje: 0
				},
				{
					pid: 2538,
					name: "gsd-keyboard",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 22788,
					ram_porcentaje: 0
				},
				{
					pid: 2541,
					name: "gsd-media-keys",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 28032,
					ram_porcentaje: 0
				},
				{
					pid: 2542,
					name: "gsd-power",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 26628,
					ram_porcentaje: 0
				},
				{
					pid: 2547,
					name: "gsd-print-notif",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 11392,
					ram_porcentaje: 0
				},
				{
					pid: 2551,
					name: "gsd-rfkill",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6784,
					ram_porcentaje: 0
				},
				{
					pid: 2553,
					name: "gsd-screensaver",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6400,
					ram_porcentaje: 0
				},
				{
					pid: 2554,
					name: "gsd-sharing",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 10880,
					ram_porcentaje: 0
				},
				{
					pid: 2555,
					name: "gsd-smartcard",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 8448,
					ram_porcentaje: 0
				},
				{
					pid: 2557,
					name: "gsd-sound",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 9984,
					ram_porcentaje: 0
				},
				{
					pid: 2558,
					name: "gsd-wacom",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 23296,
					ram_porcentaje: 0
				},
				{
					pid: 2635,
					name: "ibus-portal",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 7680,
					ram_porcentaje: 0
				},
				{
					pid: 2599,
					name: "gjs",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 49172,
					ram_porcentaje: 0
				},
				{
					pid: 2712,
					name: "gsd-printer",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 15104,
					ram_porcentaje: 0
				},
				{
					pid: 2726,
					name: "snap-store",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 180748,
					ram_porcentaje: 1
				},
				{
					pid: 2752,
					name: "gjs",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 27824,
					ram_porcentaje: 0
				},
				{
					pid: 2885,
					name: "snapd-desktop-i",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 14080,
					ram_porcentaje: 0
				},
				{
					pid: 2998,
					name: "xdg-desktop-por",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 13824,
					ram_porcentaje: 0
				},
				{
					pid: 3006,
					name: "xdg-desktop-por",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 28304,
					ram_porcentaje: 0
				},
				{
					pid: 3132,
					name: "xdg-desktop-por",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 25824,
					ram_porcentaje: 0
				},
				{
					pid: 3226,
					name: "gvfsd-metadata",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 6656,
					ram_porcentaje: 0
				},
				{
					pid: 5994,
					name: "gsd-xsettings",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 81448,
					ram_porcentaje: 0
				},
				{
					pid: 6035,
					name: "ibus-x11",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 25636,
					ram_porcentaje: 0
				},
				{
					pid: 7305,
					name: "chrome_crashpad",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 3456,
					ram_porcentaje: 0
				},
				{
					pid: 7307,
					name: "chrome_crashpad",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 3328,
					ram_porcentaje: 0
				},
				{
					pid: 7682,
					name: "gnome-calendar",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 59280,
					ram_porcentaje: 0
				},
				{
					pid: 7994,
					name: "gitkraken",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 195868,
					ram_porcentaje: 1
				},
				{
					pid: 8035,
					name: "chrome_crashpad",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 3072,
					ram_porcentaje: 0
				},
				{
					pid: 9190,
					name: "chrome_crashpad",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 3328,
					ram_porcentaje: 0
				},
				{
					pid: 9174,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 178408,
					ram_porcentaje: 1
				},
				{
					pid: 17170,
					name: "cpptools-srv",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 2151,
					ram_memory: 15896,
					ram_porcentaje: 0
				},
				{
					pid: 19249,
					name: "nautilus",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 78584,
					ram_porcentaje: 0
				},
				{
					pid: 19275,
					name: "evince",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 102692,
					ram_porcentaje: 0
				},
				{
					pid: 19283,
					name: "evinced",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2151,
					ram_memory: 5632,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2152,
			name: "(sd-pam)",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 7404,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2158,
			name: "pipewire",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6528,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2159,
			name: "pipewire-media-",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6400,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2160,
			name: "pulseaudio",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 29964,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2171,
			name: "dbus-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 5504,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2193,
			name: "gvfsd",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8192,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 3141,
					name: "gvfsd-trash",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2193,
					ram_memory: 9088,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2198,
			name: "gnome-keyring-d",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7704,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2200,
			name: "xdg-document-po",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7680,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2202,
			name: "gvfsd-fuse",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 6400,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2213,
			name: "xdg-permission-",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6272,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2220,
			name: "fusermount3",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 1792,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2235,
			name: "tracker-miner-f",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 26764,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2247,
			name: "krfcommd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2250,
			name: "gdm-wayland-ses",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6144,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2253,
					name: "gnome-session-b",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2250,
					ram_memory: 16000,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2253,
			name: "gnome-session-b",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 16000,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2298,
			name: "gnome-session-c",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 5632,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2300,
			name: "gvfs-udisks2-vo",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 11392,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2323,
			name: "gnome-session-b",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 17920,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2371,
					name: "at-spi-bus-laun",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2323,
					ram_memory: 7680,
					ram_porcentaje: 0
				},
				{
					pid: 2657,
					name: "gsd-disk-utilit",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2323,
					ram_memory: 7936,
					ram_porcentaje: 0
				},
				{
					pid: 2658,
					name: "evolution-alarm",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2323,
					ram_memory: 63872,
					ram_porcentaje: 0
				},
				{
					pid: 5164,
					name: "update-notifier",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2323,
					ram_memory: 29804,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2326,
			name: "gvfs-gphoto2-vo",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7040,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2333,
			name: "gvfs-goa-volume",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6528,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2339,
			name: "goa-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 40704,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2351,
			name: "goa-identity-se",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 15488,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2354,
			name: "gvfs-afc-volume",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8064,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2370,
			name: "gvfs-mtp-volume",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6656,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2371,
			name: "at-spi-bus-laun",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7680,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2385,
					name: "dbus-daemon",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2371,
					ram_memory: 4224,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2375,
			name: "gnome-shell",
			user: 1000,
			state: "0 - Running",
			ram_memory: 538360,
			ram_porcentaje: 3,
			childs:[
				{
					pid: 3095,
					name: "gjs",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2375,
					ram_memory: 65472,
					ram_porcentaje: 0
				},
				{
					pid: 5966,
					name: "Xwayland",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2375,
					ram_memory: 156780,
					ram_porcentaje: 0
				},
				{
					pid: 7297,
					name: "chrome",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2375,
					ram_memory: 373552,
					ram_porcentaje: 2
				}
			]
		},
		{
			pid: 2385,
			name: "dbus-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 4224,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2459,
			name: "gnome-shell-cal",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 18048,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2469,
			name: "evolution-sourc",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 26624,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2473,
			name: "dconf-service",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6272,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2479,
			name: "evolution-calen",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 31104,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2494,
			name: "evolution-addre",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 29440,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2510,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28216,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2512,
			name: "at-spi2-registr",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7552,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2528,
			name: "sh",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 1536,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2531,
					name: "ibus-daemon",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2528,
					ram_memory: 12132,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2529,
			name: "gsd-a11y-settin",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7040,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2531,
			name: "ibus-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 12132,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2622,
					name: "ibus-memconf",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2531,
					ram_memory: 7424,
					ram_porcentaje: 0
				},
				{
					pid: 2623,
					name: "ibus-extension-",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2531,
					ram_memory: 28988,
					ram_porcentaje: 0
				},
				{
					pid: 2718,
					name: "ibus-engine-sim",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2531,
					ram_memory: 7552,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2532,
			name: "gsd-color",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 27908,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2533,
			name: "gsd-datetime",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 16384,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2536,
			name: "gsd-housekeepin",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8448,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2538,
			name: "gsd-keyboard",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 22788,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2541,
			name: "gsd-media-keys",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28032,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2542,
			name: "gsd-power",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 26628,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2547,
			name: "gsd-print-notif",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 11392,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2551,
			name: "gsd-rfkill",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2553,
			name: "gsd-screensaver",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6400,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2554,
			name: "gsd-sharing",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 10880,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2555,
			name: "gsd-smartcard",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8448,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2557,
			name: "gsd-sound",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 9984,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2558,
			name: "gsd-wacom",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 23296,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2599,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 49172,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2622,
			name: "ibus-memconf",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7424,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2623,
			name: "ibus-extension-",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28988,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2635,
			name: "ibus-portal",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7680,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2657,
			name: "gsd-disk-utilit",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7936,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2658,
			name: "evolution-alarm",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 63872,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2712,
			name: "gsd-printer",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 15104,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2718,
			name: "ibus-engine-sim",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7552,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2726,
			name: "snap-store",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 180748,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 2752,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 27824,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2885,
			name: "snapd-desktop-i",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 14080,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2994,
					name: "snapd-desktop-i",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 2885,
					ram_memory: 20308,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2982,
			name: "input-remapper-",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 25648,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2994,
			name: "snapd-desktop-i",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 20308,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2998,
			name: "xdg-desktop-por",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 13824,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3006,
			name: "xdg-desktop-por",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28304,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3095,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 65472,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3132,
			name: "xdg-desktop-por",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 25824,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3141,
			name: "gvfsd-trash",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 9088,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3225,
			name: "fwupd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 91172,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3226,
			name: "gvfsd-metadata",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6656,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4097,
			name: "snapd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 34704,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4609,
			name: "kworker/7:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5164,
			name: "update-notifier",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 29804,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5966,
			name: "Xwayland",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 156780,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5994,
			name: "gsd-xsettings",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 81448,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 6035,
			name: "ibus-x11",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 25636,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 6721,
			name: "dockerd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 78404,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7297,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 373552,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 7302,
					name: "cat",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7297,
					ram_memory: 1920,
					ram_porcentaje: 0
				},
				{
					pid: 7303,
					name: "cat",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7297,
					ram_memory: 1920,
					ram_porcentaje: 0
				},
				{
					pid: 7313,
					name: "chrome",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7297,
					ram_memory: 60544,
					ram_porcentaje: 0
				},
				{
					pid: 7314,
					name: "chrome",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7297,
					ram_memory: 61184,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 7302,
			name: "cat",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 1920,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7303,
			name: "cat",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 1920,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7305,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3456,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7307,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3328,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7313,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 60544,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 7366,
					name: "chrome",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7313,
					ram_memory: 209224,
					ram_porcentaje: 1
				}
			]
		},
		{
			pid: 7314,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 61184,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 7315,
					name: "nacl_helper",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7314,
					ram_memory: 4992,
					ram_porcentaje: 0
				},
				{
					pid: 7318,
					name: "chrome",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7314,
					ram_memory: 16404,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 7315,
			name: "nacl_helper",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 4992,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7318,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 16404,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 7378,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 54076,
					ram_porcentaje: 0
				},
				{
					pid: 7397,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 255796,
					ram_porcentaje: 1
				},
				{
					pid: 7414,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 92680,
					ram_porcentaje: 0
				},
				{
					pid: 7420,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 95876,
					ram_porcentaje: 0
				},
				{
					pid: 7430,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 168256,
					ram_porcentaje: 1
				},
				{
					pid: 7523,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 108496,
					ram_porcentaje: 0
				},
				{
					pid: 7820,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 112604,
					ram_porcentaje: 0
				},
				{
					pid: 7821,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 221292,
					ram_porcentaje: 1
				},
				{
					pid: 7826,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 157796,
					ram_porcentaje: 0
				},
				{
					pid: 7832,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 152460,
					ram_porcentaje: 0
				},
				{
					pid: 7938,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 157332,
					ram_porcentaje: 0
				},
				{
					pid: 7960,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 125260,
					ram_porcentaje: 0
				},
				{
					pid: 13844,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 133632,
					ram_porcentaje: 0
				},
				{
					pid: 14864,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 121000,
					ram_porcentaje: 0
				},
				{
					pid: 14881,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 134848,
					ram_porcentaje: 0
				},
				{
					pid: 16010,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 408656,
					ram_porcentaje: 2
				},
				{
					pid: 16462,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 366228,
					ram_porcentaje: 2
				},
				{
					pid: 22865,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 69248,
					ram_porcentaje: 0
				},
				{
					pid: 24103,
					name: "chrome",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7318,
					ram_memory: 102428,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 7366,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 209224,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 7367,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 113900,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7378,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 54076,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7397,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 255796,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 7414,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 92680,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7420,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 95876,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7430,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 168256,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 7523,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 108496,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7682,
			name: "gnome-calendar",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 59280,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7820,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 112604,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7821,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 221292,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 7826,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 157796,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7832,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 152460,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7938,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 157332,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7960,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 125260,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7994,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 195868,
			ram_porcentaje: 1,
			childs:[
				{
					pid: 7996,
					name: "gitkraken",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7994,
					ram_memory: 50176,
					ram_porcentaje: 0
				},
				{
					pid: 7997,
					name: "gitkraken",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7994,
					ram_memory: 49664,
					ram_porcentaje: 0
				},
				{
					pid: 8298,
					name: "node-spawn-serv",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 7994,
					ram_memory: 896,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 7996,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 50176,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 8109,
					name: "gitkraken",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 7996,
					ram_memory: 81964,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 7997,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 49664,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8035,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3072,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8047,
			name: "gitkraken",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 68472,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8087,
			name: "gitkraken",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 139304,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8109,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 81964,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8132,
			name: "gitkraken",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 324180,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 8231,
					name: "gitkraken",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 8132,
					ram_memory: 80040,
					ram_porcentaje: 0
				},
				{
					pid: 8278,
					name: "node-spawn-serv",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 8132,
					ram_memory: 888,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 8231,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 80040,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8278,
			name: "node-spawn-serv",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 888,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8298,
			name: "node-spawn-serv",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 896,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 8398,
			name: "kworker/0:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9174,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 178408,
			ram_porcentaje: 1,
			childs:[
				{
					pid: 9176,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 9174,
					ram_memory: 47232,
					ram_porcentaje: 0
				},
				{
					pid: 9177,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 9174,
					ram_memory: 47232,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 9176,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 47232,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9177,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 47232,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 13428,
					name: "code",
					user: 1000,
					state: "0 - Running",
					pid_parent: 9177,
					ram_memory: 322032,
					ram_porcentaje: 1
				},
				{
					pid: 14280,
					name: "code",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 9177,
					ram_memory: 190516,
					ram_porcentaje: 1
				}
			]
		},
		{
			pid: 9190,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3328,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9211,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 67204,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9232,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 138424,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9296,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 106556,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9589,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 91332,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 15158,
					name: "bash",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 9589,
					ram_memory: 9344,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 11359,
			name: "kworker/u25:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11889,
			name: "kworker/11:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 13428,
			name: "code",
			user: 1000,
			state: "0 - Running",
			ram_memory: 322032,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 13517,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 81916,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 13528,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 402964,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 13581,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 13528,
					ram_memory: 79488,
					ram_porcentaje: 0
				},
				{
					pid: 13679,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 13528,
					ram_memory: 85208,
					ram_porcentaje: 0
				},
				{
					pid: 17125,
					name: "cpptools",
					user: 1000,
					state: "8193 - Desconocido",
					pid_parent: 13528,
					ram_memory: 28376,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 13581,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 79488,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 13679,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 85208,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 13753,
			name: "kworker/u24:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 13844,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 133632,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14117,
			name: "kworker/0:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14280,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 190516,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 14312,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 82596,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14325,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 357592,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 14379,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 14325,
					ram_memory: 74512,
					ram_porcentaje: 0
				},
				{
					pid: 14488,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 14325,
					ram_memory: 107720,
					ram_porcentaje: 0
				},
				{
					pid: 14497,
					name: "code",
					user: 1000,
					state: "1 - Interruptible",
					pid_parent: 14325,
					ram_memory: 74040,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 14379,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 74512,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14488,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 107720,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14497,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 74040,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14864,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 121000,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 14881,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 134848,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 15158,
			name: "bash",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 9344,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 24649,
					name: "cat",
					user: 1000,
					state: "0 - Running",
					pid_parent: 15158,
					ram_memory: 2048,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 15822,
			name: "kworker/2:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 16010,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 408656,
			ram_porcentaje: 2,
			childs:[

			]
		},
		{
			pid: 16438,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 82956,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 16462,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 366228,
			ram_porcentaje: 2,
			childs:[

			]
		},
		{
			pid: 16489,
			name: "kworker/u24:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 16623,
			name: "kworker/u24:4",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 17125,
			name: "cpptools",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 28376,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 17170,
			name: "cpptools-srv",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 15896,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 17345,
			name: "kworker/u24:0",
			user: 0,
			state: "2 - Uninterruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 17864,
			name: "kworker/9:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 17865,
			name: "cupsd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 13696,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 17883,
			name: "cups-browsed",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11648,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19119,
			name: "kworker/7:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19249,
			name: "nautilus",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 78584,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19275,
			name: "evince",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 102692,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19283,
			name: "evinced",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 5632,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19393,
			name: "kworker/8:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19394,
			name: "kworker/8:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 19395,
			name: "kworker/3:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 20798,
			name: "kworker/u25:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 21303,
			name: "kworker/u25:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 21471,
			name: "kworker/4:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 21472,
			name: "kworker/5:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 21631,
			name: "kworker/u24:5",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 22865,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 69248,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 22894,
			name: "kworker/11:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 24103,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 102428,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 24141,
			name: "kworker/u25:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 24649,
			name: "cat",
			user: 1000,
			state: "0 - Running",
			ram_memory: 2048,
			ram_porcentaje: 0,
			childs:[

			]
		}
	],
	total_processes: 365

}