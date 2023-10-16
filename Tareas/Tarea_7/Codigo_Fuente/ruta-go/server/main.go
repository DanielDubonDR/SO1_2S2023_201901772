package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"paquetes/config"
	"paquetes/db"
	pb "paquetes/grpc-server"
	"paquetes/models"

	"google.golang.org/grpc"
)

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

	config.LoadEnv()
	fmt.Println(config.DBConfig)
	db.DBConection()

	if err := s.Serve(listen); err != nil {
		log.Fatalln(err)
	}
}

func (s *server) ReturnInfo(ctx context.Context, in *pb.RequestId) (*pb.ReplyInfo, error) {

	data := models.Nota{
		Carnet : in.GetCarnet(),
		Nombre: in.GetNombre(),
		Curso: in.GetCurso(),
		Nota: in.GetNota(),
		Semestre: in.GetSemestre(),
		Year: in.GetYear(),
	}
	
	fmt.Println("Información recibida: ", data)

	SetNota(data)
	
	return &pb.ReplyInfo{Info: "Nota recibida y registrada correctamente"}, nil
}

func SetNota(data models.Nota) {

	query := `INSERT INTO NOTAS (carnet, nombre, curso, nota, semestre, year) VALUES (?, ?, ?, ?, ?, ?)`
	
	_, err := db.DB.Exec(query, data.Carnet, data.Nombre, data.Curso, data.Nota, data.Semestre, data.Year)
	if err != nil {
		fmt.Println("Error al insertar nota en la base de datos")
		panic(err.Error())
	}
}