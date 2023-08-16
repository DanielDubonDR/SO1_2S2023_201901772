package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"fmt"
)

var DSN = "root:asdf@tcp(localhost:4000)/biblioteca"
// connString := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", dbUser, dbPassword, dbHost, dbPort, dbName)
var DB *sql.DB

func DBConection() {
	var err error
	DB, err = sql.Open("mysql", DSN)
	if err != nil {
		fmt.Println("Error en la conexion")
		panic(err.Error())
	} else {
		fmt.Println("Conexion exitosa")
	}
}