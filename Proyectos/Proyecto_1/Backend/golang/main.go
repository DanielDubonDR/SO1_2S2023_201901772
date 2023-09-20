package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"paquetes/models"
	"paquetes/modules"
	"paquetes/routes"
	"syscall"
	"time"

	"github.com/gorilla/mux"
	"github.com/jesseokeya/go-httplogger"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

var firstTime = true

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
		tickerIP := time.NewTicker(1 * time.Second)
		tickerExtraInfo := time.NewTicker(1 * time.Second)
		defer tickerRAM.Stop()
		defer tickerCPU.Stop()
		defer tickerIP.Stop()
		defer tickerExtraInfo.Stop()
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

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		// Espera una señal del sistema operativo.
		sig := <-sigChan
		fmt.Printf("Recibida la señal %v. Enviando solicitud al servidor...\n", sig)

		// Realiza la solicitud al servidor aquí.
		delMyInfo()

		// Finaliza el programa después de enviar la solicitud.
		os.Exit(0)
	}()

	// Rutas
	r := mux.NewRouter()
	routes.IndexRoutes(r)
	routes.ModulesRoutes(r)

	// Aplicar middleware a las rutas
	corsHandler := c.Handler(r)

	http.ListenAndServe(":3000", httplogger.Golog(corsHandler))
}

func giveMyInfo() {

	if firstTime {
		firstTime = false
		return
	}

    err2 := godotenv.Load()
    if err2 != nil {
        fmt.Println("Error loading .env file")
    }

    ipPlataform := os.Getenv("IP_PLATAFORM")
    url := "http://" + ipPlataform + "/setIP"

    temp := models.InfoModulesData{}
    temp.InfoRAM = modules.InfoRAM
    temp.InfoCPU = modules.InfoCPU
    temp.InfoCPU.CPUPercentage = modules.PercentCPU
    temp.InfoCPU.NameCPU = modules.NameCPU

    // Configura un cliente HTTP con timeout
    client := &http.Client{
        Timeout: time.Second * 1, // Aquí puedes ajustar el valor del timeout según tus necesidades
    }

    // Convierte temp a JSON
    jsonData, err := json.Marshal(temp)
    if err != nil {
        fmt.Println("Error al convertir a JSON:", err)
        return
    }

    // Realiza la solicitud POST con el cliente personalizado
    resp, err := client.Post(url, "application/json", bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Println("Error al hacer la petición:", err)
        return
    }
    defer resp.Body.Close()

    // Verifica si la solicitud fue exitosa
    if resp.StatusCode != http.StatusOK {
        fmt.Println("La solicitud POST no fue exitosa. Código de estado:", resp.StatusCode)
        return
    }

    fmt.Println("Solicitud POST exitosa")
}

func delMyInfo(){
	err2 := godotenv.Load()
	if err2 != nil {
		fmt.Println("Error loading .env file")
	}
	
	ipPlataform := os.Getenv("IP_PLATAFORM")

	url := "http://" + ipPlataform + "/delIP"
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