import { Link } from 'react-router-dom';
import flagCR from '../assets/flag-cr.png'; // Importa la imagen de la bandera

function TopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavbar"
          aria-controls="topNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topNavbar">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/perfil">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/configuracion">Configuración</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Cerrar sesión</Link>
            </li>
            {/* Bandera de Costa Rica */}
            <li className="nav-item">
              <img
                src={flagCR}
                alt="Bandera de Costa Rica"
                style={{ width: '30px', height: '20px', marginLeft: '10px' }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;