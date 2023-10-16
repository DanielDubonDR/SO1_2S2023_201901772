package routes

import (
	"paquetes/controllers"
	"github.com/gorilla/mux"
)

func MusicRoutes(r *mux.Router) {
	r.HandleFunc("/set/nota", controllers.SetNota).Methods("POST")
}