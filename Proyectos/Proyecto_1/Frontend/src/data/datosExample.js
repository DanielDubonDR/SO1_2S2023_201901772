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
			pointRadius: 5,
			pointBorderColor: 'rgba(54, 162, 235, 0.2)',
			pointBackgroundColor: '#0e90e8'
		},
	]
}

export const dataCPUProcess = {
	cpu_percentaje: 20,
	total_ram: 16137708,
	processes:[
		{
			pid: 1,
			name: "systemd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11828,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 307,
					name: "systemd-journal",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 19292,
					ram_porcentaje: 0
				},
				{
					pid: 376,
					name: "systemd-udevd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7936,
					ram_porcentaje: 0
				},
				{
					pid: 905,
					name: "systemd-oomd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6784,
					ram_porcentaje: 0
				},
				{
					pid: 906,
					name: "systemd-resolve",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 14924,
					ram_porcentaje: 0
				},
				{
					pid: 907,
					name: "systemd-timesyn",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7168,
					ram_porcentaje: 0
				},
				{
					pid: 983,
					name: "accounts-daemon",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7836,
					ram_porcentaje: 0
				},
				{
					pid: 984,
					name: "acpid",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 1792,
					ram_porcentaje: 0
				},
				{
					pid: 987,
					name: "avahi-daemon",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 3840,
					ram_porcentaje: 0
				},
				{
					pid: 988,
					name: "bluetoothd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 4608,
					ram_porcentaje: 0
				},
				{
					pid: 989,
					name: "cron",
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 2688,
					ram_porcentaje: 0
				},
				{
					pid: 990,
					name: "dbus-daemon",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6272,
					ram_porcentaje: 0
				},
				{
					pid: 991,
					name: "NetworkManager",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 18892,
					ram_porcentaje: 0
				},
				{
					pid: 997,
					name: "input-remapper-",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 34868,
					ram_porcentaje: 0
				},
				{
					pid: 999,
					name: "irqbalance",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 3840,
					ram_porcentaje: 0
				},
				{
					pid: 1000,
					name: "networkd-dispat",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 20464,
					ram_porcentaje: 0
				},
				{
					pid: 1001,
					name: "polkitd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 11072,
					ram_porcentaje: 0
				},
				{
					pid: 1002,
					name: "power-profiles-",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7724,
					ram_porcentaje: 0
				},
				{
					pid: 1003,
					name: "rsyslogd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6100,
					ram_porcentaje: 0
				},
				{
					pid: 1006,
					name: "snapd",
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 33484,
					ram_porcentaje: 0
				},
				{
					pid: 1007,
					name: "switcheroo-cont",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 6528,
					ram_porcentaje: 0
				},
				{
					pid: 1008,
					name: "systemd-logind",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 8016,
					ram_porcentaje: 0
				},
				{
					pid: 1009,
					name: "thermald",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 10880,
					ram_porcentaje: 0
				},
				{
					pid: 1010,
					name: "udisksd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 13756,
					ram_porcentaje: 0
				},
				{
					pid: 1011,
					name: "wpa_supplicant",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 10880,
					ram_porcentaje: 0
				},
				{
					pid: 1098,
					name: "ModemManager",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 11984,
					ram_porcentaje: 0
				},
				{
					pid: 1102,
					name: "cupsd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 13440,
					ram_porcentaje: 0
				},
				{
					pid: 1106,
					name: "unattended-upgr",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 23552,
					ram_porcentaje: 0
				},
				{
					pid: 1113,
					name: "containerd",
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 44068,
					ram_porcentaje: 0
				},
				{
					pid: 1423,
					name: "upowerd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 9088,
					ram_porcentaje: 0
				},
				{
					pid: 1469,
					name: "cups-browsed",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 11520,
					ram_porcentaje: 0
				},
				{
					pid: 1470,
					name: "dockerd",
					state: "8193 - Desconocido",
					pid_parent: 1,
					ram_memory: 77764,
					ram_porcentaje: 0
				},
				{
					pid: 1474,
					name: "kerneloops",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 2188,
					ram_porcentaje: 0
				},
				{
					pid: 1476,
					name: "kerneloops",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 2080,
					ram_porcentaje: 0
				},
				{
					pid: 1518,
					name: "gdm3",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 8960,
					ram_porcentaje: 0
				},
				{
					pid: 1578,
					name: "rtkit-daemon",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 3072,
					ram_porcentaje: 0
				},
				{
					pid: 1890,
					name: "packagekitd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 41656,
					ram_porcentaje: 0
				},
				{
					pid: 2104,
					name: "colord",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 13396,
					ram_porcentaje: 0
				},
				{
					pid: 2140,
					name: "systemd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 10752,
					ram_porcentaje: 0
				},
				{
					pid: 2170,
					name: "gnome-keyring-d",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 7596,
					ram_porcentaje: 0
				},
				{
					pid: 3174,
					name: "fwupd",
					state: "1 - Interruptible",
					pid_parent: 1,
					ram_memory: 33336,
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
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 4,
					name: "rcu_par_gp",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 5,
					name: "slub_flushwq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 6,
					name: "netns",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 7,
					name: "kworker/0:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 8,
					name: "kworker/0:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 10,
					name: "mm_percpu_wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 11,
					name: "rcu_tasks_kthre",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 12,
					name: "rcu_tasks_rude_",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 13,
					name: "rcu_tasks_trace",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 14,
					name: "ksoftirqd/0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 15,
					name: "rcu_preempt",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 16,
					name: "migration/0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 17,
					name: "idle_inject/0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 19,
					name: "cpuhp/0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 20,
					name: "cpuhp/1",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 21,
					name: "idle_inject/1",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 22,
					name: "migration/1",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 23,
					name: "ksoftirqd/1",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 24,
					name: "kworker/1:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 25,
					name: "kworker/1:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 26,
					name: "cpuhp/2",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 27,
					name: "idle_inject/2",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 28,
					name: "migration/2",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 29,
					name: "ksoftirqd/2",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 30,
					name: "kworker/2:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 31,
					name: "kworker/2:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 32,
					name: "cpuhp/3",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 33,
					name: "idle_inject/3",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 34,
					name: "migration/3",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 35,
					name: "ksoftirqd/3",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 37,
					name: "kworker/3:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 38,
					name: "cpuhp/4",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 39,
					name: "idle_inject/4",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 40,
					name: "migration/4",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 41,
					name: "ksoftirqd/4",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 42,
					name: "kworker/4:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 43,
					name: "kworker/4:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 44,
					name: "cpuhp/5",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 45,
					name: "idle_inject/5",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 46,
					name: "migration/5",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 47,
					name: "ksoftirqd/5",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 49,
					name: "kworker/5:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 50,
					name: "cpuhp/6",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 51,
					name: "idle_inject/6",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 52,
					name: "migration/6",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 53,
					name: "ksoftirqd/6",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 55,
					name: "kworker/6:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 56,
					name: "cpuhp/7",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 57,
					name: "idle_inject/7",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 58,
					name: "migration/7",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 59,
					name: "ksoftirqd/7",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 61,
					name: "kworker/7:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 62,
					name: "cpuhp/8",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 63,
					name: "idle_inject/8",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 64,
					name: "migration/8",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 65,
					name: "ksoftirqd/8",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 67,
					name: "kworker/8:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 68,
					name: "cpuhp/9",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 69,
					name: "idle_inject/9",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 70,
					name: "migration/9",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 71,
					name: "ksoftirqd/9",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 73,
					name: "kworker/9:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 74,
					name: "cpuhp/10",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 75,
					name: "idle_inject/10",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 76,
					name: "migration/10",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 77,
					name: "ksoftirqd/10",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 79,
					name: "kworker/10:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 80,
					name: "cpuhp/11",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 81,
					name: "idle_inject/11",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 82,
					name: "migration/11",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 83,
					name: "ksoftirqd/11",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 84,
					name: "kworker/11:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 85,
					name: "kworker/11:0H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 86,
					name: "kdevtmpfs",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 87,
					name: "inet_frag_wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 88,
					name: "kauditd",
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 89,
					name: "khungtaskd",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 91,
					name: "oom_reaper",
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 93,
					name: "writeback",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 94,
					name: "kcompactd0",
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 95,
					name: "ksmd",
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 97,
					name: "khugepaged",
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 98,
					name: "kintegrityd",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 99,
					name: "kblockd",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 100,
					name: "blkcg_punt_bio",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 101,
					name: "tpm_dev_wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 102,
					name: "ata_sff",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 103,
					name: "md",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 104,
					name: "edac-poller",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 105,
					name: "devfreq_wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 106,
					name: "watchdogd",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 107,
					name: "kworker/7:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 108,
					name: "kworker/1:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 109,
					name: "kswapd0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 110,
					name: "ecryptfs-kthrea",
					state: "8193 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 111,
					name: "kthrotld",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 112,
					name: "irq/123-aerdrv",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 113,
					name: "irq/123-pcie-dp",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 114,
					name: "irq/124-aerdrv",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 115,
					name: "irq/124-pcie-dp",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 116,
					name: "irq/125-aerdrv",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 117,
					name: "irq/125-pcie-dp",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 118,
					name: "irq/126-aerdrv",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 119,
					name: "irq/126-pcie-dp",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 121,
					name: "kworker/3:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 124,
					name: "kworker/6:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 125,
					name: "kworker/8:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 126,
					name: "kworker/9:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 127,
					name: "kworker/10:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 129,
					name: "acpi_thermal_pm",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 130,
					name: "xenbus_probe",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 131,
					name: "hwrng",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 132,
					name: "mld",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 133,
					name: "ipv6_addrconf",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 141,
					name: "kstrp",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 143,
					name: "zswap-shrink",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 148,
					name: "charger_manager",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 168,
					name: "kworker/5:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 171,
					name: "kworker/4:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 183,
					name: "kworker/10:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 184,
					name: "kworker/3:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 185,
					name: "kworker/9:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 186,
					name: "kworker/6:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 187,
					name: "kworker/7:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 188,
					name: "kworker/11:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 189,
					name: "kworker/8:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 190,
					name: "kworker/0:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 191,
					name: "kworker/2:1H",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 204,
					name: "kworker/9:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 215,
					name: "nvme-wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 216,
					name: "nvme-reset-wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 217,
					name: "nvme-delete-wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 218,
					name: "nvme-auth-wq",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 219,
					name: "scsi_eh_0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 220,
					name: "scsi_tmf_0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 233,
					name: "kworker/u24:4",
					state: "2 - Uninterruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 234,
					name: "irq/74-ELAN0710",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 237,
					name: "irq/18-alcor_sd",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 238,
					name: "kworker/6:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 242,
					name: "scsi_eh_1",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 243,
					name: "scsi_tmf_1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 244,
					name: "usb-storage",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 245,
					name: "uas",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 266,
					name: "jbd2/sdb2-8",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 267,
					name: "ext4-rsv-conver",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 338,
					name: "kworker/0:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 434,
					name: "irq/143-mei_me",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 435,
					name: "kworker/u24:6",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 452,
					name: "cryptd",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 462,
					name: "cfg80211",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 465,
					name: "kworker/11:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 540,
					name: "kworker/u25:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 541,
					name: "kworker/u25:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 578,
					name: "kworker/3:3",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 584,
					name: "irq/144-rtw88_p",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 594,
					name: "kworker/u24:15",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 626,
					name: "card0-crtc0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 627,
					name: "card0-crtc1",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 628,
					name: "card0-crtc2",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 644,
					name: "nvkm-disp",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 809,
					name: "kworker/5:4",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 812,
					name: "card1-crtc0",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 813,
					name: "card1-crtc1",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 814,
					name: "card1-crtc2",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 815,
					name: "card1-crtc3",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 898,
					name: "kworker/2:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 910,
					name: "kworker/4:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 1026,
					name: "kworker/10:3",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 1371,
					name: "kworker/8:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 2227,
					name: "krfcommd",
					state: "1 - Interruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 4307,
					name: "kworker/1:3",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 7542,
					name: "kworker/u25:3",
					state: "2 - Uninterruptible",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 9313,
					name: "kworker/5:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 9405,
					name: "kworker/u24:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 9406,
					name: "kworker/u24:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 9441,
					name: "kworker/7:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 10090,
					name: "kworker/u25:0",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 10112,
					name: "kworker/2:1",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 10622,
					name: "kworker/u24:2",
					state: "1026 - Desconocido",
					pid_parent: 2,
					ram_memory: 0,
					ram_porcentaje: 0
				},
				{
					pid: 10623,
					name: "kworker/u24:3",
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
			pid: 7,
			name: "kworker/0:0",
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
			pid: 30,
			name: "kworker/2:0",
			user: 0,
			state: "1026 - Desconocido",
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
			pid: 42,
			name: "kworker/4:0",
			user: 0,
			state: "1026 - Desconocido",
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
			pid: 91,
			name: "oom_reaper",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 93,
			name: "writeback",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 94,
			name: "kcompactd0",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 95,
			name: "ksmd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 97,
			name: "khugepaged",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 98,
			name: "kintegrityd",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 99,
			name: "kblockd",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 100,
			name: "blkcg_punt_bio",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 101,
			name: "tpm_dev_wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 102,
			name: "ata_sff",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 103,
			name: "md",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 104,
			name: "edac-poller",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 105,
			name: "devfreq_wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 106,
			name: "watchdogd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 107,
			name: "kworker/7:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 108,
			name: "kworker/1:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 109,
			name: "kswapd0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 110,
			name: "ecryptfs-kthrea",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 111,
			name: "kthrotld",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 112,
			name: "irq/123-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 113,
			name: "irq/123-pcie-dp",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 114,
			name: "irq/124-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 115,
			name: "irq/124-pcie-dp",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 116,
			name: "irq/125-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 117,
			name: "irq/125-pcie-dp",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 118,
			name: "irq/126-aerdrv",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 119,
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
			pid: 125,
			name: "kworker/8:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 126,
			name: "kworker/9:1",
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
			pid: 168,
			name: "kworker/5:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 171,
			name: "kworker/4:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 183,
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
			name: "kworker/9:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 186,
			name: "kworker/6:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 187,
			name: "kworker/7:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 188,
			name: "kworker/11:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 189,
			name: "kworker/8:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 190,
			name: "kworker/0:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 191,
			name: "kworker/2:1H",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 204,
			name: "kworker/9:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 215,
			name: "nvme-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 216,
			name: "nvme-reset-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 217,
			name: "nvme-delete-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 218,
			name: "nvme-auth-wq",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 219,
			name: "scsi_eh_0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 220,
			name: "scsi_tmf_0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 233,
			name: "kworker/u24:4",
			user: 0,
			state: "0 - Running",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 234,
			name: "irq/74-ELAN0710",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 237,
			name: "irq/18-alcor_sd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 238,
			name: "kworker/6:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 242,
			name: "scsi_eh_1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 243,
			name: "scsi_tmf_1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 244,
			name: "usb-storage",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 245,
			name: "uas",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 266,
			name: "jbd2/sdb2-8",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 267,
			name: "ext4-rsv-conver",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 307,
			name: "systemd-journal",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 19292,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 338,
			name: "kworker/0:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 376,
			name: "systemd-udevd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 7936,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 434,
			name: "irq/143-mei_me",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 435,
			name: "kworker/u24:6",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 452,
			name: "cryptd",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 462,
			name: "cfg80211",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 465,
			name: "kworker/11:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 540,
			name: "kworker/u25:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 541,
			name: "kworker/u25:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 578,
			name: "kworker/3:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 584,
			name: "irq/144-rtw88_p",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 594,
			name: "kworker/u24:15",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 626,
			name: "card0-crtc0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 627,
			name: "card0-crtc1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 628,
			name: "card0-crtc2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 644,
			name: "nvkm-disp",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 809,
			name: "kworker/5:4",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 812,
			name: "card1-crtc0",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 813,
			name: "card1-crtc1",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 814,
			name: "card1-crtc2",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 815,
			name: "card1-crtc3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 898,
			name: "kworker/2:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 905,
			name: "systemd-oomd",
			user: 108,
			state: "1 - Interruptible",
			ram_memory: 6784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 906,
			name: "systemd-resolve",
			user: 101,
			state: "1 - Interruptible",
			ram_memory: 14924,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 907,
			name: "systemd-timesyn",
			user: 103,
			state: "1 - Interruptible",
			ram_memory: 7168,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 910,
			name: "kworker/4:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 983,
			name: "accounts-daemon",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 7836,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 984,
			name: "acpid",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 1792,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 987,
			name: "avahi-daemon",
			user: 114,
			state: "1 - Interruptible",
			ram_memory: 3840,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 1035,
					name: "avahi-daemon",
					state: "8193 - Desconocido",
					pid_parent: 987,
					ram_memory: 1288,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 988,
			name: "bluetoothd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 4608,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 989,
			name: "cron",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 2688,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 990,
			name: "dbus-daemon",
			user: 102,
			state: "1 - Interruptible",
			ram_memory: 6272,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 991,
			name: "NetworkManager",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 18892,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 997,
			name: "input-remapper-",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 34868,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 1138,
					name: "input-remapper-",
					state: "8193 - Desconocido",
					pid_parent: 997,
					ram_memory: 21664,
					ram_porcentaje: 0
				},
				{
					pid: 2963,
					name: "input-remapper-",
					state: "1 - Interruptible",
					pid_parent: 997,
					ram_memory: 25600,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 999,
			name: "irqbalance",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 3840,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1000,
			name: "networkd-dispat",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 20464,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1001,
			name: "polkitd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11072,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1002,
			name: "power-profiles-",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 7724,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1003,
			name: "rsyslogd",
			user: 104,
			state: "1 - Interruptible",
			ram_memory: 6100,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1006,
			name: "snapd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 33484,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1007,
			name: "switcheroo-cont",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 6528,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1008,
			name: "systemd-logind",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 8016,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1009,
			name: "thermald",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 10880,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1010,
			name: "udisksd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 13756,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1011,
			name: "wpa_supplicant",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 10880,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1026,
			name: "kworker/10:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1035,
			name: "avahi-daemon",
			user: 114,
			state: "8193 - Desconocido",
			ram_memory: 1288,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1098,
			name: "ModemManager",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11984,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1102,
			name: "cupsd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 13440,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1106,
			name: "unattended-upgr",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 23552,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1113,
			name: "containerd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 44068,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1138,
			name: "input-remapper-",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 21664,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1371,
			name: "kworker/8:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1423,
			name: "upowerd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 9088,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1469,
			name: "cups-browsed",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 11520,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1470,
			name: "dockerd",
			user: 0,
			state: "8193 - Desconocido",
			ram_memory: 77764,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1474,
			name: "kerneloops",
			user: 113,
			state: "1 - Interruptible",
			ram_memory: 2188,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1476,
			name: "kerneloops",
			user: 113,
			state: "1 - Interruptible",
			ram_memory: 2080,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1518,
			name: "gdm3",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 8960,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2128,
					name: "gdm-session-wor",
					state: "1 - Interruptible",
					pid_parent: 1518,
					ram_memory: 10976,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 1578,
			name: "rtkit-daemon",
			user: 116,
			state: "1 - Interruptible",
			ram_memory: 3072,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 1890,
			name: "packagekitd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 41656,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2104,
			name: "colord",
			user: 123,
			state: "1 - Interruptible",
			ram_memory: 13396,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2128,
			name: "gdm-session-wor",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 10976,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2237,
					name: "gdm-wayland-ses",
					state: "1 - Interruptible",
					pid_parent: 2128,
					ram_memory: 6144,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2140,
			name: "systemd",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 10752,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2141,
					name: "(sd-pam)",
					state: "8193 - Desconocido",
					pid_parent: 2140,
					ram_memory: 6384,
					ram_porcentaje: 0
				},
				{
					pid: 2147,
					name: "pipewire",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6656,
					ram_porcentaje: 0
				},
				{
					pid: 2148,
					name: "pipewire-media-",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6528,
					ram_porcentaje: 0
				},
				{
					pid: 2149,
					name: "pulseaudio",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 28904,
					ram_porcentaje: 0
				},
				{
					pid: 2163,
					name: "dbus-daemon",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 5504,
					ram_porcentaje: 0
				},
				{
					pid: 2184,
					name: "gvfsd",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 8192,
					ram_porcentaje: 0
				},
				{
					pid: 2186,
					name: "xdg-document-po",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 7680,
					ram_porcentaje: 0
				},
				{
					pid: 2191,
					name: "gvfsd-fuse",
					state: "8193 - Desconocido",
					pid_parent: 2140,
					ram_memory: 6400,
					ram_porcentaje: 0
				},
				{
					pid: 2196,
					name: "xdg-permission-",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6272,
					ram_porcentaje: 0
				},
				{
					pid: 2225,
					name: "tracker-miner-f",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 26068,
					ram_porcentaje: 0
				},
				{
					pid: 2249,
					name: "gvfs-udisks2-vo",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 11136,
					ram_porcentaje: 0
				},
				{
					pid: 2271,
					name: "gvfs-gphoto2-vo",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 7040,
					ram_porcentaje: 0
				},
				{
					pid: 2282,
					name: "gvfs-goa-volume",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6912,
					ram_porcentaje: 0
				},
				{
					pid: 2301,
					name: "gnome-session-c",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 5504,
					ram_porcentaje: 0
				},
				{
					pid: 2286,
					name: "goa-daemon",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 40704,
					ram_porcentaje: 0
				},
				{
					pid: 2321,
					name: "gvfs-afc-volume",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 7936,
					ram_porcentaje: 0
				},
				{
					pid: 2319,
					name: "goa-identity-se",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 15104,
					ram_porcentaje: 0
				},
				{
					pid: 2331,
					name: "gvfs-mtp-volume",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6784,
					ram_porcentaje: 0
				},
				{
					pid: 2336,
					name: "gnome-session-b",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 17792,
					ram_porcentaje: 0
				},
				{
					pid: 2357,
					name: "gnome-shell",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 423664,
					ram_porcentaje: 2
				},
				{
					pid: 2448,
					name: "evolution-sourc",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 26240,
					ram_porcentaje: 0
				},
				{
					pid: 2452,
					name: "dconf-service",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6144,
					ram_porcentaje: 0
				},
				{
					pid: 2458,
					name: "evolution-calen",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 31104,
					ram_porcentaje: 0
				},
				{
					pid: 2441,
					name: "gnome-shell-cal",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 17792,
					ram_porcentaje: 0
				},
				{
					pid: 2473,
					name: "evolution-addre",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 29440,
					ram_porcentaje: 0
				},
				{
					pid: 2492,
					name: "at-spi2-registr",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 7552,
					ram_porcentaje: 0
				},
				{
					pid: 2490,
					name: "gjs",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 28228,
					ram_porcentaje: 0
				},
				{
					pid: 2512,
					name: "sh",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 1536,
					ram_porcentaje: 0
				},
				{
					pid: 2515,
					name: "gsd-a11y-settin",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 7168,
					ram_porcentaje: 0
				},
				{
					pid: 2518,
					name: "gsd-color",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 27652,
					ram_porcentaje: 0
				},
				{
					pid: 2520,
					name: "gsd-datetime",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 16640,
					ram_porcentaje: 0
				},
				{
					pid: 2522,
					name: "gsd-housekeepin",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 8448,
					ram_porcentaje: 0
				},
				{
					pid: 2533,
					name: "gsd-keyboard",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 22784,
					ram_porcentaje: 0
				},
				{
					pid: 2536,
					name: "gsd-media-keys",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 27264,
					ram_porcentaje: 0
				},
				{
					pid: 2538,
					name: "gsd-power",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 26624,
					ram_porcentaje: 0
				},
				{
					pid: 2540,
					name: "gsd-print-notif",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 11520,
					ram_porcentaje: 0
				},
				{
					pid: 2543,
					name: "gsd-rfkill",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 7040,
					ram_porcentaje: 0
				},
				{
					pid: 2545,
					name: "gsd-screensaver",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6144,
					ram_porcentaje: 0
				},
				{
					pid: 2546,
					name: "gsd-sharing",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 11008,
					ram_porcentaje: 0
				},
				{
					pid: 2547,
					name: "gsd-smartcard",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 8448,
					ram_porcentaje: 0
				},
				{
					pid: 2548,
					name: "gsd-sound",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 10112,
					ram_porcentaje: 0
				},
				{
					pid: 2549,
					name: "gsd-wacom",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 22784,
					ram_porcentaje: 0
				},
				{
					pid: 2660,
					name: "ibus-portal",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 7424,
					ram_porcentaje: 0
				},
				{
					pid: 2684,
					name: "gsd-printer",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 15232,
					ram_porcentaje: 0
				},
				{
					pid: 2509,
					name: "gjs",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 48348,
					ram_porcentaje: 0
				},
				{
					pid: 2693,
					name: "snapd-desktop-i",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 14080,
					ram_porcentaje: 0
				},
				{
					pid: 2702,
					name: "snap-store",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 119172,
					ram_porcentaje: 0
				},
				{
					pid: 2804,
					name: "gjs",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 27968,
					ram_porcentaje: 0
				},
				{
					pid: 2828,
					name: "xdg-desktop-por",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 14336,
					ram_porcentaje: 0
				},
				{
					pid: 2929,
					name: "xdg-desktop-por",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 28564,
					ram_porcentaje: 0
				},
				{
					pid: 3022,
					name: "xdg-desktop-por",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 25752,
					ram_porcentaje: 0
				},
				{
					pid: 3182,
					name: "gvfsd-metadata",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 6784,
					ram_porcentaje: 0
				},
				{
					pid: 4416,
					name: "gnome-calendar",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 60092,
					ram_porcentaje: 0
				},
				{
					pid: 4649,
					name: "chrome_crashpad",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 3328,
					ram_porcentaje: 0
				},
				{
					pid: 4679,
					name: "gsd-xsettings",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 81308,
					ram_porcentaje: 0
				},
				{
					pid: 4714,
					name: "ibus-x11",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 25244,
					ram_porcentaje: 0
				},
				{
					pid: 4634,
					name: "code",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 160284,
					ram_porcentaje: 0
				},
				{
					pid: 5423,
					name: "chrome_crashpad",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 3328,
					ram_porcentaje: 0
				},
				{
					pid: 5425,
					name: "chrome_crashpad",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 3072,
					ram_porcentaje: 0
				},
				{
					pid: 5845,
					name: "cpptools-srv",
					state: "8193 - Desconocido",
					pid_parent: 2140,
					ram_memory: 12372,
					ram_porcentaje: 0
				},
				{
					pid: 7513,
					name: "cpptools-srv",
					state: "8193 - Desconocido",
					pid_parent: 2140,
					ram_memory: 14556,
					ram_porcentaje: 0
				},
				{
					pid: 10664,
					name: "gnome-control-c",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 24032,
					ram_porcentaje: 0
				},
				{
					pid: 10670,
					name: "org.gnome.Chara",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 44604,
					ram_porcentaje: 0
				},
				{
					pid: 10998,
					name: "gitkraken",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 212516,
					ram_porcentaje: 1
				},
				{
					pid: 11037,
					name: "chrome_crashpad",
					state: "1 - Interruptible",
					pid_parent: 2140,
					ram_memory: 3072,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2141,
			name: "(sd-pam)",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 6384,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2147,
			name: "pipewire",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6656,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2148,
			name: "pipewire-media-",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6528,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2149,
			name: "pulseaudio",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28904,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2163,
			name: "dbus-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 5504,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2170,
			name: "gnome-keyring-d",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7596,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2184,
			name: "gvfsd",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8192,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 3133,
					name: "gvfsd-trash",
					state: "1 - Interruptible",
					pid_parent: 2184,
					ram_memory: 8960,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2186,
			name: "xdg-document-po",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7680,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2191,
			name: "gvfsd-fuse",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 6400,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2196,
			name: "xdg-permission-",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6272,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2208,
			name: "fusermount3",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 1792,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2225,
			name: "tracker-miner-f",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 26068,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2227,
			name: "krfcommd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2237,
			name: "gdm-wayland-ses",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6144,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2240,
					name: "gnome-session-b",
					state: "1 - Interruptible",
					pid_parent: 2237,
					ram_memory: 15744,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2240,
			name: "gnome-session-b",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 15744,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2249,
			name: "gvfs-udisks2-vo",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 11136,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2271,
			name: "gvfs-gphoto2-vo",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7040,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2282,
			name: "gvfs-goa-volume",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6912,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2286,
			name: "goa-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 40704,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2301,
			name: "gnome-session-c",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 5504,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2319,
			name: "goa-identity-se",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 15104,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2321,
			name: "gvfs-afc-volume",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7936,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2331,
			name: "gvfs-mtp-volume",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2336,
			name: "gnome-session-b",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 17792,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2353,
					name: "at-spi-bus-laun",
					state: "1 - Interruptible",
					pid_parent: 2336,
					ram_memory: 7552,
					ram_porcentaje: 0
				},
				{
					pid: 2601,
					name: "gsd-disk-utilit",
					state: "1 - Interruptible",
					pid_parent: 2336,
					ram_memory: 7936,
					ram_porcentaje: 0
				},
				{
					pid: 2612,
					name: "evolution-alarm",
					state: "1 - Interruptible",
					pid_parent: 2336,
					ram_memory: 63812,
					ram_porcentaje: 0
				},
				{
					pid: 5449,
					name: "update-notifier",
					state: "1 - Interruptible",
					pid_parent: 2336,
					ram_memory: 28900,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2353,
			name: "at-spi-bus-laun",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7552,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2364,
					name: "dbus-daemon",
					state: "1 - Interruptible",
					pid_parent: 2353,
					ram_memory: 4352,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2357,
			name: "gnome-shell",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 423664,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 3050,
					name: "gjs",
					state: "1 - Interruptible",
					pid_parent: 2357,
					ram_memory: 63924,
					ram_porcentaje: 0
				},
				{
					pid: 4652,
					name: "Xwayland",
					state: "1 - Interruptible",
					pid_parent: 2357,
					ram_memory: 120308,
					ram_porcentaje: 0
				},
				{
					pid: 5350,
					name: "chrome",
					state: "1 - Interruptible",
					pid_parent: 2357,
					ram_memory: 344716,
					ram_porcentaje: 2
				}
			]
		},
		{
			pid: 2364,
			name: "dbus-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 4352,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2441,
			name: "gnome-shell-cal",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 17792,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2448,
			name: "evolution-sourc",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 26240,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2452,
			name: "dconf-service",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6144,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2458,
			name: "evolution-calen",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 31104,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2473,
			name: "evolution-addre",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 29440,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2490,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28228,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2492,
			name: "at-spi2-registr",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7552,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2509,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 48348,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2512,
			name: "sh",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 1536,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2517,
					name: "ibus-daemon",
					state: "1 - Interruptible",
					pid_parent: 2512,
					ram_memory: 12180,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2515,
			name: "gsd-a11y-settin",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7168,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2517,
			name: "ibus-daemon",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 12180,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2645,
					name: "ibus-memconf",
					state: "1 - Interruptible",
					pid_parent: 2517,
					ram_memory: 7168,
					ram_porcentaje: 0
				},
				{
					pid: 2654,
					name: "ibus-extension-",
					state: "1 - Interruptible",
					pid_parent: 2517,
					ram_memory: 29000,
					ram_porcentaje: 0
				},
				{
					pid: 2694,
					name: "ibus-engine-sim",
					state: "1 - Interruptible",
					pid_parent: 2517,
					ram_memory: 7552,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2518,
			name: "gsd-color",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 27652,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2520,
			name: "gsd-datetime",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 16640,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2522,
			name: "gsd-housekeepin",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8448,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2533,
			name: "gsd-keyboard",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 22784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2536,
			name: "gsd-media-keys",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 27264,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2538,
			name: "gsd-power",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 26624,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2540,
			name: "gsd-print-notif",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 11520,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2543,
			name: "gsd-rfkill",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7040,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2545,
			name: "gsd-screensaver",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6144,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2546,
			name: "gsd-sharing",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 11008,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2547,
			name: "gsd-smartcard",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8448,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2548,
			name: "gsd-sound",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 10112,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2549,
			name: "gsd-wacom",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 22784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2601,
			name: "gsd-disk-utilit",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7936,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2612,
			name: "evolution-alarm",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 63812,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2645,
			name: "ibus-memconf",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7168,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2654,
			name: "ibus-extension-",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 29000,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2660,
			name: "ibus-portal",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7424,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2684,
			name: "gsd-printer",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 15232,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2693,
			name: "snapd-desktop-i",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 14080,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 2820,
					name: "snapd-desktop-i",
					state: "1 - Interruptible",
					pid_parent: 2693,
					ram_memory: 19796,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 2694,
			name: "ibus-engine-sim",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 7552,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2702,
			name: "snap-store",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 119172,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2804,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 27968,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2820,
			name: "snapd-desktop-i",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 19796,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2828,
			name: "xdg-desktop-por",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 14336,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2929,
			name: "xdg-desktop-por",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28564,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 2963,
			name: "input-remapper-",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 25600,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3022,
			name: "xdg-desktop-por",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 25752,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3050,
			name: "gjs",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 63924,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3133,
			name: "gvfsd-trash",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 8960,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3174,
			name: "fwupd",
			user: 0,
			state: "1 - Interruptible",
			ram_memory: 33336,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 3182,
			name: "gvfsd-metadata",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 6784,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4307,
			name: "kworker/1:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4416,
			name: "gnome-calendar",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 60092,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4634,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 160284,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 4636,
					name: "code",
					state: "1 - Interruptible",
					pid_parent: 4634,
					ram_memory: 46848,
					ram_porcentaje: 0
				},
				{
					pid: 4637,
					name: "code",
					state: "1 - Interruptible",
					pid_parent: 4634,
					ram_memory: 46976,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 4636,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 46848,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4637,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 46976,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 4779,
					name: "code",
					state: "0 - Running",
					pid_parent: 4637,
					ram_memory: 379400,
					ram_porcentaje: 2
				}
			]
		},
		{
			pid: 4649,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3328,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4652,
			name: "Xwayland",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 120308,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4679,
			name: "gsd-xsettings",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 81308,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4714,
			name: "ibus-x11",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 25244,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4744,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 65508,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 4745,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 169260,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 4779,
			name: "code",
			user: 1000,
			state: "0 - Running",
			ram_memory: 379400,
			ram_porcentaje: 2,
			childs:[

			]
		},
		{
			pid: 5079,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 405656,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 5223,
					name: "cpptools",
					state: "8193 - Desconocido",
					pid_parent: 5079,
					ram_memory: 28016,
					ram_porcentaje: 0
				},
				{
					pid: 5278,
					name: "code",
					state: "1 - Interruptible",
					pid_parent: 5079,
					ram_memory: 91176,
					ram_porcentaje: 0
				},
				{
					pid: 5531,
					name: "code",
					state: "1 - Interruptible",
					pid_parent: 5079,
					ram_memory: 87548,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 5089,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 115680,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5090,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 82612,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5223,
			name: "cpptools",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 28016,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5278,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 91176,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5350,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 344716,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 5355,
					name: "cat",
					state: "1 - Interruptible",
					pid_parent: 5350,
					ram_memory: 1920,
					ram_porcentaje: 0
				},
				{
					pid: 5356,
					name: "cat",
					state: "1 - Interruptible",
					pid_parent: 5350,
					ram_memory: 1920,
					ram_porcentaje: 0
				},
				{
					pid: 5431,
					name: "chrome",
					state: "1 - Interruptible",
					pid_parent: 5350,
					ram_memory: 58624,
					ram_porcentaje: 0
				},
				{
					pid: 5432,
					name: "chrome",
					state: "1 - Interruptible",
					pid_parent: 5350,
					ram_memory: 59392,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 5355,
			name: "cat",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 1920,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5356,
			name: "cat",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 1920,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5423,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3328,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5425,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3072,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5431,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 58624,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 5512,
					name: "chrome",
					state: "1 - Interruptible",
					pid_parent: 5431,
					ram_memory: 171968,
					ram_porcentaje: 1
				}
			]
		},
		{
			pid: 5432,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 59392,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 5434,
					name: "nacl_helper",
					state: "1 - Interruptible",
					pid_parent: 5432,
					ram_memory: 4736,
					ram_porcentaje: 0
				},
				{
					pid: 5437,
					name: "chrome",
					state: "1 - Interruptible",
					pid_parent: 5432,
					ram_memory: 16044,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 5434,
			name: "nacl_helper",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 4736,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5437,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 16044,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 5607,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 54116,
					ram_porcentaje: 0
				},
				{
					pid: 5832,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 197192,
					ram_porcentaje: 1
				},
				{
					pid: 5888,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 164416,
					ram_porcentaje: 1
				},
				{
					pid: 5946,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 90376,
					ram_porcentaje: 0
				},
				{
					pid: 5954,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 93900,
					ram_porcentaje: 0
				},
				{
					pid: 6101,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 236280,
					ram_porcentaje: 1
				},
				{
					pid: 6102,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 112616,
					ram_porcentaje: 0
				},
				{
					pid: 6103,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 174512,
					ram_porcentaje: 1
				},
				{
					pid: 6113,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 157164,
					ram_porcentaje: 0
				},
				{
					pid: 6167,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 152392,
					ram_porcentaje: 0
				},
				{
					pid: 6234,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 156092,
					ram_porcentaje: 0
				},
				{
					pid: 10593,
					name: "chrome",
					state: "8193 - Desconocido",
					pid_parent: 5437,
					ram_memory: 67692,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 5449,
			name: "update-notifier",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 28900,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5512,
			name: "chrome",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 171968,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 5522,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 113840,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5531,
			name: "code",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 87548,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5582,
			name: "code",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 90116,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 5605,
					name: "bash",
					state: "1 - Interruptible",
					pid_parent: 5582,
					ram_memory: 9344,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 5605,
			name: "bash",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 9344,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 11399,
					name: "cat",
					state: "0 - Running",
					pid_parent: 5605,
					ram_memory: 2048,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 5607,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 54116,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5832,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 197192,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 5845,
			name: "cpptools-srv",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 12372,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5888,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 164416,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 5946,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 90376,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 5954,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 93900,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 6101,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 236280,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 6102,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 112616,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 6103,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 174512,
			ram_porcentaje: 1,
			childs:[

			]
		},
		{
			pid: 6113,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 157164,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 6167,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 152392,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 6234,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 156092,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7513,
			name: "cpptools-srv",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 14556,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 7542,
			name: "kworker/u25:3",
			user: 0,
			state: "2 - Uninterruptible",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9313,
			name: "kworker/5:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9405,
			name: "kworker/u24:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9406,
			name: "kworker/u24:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 9441,
			name: "kworker/7:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10090,
			name: "kworker/u25:0",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10112,
			name: "kworker/2:1",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10593,
			name: "chrome",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 67692,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10622,
			name: "kworker/u24:2",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10623,
			name: "kworker/u24:3",
			user: 0,
			state: "1026 - Desconocido",
			ram_memory: 0,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10664,
			name: "gnome-control-c",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 24032,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10670,
			name: "org.gnome.Chara",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 44604,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 10998,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 212516,
			ram_porcentaje: 1,
			childs:[
				{
					pid: 11000,
					name: "gitkraken",
					state: "1 - Interruptible",
					pid_parent: 10998,
					ram_memory: 50304,
					ram_porcentaje: 0
				},
				{
					pid: 11001,
					name: "gitkraken",
					state: "1 - Interruptible",
					pid_parent: 10998,
					ram_memory: 50304,
					ram_porcentaje: 0
				},
				{
					pid: 11315,
					name: "node-spawn-serv",
					state: "8193 - Desconocido",
					pid_parent: 10998,
					ram_memory: 768,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 11000,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 50304,
			ram_porcentaje: 0,
			childs:[
				{
					pid: 11114,
					name: "gitkraken",
					state: "1 - Interruptible",
					pid_parent: 11000,
					ram_memory: 84500,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 11001,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 50304,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11037,
			name: "chrome_crashpad",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 3072,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11049,
			name: "gitkraken",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 68348,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11091,
			name: "gitkraken",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 139508,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11114,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 84500,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11140,
			name: "gitkraken",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 370256,
			ram_porcentaje: 2,
			childs:[
				{
					pid: 11237,
					name: "gitkraken",
					state: "1 - Interruptible",
					pid_parent: 11140,
					ram_memory: 79044,
					ram_porcentaje: 0
				},
				{
					pid: 11296,
					name: "node-spawn-serv",
					state: "8193 - Desconocido",
					pid_parent: 11140,
					ram_memory: 640,
					ram_porcentaje: 0
				}
			]
		},
		{
			pid: 11237,
			name: "gitkraken",
			user: 1000,
			state: "1 - Interruptible",
			ram_memory: 79044,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11296,
			name: "node-spawn-serv",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 640,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11315,
			name: "node-spawn-serv",
			user: 1000,
			state: "8193 - Desconocido",
			ram_memory: 768,
			ram_porcentaje: 0,
			childs:[

			]
		},
		{
			pid: 11399,
			name: "cat",
			user: 1000,
			state: "0 - Running",
			ram_memory: 2048,
			ram_porcentaje: 0,
			childs:[

			]
		}
	],
	total_processes: 352

}
