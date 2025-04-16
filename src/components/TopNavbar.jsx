import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import { Link } from 'react-router-dom';
import flagCR from '../assets/flag-cr.png'; // Importa la imagen de la bandera

function TopNavbar() {
  // 1. Estado para almacenar la fecha y hora actual
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // 2. useEffect para actualizar la hora cada segundo
  useEffect(() => {
    // Establece un intervalo que se ejecuta cada 1000ms (1 segundo)
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date()); // Actualiza el estado con la nueva fecha/hora
    }, 1000);

    // 3. Función de limpieza: se ejecuta cuando el componente se desmonta
    // Esto es importante para evitar fugas de memoria al limpiar el intervalo
    return () => {
      clearInterval(timerId);
    };
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez (al montar)

  // Opciones para formatear la fecha y hora en español para Costa Rica
  const dateOptions = { /*weekday: 'long',*/ year: 'numeric', month: 'numeric', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

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
          {/* 4. Mostrar la fecha y hora - Usamos navbar-text y me-auto para empujar los otros elementos a la derecha */}
          <span className="navbar-text me-auto">
            {currentDateTime.toLocaleDateString('es-CR', dateOptions)} | {currentDateTime.toLocaleTimeString('es-CR', timeOptions)}
          </span>

          {/* Elementos existentes alineados a la derecha (ms-auto) */}
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