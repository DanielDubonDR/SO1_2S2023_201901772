package db

import (
	"database/sql"
	"fmt"
	"paquetes/config"
	_ "github.com/go-sql-driver/mysql"
)

// var DSN = "root:asdf@tcp(db:3306)/biblioteca"

var DB *sql.DB

func DBConection() {

	DSN  := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", config.DBConfig.DB_USER, config.DBConfig.DB_PASSWORD, config.DBConfig.DB_HOST, config.DBConfig.DB_PORT, config.DBConfig.DB_DATABASE)

	fmt.Println(DSN)

	var err error
	
	DB, err = sql.Open("mysql", DSN)
	if err != nil {
		fmt.Println("Error en la conexion")
		panic(err.Error())
	} else {
		fmt.Println("Conexion exitosa a la base de datos")
	}
}