import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componentes/Register";
import Login from "./componentes/Login";
import styles from './css/App.module.css';

import Home from "./screens/Home";
import Galeria from "./screens/Galeria";
import Nosotros from "./screens/Nosotros";
import Productos from "./screens/Productos";
import Reservas from "./screens/Reservas";
import Servicios from "./screens/Servicios";



const App = () => {
  return (
    <BrowserRouter> 
      <div className={styles.NavBar}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        </div>
        
        <div className={styles.container}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

      

    </BrowserRouter>
  );
};

export default App;
