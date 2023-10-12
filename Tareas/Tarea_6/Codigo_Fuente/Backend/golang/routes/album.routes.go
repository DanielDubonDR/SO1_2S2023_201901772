package routes

import (
	"paquetes/controllers"
	"github.com/gorilla/mux"
)

func MusicRoutes(r *mux.Router) {
	r.HandleFunc("/setAlbum", controllers.SetAlbum).Methods("POST")
}