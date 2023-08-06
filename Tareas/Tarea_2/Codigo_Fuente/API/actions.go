package API

import (
	"encoding/json"
	"net/http"
)

type data struct {
	Carnet int `json:"carnet"`
	Nombre string `json:"nombre"`
}

func datos(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var myData = data {201901772, "Daniel Reginaldo Dubón Rodríguez"}
	json.NewEncoder(w).Encode(myData)
}