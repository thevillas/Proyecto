import React from 'react'
import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'
import style from '../css/Styles.module.css'
import ilustracion from '../images/imagen.png'

const Reservas = () => {
  return (
    <>
      <NavBar />
      <div className={style.reserva}> 
        <h1>Qué tipo de reserva quieres?</h1>
        <div className={style.prefieres}>
          <img src={ilustracion} alt="" />
          <div className={style.inputs}>
            <input type="text" id="cajon1" placeholder='Tipo de reserva' />
            <input type="text" id="cajon2" placeholder='Descripción tipo de reserva' />
            <input type="text" id="cajon3" placeholder='Precio' />
          </div>
          <button>Reservar</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Reservas
