import React from 'react'
import NavBar from '../componentes/NavBar'
import Styles from '../css/Styles.module.css'
import corte from '../images/corte.png'
import barba from '../images/barba.png'
import cejas from '../images/cejas.png'
import barba_corte from '../images/barba_corte.png'
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
          <img src={corte} alt="" />
        </div>
        <div className={Styles.cortebarbaypelo}>
          <h3>Corte barba y pelo:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium. Facilis perferendis minus, aut sequi vero ipsam, excepturi veniam iusto suscipit, explicabo eligendi fuga distinctio similique libero voluptatibus doloremque rerum.</p>
          <img src={barba_corte} alt="" />
        </div>
        </div>

        <div className={Styles.derecha}>
        <div className={Styles.cortebarba}>
          <h3>Corte barba:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium. Facilis perferendis minus, aut sequi vero ipsam, excepturi veniam iusto suscipit, explicabo eligendi fuga distinctio similique libero voluptatibus doloremque rerum.</p>
          <img src={barba} alt="" />
        </div>
        <div className={Styles.cortenormal}>
          <h3>Corte cejas:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, praesentium. Facilis perferendis minus, aut sequi vero ipsam, excepturi veniam iusto suscipit, explicabo eligendi fuga distinctio similique libero voluptatibus doloremque rerum.</p>
          <img src={cejas} alt="" />
        </div>
        </div>
      <Footer />
    </>
  );
};

export default Servicios
