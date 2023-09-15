package main

import (
	"fmt"
	"net/http"
	"os"
	"paquetes/modules"
	"paquetes/routes"
	"time"

	"github.com/gorilla/mux"
	"github.com/jesseokeya/go-httplogger"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {

	// Middleware
	c := cors.New(cors.Options{
        AllowedOrigins: []string{"*"},
        AllowedMethods: []string{"GET", "POST"},
        AllowedHeaders: []string{"*"},
    })

	go func() {
		tickerRAM := time.NewTicker(1 * time.Second)
		tickerCPU := time.NewTicker(1 * time.Second)
		tickerIP := time.NewTicker(5 * time.Second)
		defer tickerRAM.Stop()
		defer tickerCPU.Stop()
		for {
			select {
			case <-tickerRAM.C:
				modules.GetRAMInfo()
			case <-tickerCPU.C:
				modules.GetCPUInfo()
			case <-tickerIP.C:
				giveMyInfo()
			}
		}
	}()

	// Rutas
	r := mux.NewRouter()
	routes.IndexRoutes(r)
	routes.ModulesRoutes(r)

	// Aplicar middleware a las rutas
	corsHandler := c.Handler(r)

	http.ListenAndServe(":3000", httplogger.Golog(corsHandler))
}

func giveMyInfo(){
	err2 := godotenv.Load()
	if err2 != nil {
		fmt.Println("Error loading .env file")
	}
	
	ipPlataform := os.Getenv("IP_PLATAFORM")

	url := "http://" + ipPlataform + "/setIP"
	_, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}
}