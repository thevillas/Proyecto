import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import estilos from '../css/App.module.css';
import styles from "../css/Styles.module.css";

const Register = () => {
  const [inputs, setInputs] = useState({

    correo: "",
    nombre: "",

    email: "",
    nombre: "", 

    contraseña: "",
    celular: "",
  });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const { nombre, contraseña, correo , celular } = inputs;




  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (nombre !== "" && contraseña !== "" && correo !== "" && celular !== "" ) {

  

      const Usuario = {
        nombre,
        correo,
        contraseña,
        celular,
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/register", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);

          setInputs({ nombre: "", contraseña: "", correo: "" , celular: "" });

          setInputs({ nombre: "", contraseña: "", email: "", celular: "" });

          setTimeout(() => {
            setMensaje("");
            navigate("/login");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Hubo un error");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });

      setLoading(false);
    }
  };


  return (
    <>
    <div className={estilos.register}>
      <div className={styles.formContainer}>
        <h3>Bienvenido a la pagina</h3>
        <h2>De Registro!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="nombre">Nombre</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={nombre}
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Nombre..."
                autoComplete="off"
              />
            </div>
         
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={correo}
                name="correo"
                id="correo"
                type="correo"
                placeholder="Correo..."
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
                placeholder="Contraseña..."
                autoComplete="off"
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="celular">Celular</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={celular}
                name="celular"
                id="celular"

                type="text"

                

                placeholder="Celular..."
                autoComplete="off"
              />
            </div>
            
          </div>

          <button type="submit">
            {loading ? "Cargando..." : "Registrarme"}
          </button>
          <p>
            Ya tienes una cuenta?{" "}
            <b onClick={() => navigate("/login")}>Inicia Sesión!</b>
          </p>
        </form>
      </div>
      {mensaje && <div className={styles.toast}>{mensaje}</div>}
      </div>
    </>
  );
};

export default Register