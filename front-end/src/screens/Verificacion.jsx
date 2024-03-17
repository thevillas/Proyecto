import React, { useState, useEffect } from 'react';
import Login from '../componentes/Login'

const VerificacionBaseDatos = () => {
    const [usuarioRegistrado, setUsuarioRegistrado] = useState(false);
    const [nombreUsuario, setNombreUsuario] = useState('');

    useEffect(() => {
      // Realizar la verificación en la base de datos al montar el componente o cuando nombreUsuario cambia
      verificarUsuarioRegistrado();
    }, [nombreUsuario]);

    const verificarUsuarioRegistrado = () => {
      // Aquí puedes realizar la lógica para verificar en la base de datos
      // Puedes utilizar fetch u otra librería para hacer la solicitud al servidor
      // Por ejemplo, utilizando fetch:
      fetch('URL_del_servidor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreUsuario }),
      })
      .then(response => response.json())
      .then(data => {
        setUsuarioRegistrado(data.registrado);
      })
      .catch(error => {
        console.error('Error al verificar usuario:', error);
      });
    };

    const handleBotonClick = () => {
      // Lógica para actualizar el estado de nombreUsuario cuando se hace clic en el botón
      // Por ejemplo, obtener el valor del input y actualizar el estado
      // setNombreUsuario(valorDelInput);
    };

    return (
      <div>
        <Login />
      </div>
    );
  };

  export default VerificacionBaseDatos;