import React from 'react'
import styles from '../css_modules/Header.module.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className={styles.header}>
      <p>LISTA DE REPORTES</p>
      <Link to={"/reportList"}>
        Lista de Reportes
      </Link>
      <Link to={"/register"}>
        Regístrate
      </Link>
      <Link to={"/auth"}>
        Cerrar Sesión
      </Link>
    </header>
  )
}

export default Header