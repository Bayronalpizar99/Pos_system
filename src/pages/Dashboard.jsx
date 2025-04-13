import '@fortawesome/fontawesome-free/css/all.min.css';

function Dashboard() {
  return (
    <div className="container mt-4">
      {/* Texto centrado */}
      <h1
        className="mb-4"
        style={{ marginLeft: '110px' }}
      >
        Bienvenido al Sistema POS de Distribuidora Vargas
      </h1>
      
      {/* Contenedor adicional para las tarjetas */}
      <div style={{ marginTop: '60px' }}>
        <div className="row">
          {/* Tarjeta Primary - Clientes */}
          <div className="col-md-4">
            <div className="card mb-3 text-white"
              style={{ maxWidth: '18rem', backgroundColor: 'var(--bs-dark)' }}>
              <div className="card-header">
                <i className="fas fa-users fa-2x"></i>
              </div>
              <div className="card-body">
                <p className="card-text text-secondary">
                  Total clientes:
                </p>
                <h5 className="card-title">Primary card title</h5>
              </div>
            </div>
          </div>

          {/* Tarjeta Secondary - Ingresos */}
          <div className="col-md-4">
            <div className="card mb-3 text-white"
              style={{ maxWidth: '18rem', backgroundColor: 'var(--bs-dark)' }}>
              <div className="card-header">
                <i className="fas fa-money-bill-wave fa-2x"></i>
              </div>
              <div className="card-body">
                <p className="card-text text-secondary">
                  Ingresos Totales:
                </p>
                <h5 className="card-title">Secondary card title</h5>
              </div>
            </div>
          </div>

          {/* Tarjeta Success - Gastos */}
          <div className="col-md-4">
            <div className="card mb-3 text-white"
              style={{ maxWidth: '18rem', backgroundColor: 'var(--bs-dark)' }}>
              <div className="card-header">
                <i className="fas fa-receipt fa-2x"></i>
              </div>
              <div className="card-body">
                <p className="card-text text-secondary">
                  Gastos totales:
                </p>
                <h5 className="card-title">Success card title</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Tarjeta Danger - Productos */}
          <div className="col-md-4">
            <div className="card mb-3 text-white"
              style={{ maxWidth: '18rem', backgroundColor: 'var(--bs-dark)' }}>
              <div className="card-header">
                <i className="fas fa-box-open fa-2x"></i>
              </div>
              <div className="card-body">
                <p className="card-text text-secondary">
                  Total productos:
                </p>
                <h5 className="card-title">Danger card title</h5>
              </div>
            </div>
          </div>

          {/* Tarjeta Warning - Venta Mayor */}
          <div className="col-md-4">
            <div className="card mb-3 text-white"
              style={{ maxWidth: '18rem', backgroundColor: 'var(--bs-dark)' }}>
              <div className="card-header">
                <i className="fas fa-chart-line fa-2x"></i>
              </div>
              <div className="card-body">
                <p className="card-text text-secondary">
                  Venta mayor:
                </p>
                <h5 className="card-title">Warning card title</h5>
              </div>
            </div>
          </div>

          {/* Tarjeta Info - Venta Menor */}
          <div className="col-md-4">
            <div className="card mb-3 text-white"
              style={{ maxWidth: '18rem', backgroundColor: 'var(--bs-dark)' }}>
              <div className="card-header">
                <i className="fas fa-chart-bar fa-2x"></i>
              </div>
              <div className="card-body">
                <p className="card-text text-secondary">
                  Venta menor:
                </p>
                <h5 className="card-title">Info card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;