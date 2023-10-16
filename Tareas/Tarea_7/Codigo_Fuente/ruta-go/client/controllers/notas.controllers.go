package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	pb "paquetes/grpc-client"
	"paquetes/models"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var ctx = context.Background()

func SetNota(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	// Obtenemos los datos del body

	nota := models.Nota{}
	json.NewDecoder(r.Body).Decode(&nota)

	conn, err := grpc.Dial("localhost:3001", grpc.WithTransportCredentials(insecure.NewCredentials()),grpc.WithBlock())
	if err != nil {
		log.Fatalln(err)
	}

	cl := pb.NewGetInfoClient(conn)
	defer func(conn *grpc.ClientConn) {
		err := conn.Close()
		if err != nil {
			log.Fatalln(err)
		}
	}(conn)

	ret, err := cl.ReturnInfo(ctx, &pb.RequestId{
		Carnet: nota.Carnet,
		Nombre: nota.Nombre,
		Curso: nota.Curso,
		Nota: nota.Nota,
		Semestre: nota.Semestre,
		Year: nota.Year,
	})

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("Client: Nota enviada con exito\nServer: " + ret.GetInfo())
	
	json.NewEncoder(w).Encode(map[string]string{"message": "Nota registrada con exito"})

}