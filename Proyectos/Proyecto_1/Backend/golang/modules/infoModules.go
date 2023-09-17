package modules

import (
	"encoding/json"
	"fmt"
	"os/exec"
	"paquetes/models"
	"time"

	"github.com/shirou/gopsutil/cpu"
)

var InfoRAM models.RAM;
var InfoCPU models.SystemInfo;
var NameCPU string;
var PercentCPU float64;

func GetRAMInfo() {

	fmt.Println("\n~> Getting RAM info...")
	fmt.Println()

	cmd := exec.Command("sh", "-c", "cat /proc/ram_201901772")
	out, err := cmd.CombinedOutput()

	if err != nil {
		fmt.Println(err)
	}

	output := string(out[:])

	temp := models.RAM{}

	err = json.Unmarshal([]byte(output), &temp)
	if err != nil {
		fmt.Println(err)
	}

	InfoRAM = temp
}

func GetCPUInfo() {

	fmt.Println("\n~> Getting CPU info...")
	fmt.Println()

	cmd := exec.Command("sh", "-c", "cat /proc/cpu_201901772")
	out, err := cmd.CombinedOutput()

	if err != nil {
		fmt.Println(err)
	}

	output := string(out[:])

	temp:= models.SystemInfo{}

	err = json.Unmarshal([]byte(output), &temp)
	if err != nil {
		fmt.Println(err)
	}

	InfoCPU = temp
}

func GetExtraInfo(){
	cpuInfo, err := cpu.Info()
	if err != nil {
		fmt.Printf("Error al obtener información de la CPU: %v\n", err)
		return
	}

	NameCPU = cpuInfo[0].ModelName

	percent, err := cpu.Percent(1*time.Second, false)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
		return
	}

	PercentCPU = percent[0]
}