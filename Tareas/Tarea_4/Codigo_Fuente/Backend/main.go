package main

import (
	// "encoding/json"
	"fmt"
	"os/exec"
	"time"
)

const BRED string = "\033[1;31m"
const BGREEN string = "\033[1;32m"
const BCYN string = "\033[1;36m"

func main(){

	for {
		getRAMInfo()
		time.Sleep(3 * time.Second)
	}

}

type RAM struct {
	Total_Ram int `json:"Total_Ram"`
	Ram_en_Uso int `json:"Ram_en_Uso"`
	Ram_Libre int `json:"Ram_Libre"`
	Porcentaje_en_Uso int `json:"Porcentaje_en_Uso"`
}

func getRAMInfo() {

	fmt.Println("\n",BRED,"~> ",BGREEN,"Getting RAM info...",BCYN)
	fmt.Println()

	cmd := exec.Command("sh", "-c", "cat /proc/ram_201901772")
	out, err := cmd.CombinedOutput()

	if err != nil {
		fmt.Println(err)
	}

	output := string(out[:])

	fmt.Println(output)

	// Mouse herramienta misteriosa que me servira despues guiño guiño
	// temp := RAM{}

	// err = json.Unmarshal([]byte(output), &temp)
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// fmt.Println("Total RAM: ", temp.Total_Ram)
	// fmt.Println("RAM en uso: ", temp.Ram_en_Uso)
	// fmt.Println("RAM libre: ", temp.Ram_Libre)
	// fmt.Println("Porcentaje en uso: ", temp.Porcentaje_en_Uso)
}