import React from 'react'
import NavBar from '../componentes/NavBar'
import Footer from '../componentes/Footer'
import style from '../css/Styles.module.css'
import imagen from '../images/imagen.png'

const Nosotros = () => {
  return (
    <>    
      <div>
        <div className={style.barra}>
        <NavBar />
          <div className={style.superpuesto}>
            <h1>Misión</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi earum harum neque voluptatem quam, eum officiis perspiciatis! Recusandae fugiat odit ducimus officiis ad praesentium quas culpa, nihil sit libero.</p>
            <h1>Visión</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi earum harum neque voluptatem quam, eum officiis perspiciatis! Recusandae fugiat odit ducimus officiis ad praesentium quas culpa, nihil sit libero.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Nosotros
