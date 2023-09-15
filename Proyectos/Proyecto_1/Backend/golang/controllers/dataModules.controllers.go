package controllers

import (
	"encoding/json"
	"net/http"
	"paquetes/models"
	"paquetes/modules"
)

func GetDataModules(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	temp:= models.InfoModulesData{}

	temp.InfoRAM = modules.InfoRAM
	temp.InfoCPU = modules.InfoCPU

	json.NewEncoder(w).Encode(temp)
}