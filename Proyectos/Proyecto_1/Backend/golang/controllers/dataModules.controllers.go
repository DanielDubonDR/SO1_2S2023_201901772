package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os/exec"
	"paquetes/models"
	"paquetes/modules"
	"github.com/gorilla/mux"
)

func GetDataModules(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	temp:= models.InfoModulesData{}
	
	temp.InfoRAM = modules.InfoRAM
	temp.InfoCPU = modules.InfoCPU
	
	temp.InfoCPU.CPUPercentage = modules.PercentCPU
	temp.InfoCPU.NameCPU = modules.NameCPU
	
	json.NewEncoder(w).Encode(temp)
}

func KillProcess(w http.ResponseWriter, r *http.Request) {
	
	w.Header().Set("Content-Type", "application/json")

	vars:= mux.Vars(r)
	pid:= vars["pid"]

	// matar el proceso
	fmt.Println("\n~> Killing process...")
	fmt.Println()
	fmt.Println("PID: ", pid)

	cmd := exec.Command("sh", "-c", "kill -9 "+ pid)
	_, err := cmd.CombinedOutput()

	if err != nil {
		fmt.Println(err)
		a:= models.Respueta{ Respuesta: false }
		json.NewEncoder(w).Encode(a)
		return
	}

	resp := models.Respueta{ Respuesta: true }
	json.NewEncoder(w).Encode(resp)
}