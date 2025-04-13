import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

// Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa el JS de Bootstrap (opcional, solo si usás modales, tooltips, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
