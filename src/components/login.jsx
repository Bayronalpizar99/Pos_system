import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [idUsuario, setIdUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: idUsuario,
          password,
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        alert(`Bienvenido al sistema, ${data.usuario}`);
        setIsAuthenticated(true);
        navigate('/');
      } else {
        const errorData = await response.json();
        alert(errorData.detail);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al conectar con el servidor, datos inválidos.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark text-white">
      <div className="bg-white text-dark p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">¡Bienvenido!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="idUsuario" className="form-label">Cédula</label>
            <input
              type="text"
              className="form-control"
              id="idUsuario"
              placeholder="Ingrese su cédula"
              value={idUsuario}
              onChange={(e) => setIdUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
