function Registros({ data }) {
  return (
    <>
      <div className="text-center">
        <div className="card text-white bg-white mb-5 shadow">
          <div className="card-header pb-0 bg-black">
            <h1 className="share-tech fs-2">Datos Almacenados</h1>
          </div>
          <div className="card-body" style={{ maxHeight: "250px", overflowY: "scroll" }}>
            <table className="table table-striped">
              <thead className="text-bg-primary share-tech fs-5">
                <tr>
                  <th>No.</th>
                  <th>Carnet</th>
                  <th>Nombre</th>
                  <th>Curso</th>
                  <th>Nota</th>
                  <th>Semestre</th>
                  <th>Año</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
                {/* {data.map((c, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{c.album}</td>
                    <td>{c.artist}</td>
                    <td>{c.year}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registros;
