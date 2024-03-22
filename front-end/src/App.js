import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componentes/Register";
import Login from "./componentes/Login";
import styles from './css/App.module.css';

import Add from "./componentes/crud/add";
import User from "./componentes/crud/user";
import Update from "./componentes/crud/update";
import getProd from "./componentes/crud/product/getProd";




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
        //crud
        <Route path="/add" element={<Add/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
        <Route path="/product/" element={<getProd/>}/>


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
