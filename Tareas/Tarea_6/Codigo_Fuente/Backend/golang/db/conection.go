package db

import (
	"context"
	"fmt"
	"log"

	"github.com/go-redis/redis/v8"
)

var RDB *redis.Client
var CTX = context.Background()

func DBConection() {

	RDB = redis.NewClient(&redis.Options{
		Addr:     "127.0.0.1:6379",
		Password: "",
		DB:       4,
	})

	pong, err := RDB.Ping(RDB.Context()).Result()
	
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Redis connected: ", pong)
}