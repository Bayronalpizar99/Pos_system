function Clientes() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Página de Clientes</h1>

      {/* Checkbox por defecto */}
      <div className="form-check">
        
        <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
        <label className="form-check-label" htmlFor="checkDefault">
          Default checkbox
        </label>
      </div>
        
      {/* Checkbox marcado */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkChecked" defaultChecked />
        <label className="form-check-label" htmlFor="checkChecked">
          Checked checkbox
        </label>
      </div>

      {/* Select grande */}
      <select className="form-select form-select-lg mb-3" aria-label="Large select example">
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      {/* Select pequeño */}
      <select className="form-select form-select-sm" aria-label="Small select example">
        <option defaultValue>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        
      </select>
    </div>
  );
}

export default Clientes;