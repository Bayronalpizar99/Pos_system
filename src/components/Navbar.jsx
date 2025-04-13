import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faFileInvoice, 
  faClipboardList, 
  faBoxes, 
  faChartBar, 
  faTags, 
  faUsers, 
  faMoneyBillWave,
  faCalendarAlt,  // Icono para Calendario
  faHeadset,      // Icono para Soporte
  faCog           // Icono para Configuración
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="d-flex flex-column bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
    {/* Logo - movido hacia arriba usando marginTop */}
    <div className="mb-4" style={{ paddingLeft: '70px', marginTop: '-15px' }}>
      <img 
        src="/src/assets/logo.png" 
        alt="logo" 
        className="img-fluid mb-2" 
        style={{ height: '50px' }} 
      />
      <h4 style={{ marginLeft: '-48px' }}>Sistema POS</h4>
    </div>

      {/* Links */}
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/">
            <FontAwesomeIcon icon={faTachometerAlt} className="me-3" fixedWidth />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/facturacion">
            <FontAwesomeIcon icon={faFileInvoice} className="me-3" fixedWidth />
            <span>Facturación</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/proformas">
            <FontAwesomeIcon icon={faClipboardList} className="me-3" fixedWidth />
            <span>Proformas</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/ordenes">
            <FontAwesomeIcon icon={faBoxes} className="me-3" fixedWidth />
            <span>Órdenes</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/inventario">
            <FontAwesomeIcon icon={faChartBar} className="me-3" fixedWidth />
            <span>Inventario</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/productos">
            <FontAwesomeIcon icon={faTags} className="me-3" fixedWidth />
            <span>Productos</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/clientes">
            <FontAwesomeIcon icon={faUsers} className="me-3" fixedWidth />
            <span>Clientes</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/gastos">
            <FontAwesomeIcon icon={faMoneyBillWave} className="me-3" fixedWidth />
            <span>Gastos</span>
          </Link>
        </li>
        
        {/* Nuevas opciones */}
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/calendario">
            <FontAwesomeIcon icon={faCalendarAlt} className="me-3" fixedWidth />
            <span>Calendario</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/soporte">
            <FontAwesomeIcon icon={faHeadset} className="me-3" fixedWidth />
            <span>Soporte</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white d-flex align-items-center" to="/configuracion">
            <FontAwesomeIcon icon={faCog} className="me-3" fixedWidth />
            <span>Configuración</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;