function Acordeon({ data:procesos, totalMemory }) {

  return (
    <>
      <div className="accordion shadow" id="accordionExample">

        {procesos.map((proceso) => (
          <div className="accordion-item">
          <h2 className="accordion-header" id={`heading${proceso.pid}`}>
            <div
              class="accordion-button collapsed roboto-mono"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${proceso.pid}`}
              aria-expanded="false"
              aria-controls={`collapse${proceso.pid}`}
            >
              {proceso.pid} - {proceso.name}
            </div>
          </h2>
          <div
            id={`collapse${proceso.pid}`}
            class="accordion-collapse collapse"
            aria-labelledby={`heading${proceso.pid}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body share-tech">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>PID</th>
                    <th>Name</th>
                    <th>User</th>
                    <th>State</th>
                    <th>RAM kB</th>
                    <th>RAM %</th>
                    <th className="text-center">KILL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="color-row text-white">
                    <td>{proceso.pid}</td>
                    <td>{proceso.name}</td>
                    <td>{proceso.user}</td>
                    <td>{proceso.state}</td>
                    <td>{proceso.ram_memory}</td>
                    <td>{((proceso.ram_memory / totalMemory) * 100).toFixed(2)}</td>
                    <td className="text-center">DEAD</td>
                  </tr>
                  {
                    proceso.childs.map((child) => (
                      <tr>
                        <td>{child.pid}</td>
                        <td>{child.name}</td>
                        <td>{child.user}</td>
                        <td>{child.state}</td>
                        <td>{child.ram_memory}</td>
                        <td>{((child.ram_memory / totalMemory) * 100).toFixed(2)}</td>
                        <td className="text-center">DEAD</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        ))}

        {/* <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <div
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              07721 - CHROME
            </div>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table className="table table-striped table-bordered">
                <thead class="table-dark">
                  <tr>
                    <th>PID</th>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>RAM kB</th>
                    <th>%RAM</th>
                    <th>KILL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-success">
                    <td>109</td>
                    <td>1000</td>
                    <td>chrome</td>
                    <td>Running</td>
                    <td>234242342</td>
                    <td>1</td>
                    <td>DEAD</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>1000</td>
                    <td>chrome</td>
                    <td>Running</td>
                    <td>234242342</td>
                    <td>1</td>
                    <td>DEAD</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>1000</td>
                    <td>chrome</td>
                    <td>Running</td>
                    <td>234242342</td>
                    <td>1</td>
                    <td>DEAD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}

        {/* <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <div
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              07721 - CHROME
            </div>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <table className="table table-striped table-bordered">
                <thead class="table-dark">
                  <tr>
                    <th>PID</th>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>RAM kB</th>
                    <th>%RAM</th>
                    <th>KILL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-success">
                    <td>109</td>
                    <td>1000</td>
                    <td>chrome</td>
                    <td>Running</td>
                    <td>234242342</td>
                    <td>1</td>
                    <td>DEAD</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>1000</td>
                    <td>chrome</td>
                    <td>Running</td>
                    <td>234242342</td>
                    <td>1</td>
                    <td>DEAD</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>1000</td>
                    <td>chrome</td>
                    <td>Running</td>
                    <td>234242342</td>
                    <td>1</td>
                    <td>DEAD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Acordeon;
