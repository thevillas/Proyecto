import React from 'react'
import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'
import styles from '../css/Styles.module.css'
import logo from '../images/logo.png'
import imagen from '../images/imagen.png'

const Galeria = () => {
  return (
    <>
      <NavBar />
      <div className={styles.carrusel}>
        <h2>Nuestros productos</h2>
        <ul>
          <li><img src={logo} alt="" /></li>
          <li><img src={imagen} alt="" /></li>
          <li><img src={logo} alt="" /></li>
          <li><img src={logo} alt="" /></li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Galeria
