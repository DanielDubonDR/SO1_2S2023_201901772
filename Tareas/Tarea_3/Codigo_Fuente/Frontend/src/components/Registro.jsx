function Registro( { data }  ) {
  return (
    <>
      <div className="text-center p-4">
        <div className="card text-white bg-white mb-3 shadow">
          <div className="card-header bg-black">
            <h1 className="share-tech">Tabla de Errores</h1>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Año de lanzamiento</th>
                  <th>Género</th>
                </tr>
              </thead>
              <tbody>
                {data.map((c, index) => (
                  <tr key={index}>
                    <td>{c.title}</td>
                    <td>{c.artist}</td>
                    <td>{c.year}</td>
                    <td>{c.genre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
