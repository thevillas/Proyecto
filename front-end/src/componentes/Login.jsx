import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Styles.module.css";

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", contraseña: "" });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { email, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && contraseña !== "") {
      const Usuario = {
        email,
        contraseña,
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/login", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setTimeout(() => {
            setMensaje("");
            setLoading(false);
            navigate(`/welcome/${data?.usuario.id}`);
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Su Email u contraseña incorrecta");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });
      setInputs({ email: "", contraseña: "" });
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <h3>Bienvenido a la pagina</h3>
        <h2>De Inicio de Sesión!</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={styles.inputContainer}>
            <div className={styles.left}>
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => HandleChange(e)}
                value={email}
                name="email"
                id="email"
                type="email"
                placeholder="Email..."
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
          <button type="submit">
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
          <p>
            Aún no tienes cuenta?{" "}
            <b onClick={() => navigate("/")}>Registrate</b>
          </p>
        </form>
      </div>

      {mensaje && <div className={styles.toast}>{mensaje}</div>}
    </>
  );
};

export default Login;