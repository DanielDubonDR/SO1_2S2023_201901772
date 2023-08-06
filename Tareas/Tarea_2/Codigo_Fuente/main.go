package main

import (
	"paquetes/API"
	"fmt"
	"log"
	"net/http"
	"github.com/rs/cors"
	httplogger "github.com/jesseokeya/go-httplogger"
)

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST"},
		AllowedHeaders: []string{"*"},
	})
	router := API.NewRouter()
	fmt.Println("Sever running on port 5000")
	log.Fatal(http.ListenAndServe(":5000", httplogger.Golog(c.Handler(router))))
	// log.Fatal(http.ListenAndServe(":5000", c.Handler(router)))
}