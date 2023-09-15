package routes

import (
	"paquetes/controllers"
	"github.com/gorilla/mux"
)

func ModulesRoutes(r *mux.Router) {
	r.HandleFunc("/getModules", controllers.GetDataModules).Methods("GET")
}