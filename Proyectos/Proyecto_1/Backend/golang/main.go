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
		tickerExtraInfo := time.NewTicker(2 * time.Second)
		defer tickerRAM.Stop()
		defer tickerCPU.Stop()
		defer tickerIP.Stop()
		for {
			select {
			case <-tickerRAM.C:
				modules.GetRAMInfo()
			case <-tickerCPU.C:
				modules.GetCPUInfo()
			case <-tickerIP.C:
				giveMyInfo()
			case <-tickerExtraInfo.C:
				modules.GetExtraInfo()
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
	client := &http.Client{
        Timeout: time.Second * 1,
    }
    
    resp, err := client.Get(url)
    if err != nil {
        fmt.Println("Error al hacer la petición:", err)
        return
    }
    
    defer resp.Body.Close()
}