import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = ({ addMusic }) => {
  const [title, setTitulo] = useState("");
  const [artist, setArtista] = useState("");
  const [year, setAnio] = useState("");
  const [genre, setGenero] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addMusic({ title, artist, year, genre });
    setTitulo("");
    setArtista("");
    setAnio("");
    setGenero("");
    toast.success("Canción agregada", {duration: 2050});
  };

  return (
    <>
      <Toaster className='mt-5' position="bottom-right"/>
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label share-tech fs-5">
              Título
            </label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              name="titulo"
              value={title}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="artista" className="form-label share-tech fs-5">
              Artista
            </label>
            <input
              type="text"
              className="form-control"
              id="artista"
              name="artista"
              value={artist}
              onChange={(e) => setArtista(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="anio" className="form-label share-tech fs-5">
              Año de lanzamiento
            </label>
            <input
              type="number"
              className="form-control"
              id="anio"
              name="anio"
              value={year}
              onChange={(e) => setAnio(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genero" className="form-label share-tech fs-5">
              Género
            </label>
            <input
              type="text"
              className="form-control"
              id="genero"
              name="genero"
              value={genre}
              onChange={(e) => setGenero(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
