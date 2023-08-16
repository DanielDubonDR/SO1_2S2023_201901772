package main

import (
	"net/http"
	"paquetes/db"
	"paquetes/routes"
	"github.com/gorilla/mux"
	"github.com/jesseokeya/go-httplogger"
	"github.com/rs/cors"
)

func main() {

	// Conexion a la base de datos
	db.DBConection()

	// Middleware
	c := cors.New(cors.Options{
        AllowedOrigins: []string{"*"},
        AllowedMethods: []string{"GET", "POST"},
        AllowedHeaders: []string{"*"},
    })


	// Rutas
	r := mux.NewRouter()
	routes.IndexRoutes(r)
	routes.MusicRoutes(r)

	// Aplicar middleware a las rutas
	corsHandler := c.Handler(r)

	http.ListenAndServe(":3000", httplogger.Golog(corsHandler))
}