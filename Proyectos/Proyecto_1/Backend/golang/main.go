package main

import (
	// "fmt"
	"net/http"
	"paquetes/modules"
	"paquetes/routes"
	"time"

	"github.com/gorilla/mux"
	"github.com/jesseokeya/go-httplogger"
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
		defer tickerRAM.Stop()
		defer tickerCPU.Stop()
		for {
			select {
			case <-tickerRAM.C:
				modules.GetRAMInfo()
			case <-tickerCPU.C:
				modules.GetCPUInfo()
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

// func giveMyInfo(){
// 	// hacer una peticion a la api
// 	_, err := http.Get("http://localhost:4000/setIP")
// 	if err != nil {
// 		fmt.Println(err)
// 	}
// }