CREATE DATEBASE biblioteca IF NOT EXISTS;

USE biblioteca;

CREATE TABLE IF NOT EXISTS musica (
    title varchar(255),
    artist varchar(255),
    year varchar(255),
    genre varchar(255)
);

-- INSERT INTO musica (title, artist, year, genre) VALUES ("Abbey Road", "The Beatles", "1967", "rock");

-- SELECT * FROM musica;