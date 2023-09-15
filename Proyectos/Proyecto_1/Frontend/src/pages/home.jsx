import { NavLink } from 'react-router-dom';
import '../css/home.css'

function Home() {

  const repositorio = () => {
    window.open('https://github.com/DanielDubonDR/SO1_2S2023_201901772/tree/main/Proyectos/Proyecto_1', '_blank');
  }

  return (
    <>
      <div className="bg-general">
          <br/><br/>
          <h1 className="lobster text-white title-home pt-5">Plataforma de Monitoreo en GCP</h1>

          <div className="container">
            <ul className="nav nav-pills justify-content-center mt-5 mb-4  roboto-mono">
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/" exact>
                  <a className="nav-link active" aria-current="page">Inicio</a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/monitor">
                  <a className="nav-link">Monitor Tiempo Real</a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-under"} as="a" to="/rendimiento">
                  <a className="nav-link">Rendimiento</a>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="container">
              <button onClick={repositorio} type="button" className="btn btn-dark mb-5">
                <svg className='me-1' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"/><ellipse cx="14.5" cy="9" rx="1.5" ry="1"/></g></mask><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"/><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"/></path></g><rect width="8" height="4" x="8" y="11" fill="white" mask="url(#lineMdGithubLoop0)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"/></rect></svg>
                    Repositorio
                </button>
          </div>

          <div className="contendedor pt-4">
            <p className='text-white poppins m-3'>SO1 Modulos de Kernel</p>
            <p className='text-white oswald fs-3 m-4'>Desarrollador:</p>
            <div className="row text-center">
              <div className="col-7">
                <p className='text-white poppins'>Daniel Reginaldo Dubón Rodríguez</p>
              </div>
              <div className="col-5">
                <p className='text-white poppins'>201901772</p>
              </div>
              <br/><br/>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;