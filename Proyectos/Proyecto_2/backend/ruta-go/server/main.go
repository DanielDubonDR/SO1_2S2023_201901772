package main

import (
	"context"
	"fmt"
	"log"
	"net"
	pb "paquetes/grpc-server"
	"paquetes/models"

	"google.golang.org/grpc"
)

// var ctx = context.Background()

type server struct {
	pb.UnimplementedGetInfoServer
}

func main() {
	listen, err := net.Listen("tcp", ":3001")
	fmt.Println("Servidor escuchando en puerto 3001")
	if err != nil {
		log.Fatalln(err)
	}
	s := grpc.NewServer()
	pb.RegisterGetInfoServer(s, &server{})

	if err := s.Serve(listen); err != nil {
		log.Fatalln(err)
	}
}

func (s *server) ReturnInfo(ctx context.Context, in *pb.RequestId) (*pb.ReplyInfo, error) {
	fmt.Println("Recibí de cliente: ", in.GetCarnet())
	data := models.Nota{
		Carnet : in.GetCarnet(),
		Nombre: in.GetNombre(),
		Curso: in.GetCurso(),
		Nota: in.GetNota(),
		Semestre: in.GetSemestre(),
		Year: in.GetYear(),
	}
	
	fmt.Println("Información recibida: ", data)
	
	return &pb.ReplyInfo{Info: "Nota recibida"}, nil
}