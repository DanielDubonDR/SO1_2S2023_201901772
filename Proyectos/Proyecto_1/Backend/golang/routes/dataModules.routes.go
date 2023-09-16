package routes

import (
	"paquetes/controllers"
	"github.com/gorilla/mux"
)

func ModulesRoutes(r *mux.Router) {
	r.HandleFunc("/getDataModules", controllers.GetDataModules).Methods("GET")
	r.HandleFunc("/killProcess/{pid}", controllers.KillProcess).Methods("GET")
}