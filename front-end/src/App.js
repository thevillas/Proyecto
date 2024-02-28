import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componentes/Register";
import Welcome from "./componentes/Welcome";
import Login from "./componentes/Login";
import styles from './App.module.css';
import Add from "./componentes/adduser/Add";
import Edit from "./componentes/updateuser/Edit";
import User from "./componentes/getuser/User";

const App = () =>{
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/welcome/:id"  element={<Welcome />} /> 
          <Route path="/add"  element={<Add />} /> 
          <Route path="/edit/:id"  element={<Edit/>} /> 
          <Route path="/user"  element={<User />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
