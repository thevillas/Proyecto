import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componentes/Register";
import Login from "./componentes/Login";
<<<<<<< HEAD
import styles from './App.module.css';
import Add from "./componentes/adduser/Add";
import Edit from "./componentes/updateuser/Edit";
import User from "./componentes/getuser/User";
=======
import styles from './css/App.module.css';
>>>>>>> meco/front

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
<<<<<<< HEAD
          <Route path="/" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/welcome/:id"  element={<Welcome />} /> 
          <Route path="/add"  element={<Add />} /> 
          <Route path="/edit/:id"  element={<Edit/>} /> 
          <Route path="/user"  element={<User />} /> 
=======
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/servicios" element={<Servicios />} />
>>>>>>> meco/front
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
