import React from 'react'
import Styles from '../css/Styles.module.css'
import Footer from '../componentes/Footer'
import imagen from '../images/imagen.png'
import logo from '../images/logo.png'
import ProductList from './ProductList.jsx'
import Header  from './Header.jsx'
import NavBar from '../componentes/NavBar'

const Productos = () => {
  return (
    <>
    <NavBar />
    <Header />
    <div>
    <div className={Styles.recomendados_productos}>
        <h2>Productos recomendados</h2>
        <ul>
            <li><img src={imagen} alt=""/></li>
            <li><img src={logo} alt=""/></li>
            <li><img src={imagen} alt=""/></li>
            <li><img src={logo} alt=""/></li>
        </ul>
    </div>
    <div className={Styles.product}>
        <h2>Nuestros productos</h2>    
    </div>
    <ProductList />
    </div>
    <Footer />
    </>
  )
}

export default Productos
 