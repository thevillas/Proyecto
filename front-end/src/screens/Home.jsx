import React from 'react'
import Styles from '../css/Styles.module.css'
import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import styles from '../css/Styles.module.css'
import logo from '../images/logo.png'
import imagen from '../images/imagen.png'


const Home = () => {
  return (
    <>
    <div className={Styles.home}>
    <NavBar />
    <div className={Styles.superpuesto}>
            <h1>Bienvenido a la Barbería Blessing</h1>
            <p>En nuestras barberías, buscamos reflejar lo que tú quieres ser hoy: un Hombre de Grandeza. Somos un espacio contemporáneo masculino que comprende las inquietudes del hombre actual y ofrece una imagen actualizada y estilos que reflejen su personalidad. Nuestro equipo de barberos cuenta con una formación profesional de alta calidad para brindarte los mejores servicios.



              En nuestros espacios, cada cliente vive una experiencia única de bienestar, convirtiendo su visita en un momento especial que todo hombre merece dedicarse.



              Utilizamos las técnicas y tratamientos más innovadores para realzar tu estilo personal con un trato exquisito y atención cuidada.



              Profesionalidad, elegancia, cortesía y gratitud son nuestras principales virtudes. ¡Ven y disfruta de una experiencia de Grandeza en Barberías Rand! 😊</p>
          </div>
      </div>
      <div className={styles.carrusel_home}>
        <h2>Cosas que te pueden interesar</h2>
        <ul>
          <li><img src={logo} alt="" /></li>
          <li><img src={imagen} alt="" /></li>
          <li><img src={logo} alt="" /></li>
          <li><img src={imagen} alt="" /></li>
        </ul>
      </div>
      <Footer />
      </>
  );
};

export default Home
