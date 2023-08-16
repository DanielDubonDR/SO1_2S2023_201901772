package routes

import (
	"paquetes/controllers"
	"github.com/gorilla/mux"
)

func MusicRoutes(r *mux.Router) {
	r.HandleFunc("/getBiblioteca", controllers.GetBiblioteca).Methods("GET")
	r.HandleFunc("/setMusic", controllers.SetMusic).Methods("POST")
}