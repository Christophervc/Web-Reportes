import React from 'react'
import styles from '../css_modules/NavBar.module.css';

function NavBar() {
  return (
    <nav className="text-light navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/reportList" style={{ color: "white" }}>World Wide Importers</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/reportList" style={{ color: "white" }}>Reportes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>Contactos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#' style={{ color: "white" }}>Acerca De</a>
            </li>

          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/" style={{ color: "white" }}>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default NavBar