package modules

import (
	"encoding/json"
	"fmt"
	"os/exec"
	"paquetes/models"
)

var InfoRAM models.RAM;
var InfoCPU models.SystemInfo;

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