import { killTask } from "../services/api";
import toast, { Toaster } from "react-hot-toast";

function Acordeon({ data:procesos, totalMemory, currentVM }) {

  const killCurrentTask = (pid) => {
    killTask(currentVM, pid)
      .then((res) => {
        if(res.status){
          notify("Proceso eliminado correctamente");
        } else {
          notify("Error al eliminar el proceso");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const notify = (txt) => {
    toast.success(txt);
  };

  return (
    <>
      <Toaster className="mt-5" position="bottom-right" />
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
                    <td className="text-center">
                      <button class="btn btn-danger py-0 px-2" onClick={() => killCurrentTask(proceso.pid)}>
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
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
                        <td className="text-center">
                          <button class="btn btn-danger py-0 px-2" onClick={() => killCurrentTask(child.pid)}>
                            <i className="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default Acordeon;
