package models

type RAM struct {
	RAMTotal int `json:"ramTotal"`
	RAMUsada int `json:"ramUsada"`
	RAMLibre int `json:"ramLibre"`
	RAMDisponible int `json:"ramDisponible"`
	RAMBuffers int `json:"ramBuffers"`
	RAMCache int `json:"ramCache"`
	RAMPorcentaje int `json:"ramPorcentaje"`
}

type Process struct {
	PID          int    `json:"pid"`
	Name         string `json:"name"`
	User         int    `json:"user"`
	State        string `json:"state"`
	RAMMemory    int    `json:"ram_memory"`
	RAMPercentage int    `json:"ram_porcentaje"`
	Childs       []Children `json:"childs"`
}

type Children struct {
	PID          int    `json:"pid_parent"`
	Name         string `json:"name"`
	User         int    `json:"user"`
	State        string `json:"state"`
	RAMMemory    int    `json:"ram_memory"`
	RAMPercentage int    `json:"ram_porcentaje"`
}

type SystemInfo struct {
	CPUPercentage int  `json:"cpu_percentaje"`
	NumCores      int      `json:"num_cores"`
	TotalRAM      int      `json:"total_ram"`
	Processes     []Process `json:"processes"`
}

type InfoModulesData struct {
	InfoRAM RAM `json:"RAM"`
	InfoCPU SystemInfo `json:"CPU"`
}
