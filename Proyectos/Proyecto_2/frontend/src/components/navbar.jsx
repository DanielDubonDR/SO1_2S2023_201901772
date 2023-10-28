import { NavLink } from "react-router-dom";
import "../css/navbar.css"

function Navbar() {
  return (
    <>
      <nav className="title text-center p-2 text-white">
        <div className="container-fluid row align-items-start d-flex align-items-center">
          <div className="col">
            <div className="nav justify-content-start lobster fs-3">
              SO1
            </div>
          </div>
          <div className="col">
            <h1 className="justify-content-center fs-1  lobster">Proyecto 2</h1>
          </div>
          <div className="col fs-5">
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
                    Estadísticas
                  </a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/rendimiento">
                  <a className="nav-link text-white">
                    Monitor Tiempo Real
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
