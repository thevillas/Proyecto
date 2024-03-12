import React from 'react'
import NavBar from '../componentes/NavBar'
import Styles from '../css/Styles.module.css'
import Image from '../images/imagen.png'
import ima from '../images/imagen.png'
import image from '../images/imagen.png'
import fot from '../images/imagen.png'
import Footer from '../componentes/Footer'

const Servicios = () => {
  return (
    <>
      <NavBar />
      <div className={Styles.servece}>
        <h1>Nuestros servicios</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, nesciunt nam perferendis ab possimus, molestias deserunt eaque quas assumenda, soluta quibusdam quasi. Minima explicabo magnam, quae voluptatibus sint ipsa aliquam?</p>
      </div>

      <div className={Styles.izquierda}>
        <div className={Styles.cortepelo}>
          <h3>Corte pelo:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium. Facilis perferendis minus, aut sequi vero ipsam, excepturi veniam iusto suscipit, explicabo eligendi fuga distinctio similique libero voluptatibus doloremque rerum.</p>
          <img src={Image} alt="" />
        </div>
        </div>

        <div className={Styles.derecha}>
        <div className={Styles.cortebarba}>
          <h3>Corte barba:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium. Facilis perferendis minus, aut sequi vero ipsam, excepturi veniam iusto suscipit, explicabo eligendi fuga distinctio similique libero voluptatibus doloremque rerum.</p>
          <img src={ima} alt="" />
        </div>
        </div>

        <div className={Styles.izquierda}>
        <div className={Styles.cortebarbaypelo}>
          <h3>Corte barba y pelo:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium. Facilis perferendis minus, aut sequi vero ipsam, excepturi veniam iusto suscipit, explicabo eligendi fuga distinctio similique libero voluptatibus doloremque rerum.</p>
          <img src={image} alt="" />
        </div>
        </div>

        <div className={Styles.derecha}>
        <div className={Styles.cortenormal}>
          <h3>Corte normal:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium. Facilis perferendis minus, aut sequi vero ipsam, excepturi veniam iusto suscipit, explicabo eligendi fuga distinctio similique libero voluptatibus doloremque rerum.</p>
          <img src={fot} alt="" />
        </div>
        </div>
      <Footer />
    </>
  );
};

export default Servicios
