package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"paquetes/db"
	"paquetes/models"
)

func GetBiblioteca(w http.ResponseWriter, r *http.Request) {
	
	// Agrego los headers para que el navegador sepa que es un json
	w.Header().Set("Content-Type", "application/json") // Tambien puede ser Header().Add

	// Creo la query
	query := "SELECT * FROM musica"

	// Creo la lista del resultado de la query
	var listMusic []models.Music

	// Ejecuto la query
	rows, err := db.DB.Query(query)

	// Si hay un error, lo muestro
	if err != nil {
		fmt.Println("Error en la consulta")
		panic(err.Error())
	}

	for rows.Next() {
		var music models.Music
		err := rows.Scan(&music.Title, &music.Artist, &music.Year, &music.Genre)
		if err != nil {
			fmt.Println("Error en el scan")
			panic(err.Error())
		}
		listMusic = append(listMusic, music)
		// fmt.Println(music.Title)
		// fmt.Println(music.Artist)
		// fmt.Println(music.Year)
		// fmt.Println(music.Genre)
	}

	json.NewEncoder(w).Encode(listMusic)
}

func SetMusic(w http.ResponseWriter, r *http.Request) {

	// Agrego los headers para que el navegador sepa que es un json
	w.Header().Set("Content-Type", "application/json") // Tambien puede ser Header().Add

	// Obtenemos los datos del body

	music := models.Music{}
	json.NewDecoder(r.Body).Decode(&music)

	// Creo la query
	query := `INSERT INTO musica (title, artist, year, genre) VALUES (?, ?, ?, ?)`

	_, err := db.DB.Exec(query, music.Title, music.Artist, music.Year, music.Genre)

	if err != nil {
		fmt.Println("Error en la insercion de datos")
		panic(err.Error())
	}

	fmt.Println(music)
	json.NewEncoder(w).Encode(music)

}