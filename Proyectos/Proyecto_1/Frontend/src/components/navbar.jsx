import { NavLink } from "react-router-dom";
import "../css/navbar.css"

function Navbar() {
  return (
    <>
      <nav className="title text-center p-2 text-white">
        <div className="container-fluid row align-items-start">
          <div className="col">
            <div className="nav justify-content-start lobster fs-3">
              SO1
            </div>
          </div>
          <div className="col">
            <h1 className="justify-content-center fs-2  lobster">Modulos de Kernel</h1>
          </div>
          <div className="col">
            <ul className="nav justify-content-center oswald">
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/">
                  <a className="nav-link text-white active" aria-current="page">
                    Inicio
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/monitor">
                  <a className="nav-link text-white">
                    Monitoreo Tiempo Real
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/rendimiento">
                  <a className="nav-link text-white">
                    Historial
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/rendimiento2">
                  <a className="nav-link text-white">
                    Rendimiento
                  </a>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
