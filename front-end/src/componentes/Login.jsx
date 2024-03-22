import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import estilos from '../css/App.module.css';
import styles from "../css/Styles.module.css";

const Login = () => {
  const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { correo, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/log/login", Usuario, {
          withCredentials: true,
        })
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            setLoading(false);
  
            navigate(`/`);
  
          }, 1500);
  
          // Almacenar el token en el almacenamiento local
          const cookie = document.cookie.split('; ').find(row => row.startsWith('token'));
          if (cookie) {
            const token = cookie.split('=')[1];
            localStorage.setItem('token', token);
          } else {
            console.error('No se encontró la cookie del token');
          }
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Su correo u contraseña incorrecta");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });
      setInputs({ correo: "", contraseña: "" });
      setLoading(false);
    }
  };

  return (
    <>
    <div className={estilos.login}>
      <div className={styles.formContainer}>
        <h3>Bienvenido a la pagina</h3>
        <h2>De Inicio de Sesión!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="correo">Correo</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={correo}
                name="correo"
                id="correo"
                type="email"
                required
                placeholder="correo..."
                autoComplete="off"
              />
            </div>
            
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="contraseña">Contraseña</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={contraseña}
                name="contraseña"
                id="contraseña"
                type="password"
                required
                placeholder="Contraseña..."
                autoComplete="off"
              />
            </div>
          
          </div>
          <button type="submit">
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
          <p>
            Aún no tienes cuenta?{" "}
            <b onClick={() => navigate("/register")}>Registrate</b>
          </p>
        </form>
      </div>

      {mensaje && <div className={styles.toast}>{mensaje}</div>}
      </div>
    </>
  );
};

export default Login;