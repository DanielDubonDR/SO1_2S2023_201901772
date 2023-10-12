package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"paquetes/db"
	"paquetes/models"
)

func SetAlbum(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	// Obtenemos los datos del body

	album := models.Album{}
	json.NewDecoder(r.Body).Decode(&album)

	ctx, rdb := db.CTX, db.RDB

	// Guardamos los datos en redis
	cont := int(rdb.Incr(ctx, "album:cont").Val())

	key := fmt.Sprintf("album:%d", cont)

	albumJson, err := json.Marshal(album)

	if err != nil {
		json.NewEncoder(w).Encode(map[string]string{"message": "Error al guardar el album"})
		return
	}

	err2 := rdb.Set(ctx, key, albumJson, 0).Err()

	if err2 != nil {
		json.NewEncoder(w).Encode(map[string]string{"message": "Error al guardar el album"})
		return
	}

	fmt.Println("Album guardado con exito")
	
	json.NewEncoder(w).Encode(album)

}