# show databases;
use biblioteca;
# show tables;

create table musica (
    title varchar(255),
    artist varchar(255),
    year varchar(255),
    genre varchar(255)
);

# describe musica;

INSERT INTO musica (title, artist, year, genre) VALUES ("Abbey Road", "The Beatles", "1967", "rock");

# SELECT * FROM musica;