import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componentes/Register";
import Welcome from "./componentes/Welcome";
import Login from "./componentes/Login";
import styles from './App.module.css';

const App = () =>{
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/welcome/:id"  element={<Welcome />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
