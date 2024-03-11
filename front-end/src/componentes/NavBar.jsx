import React from 'react'
import styles from '../css/Styles.module.css'
import logo from '../images/logo.png'


const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <img src={logo} alt="" />
        <div className={styles.list}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/galeria">Galería</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/reservas">Reservas</a></li>
        </ul>
        </div>
        <div className={styles.list2}>
        <ul>
          <li><a href="/login">Iniciar sesión</a></li>
          <li><a href="/register">Registrate</a></li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar

