function Registro( { data }  ) {
  return (
    <>
      <div className="text-center p-4">
        <div className="card text-white bg-white mb-3 shadow">
          <div className="card-header bg-black">
            <h1 className="share-tech">Álbumes</h1>
          </div>
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Álbum</th>
                  <th>Artista</th>
                  <th>Año</th>
                </tr>
              </thead>
              <tbody>
                {data.map((c, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{c.album}</td>
                    <td>{c.artist}</td>
                    <td>{c.year}</td>
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
