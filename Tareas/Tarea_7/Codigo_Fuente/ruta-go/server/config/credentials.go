package config

import (
	"fmt"
	"os"
	"paquetes/models"

	"github.com/joho/godotenv"
)

var DBConfig = models.DBEnv{}

func LoadEnv() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}

	DBConfig.DB_HOST = os.Getenv("DB_HOST")
	DBConfig.DB_PORT = os.Getenv("DB_PORT")
	DBConfig.DB_DATABASE = os.Getenv("DB_DATABASE")
	DBConfig.DB_USER = os.Getenv("DB_USER")
	DBConfig.DB_PASSWORD = os.Getenv("DB_PASSWORD")
}