import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componentes/Register";
import Login from "./componentes/Login";
import styles from './css/App.module.css';

import Add from "./componentes/crud/add";
import User from "./componentes/crud/user";
import Update from "./componentes/crud/update";
import GetProd from "./componentes/crud/product/getProd";
import AddProd from "./componentes/crud/product/addProd";
import UpdateProduct from "./componentes/crud/product/updateProd";

import GetImg from "./componentes/imagenes/GetImg";
import AddImg from "./componentes/imagenes/AddImg";
import UpdateImg from "./componentes/imagenes/updateImg";




import Home from "./screens/Home";
import Galeria from "./screens/Galeria";
import Nosotros from "./screens/Nosotros";
import Productos from "./screens/Productos";
import Reservas from "./screens/Reservas";
import Servicios from "./screens/Servicios";


//crud

const App = () => {
  return (
    <BrowserRouter> 
      <div className={styles.NavBar}>
        <Routes>
        <Route path="/add" element={<Add/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
        
        <Route path="/prod" element={<GetProd/>}/>
        <Route path="/addProd" element={<AddProd/>}/>
        <Route path="/prod/:id" element={<UpdateProduct/>}/>
        
        <Route path="/img" element={<GetImg/>}/>
        <Route path="/addimg" element={<AddImg/>}/>
        <Route path="/img/:id" element={<UpdateImg/>}/>


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
