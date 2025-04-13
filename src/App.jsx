import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import Login from './components/login';

import Dashboard from './pages/Dashboard';
import Facturacion from './pages/Facturacion';
import Proformas from './pages/Proformas';
import Ordenes from './pages/Ordenes';
import Inventario from './pages/Inventario';
import Reportes from './pages/Reportes';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';
import Gastos from './pages/Gastos';
import Calendario from './pages/Calendario';
import Soporte from './pages/Soporte';
import Configuracion from './pages/Configuracion';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>

        {/* Ruta de login */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Rutas protegidas */}
        <Route path="*" element={
          isAuthenticated ? (
            <MainLayout />
          ) : (
            <Navigate to="/login" replace />
          )
        } />
      </Routes>
    </Router>
  );
}

// Layout para el contenido protegido (dashboard + sidebar)
const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <div className="d-flex">
        <Navbar />
        <div className="flex-grow-1 p-4" style={{ backgroundColor: 'var(--bs-secondary-bg)', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/facturacion" element={<Facturacion />} />
            <Route path="/proformas" element={<Proformas />} />
            <Route path="/ordenes" element={<Ordenes />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/gastos" element={<Gastos />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/soporte" element={<Soporte />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
