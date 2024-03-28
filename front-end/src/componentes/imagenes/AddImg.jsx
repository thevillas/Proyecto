import toast from 'react-hot-toast';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "../crud/add.css"

function AddImg() {
    
    const image = {
      name:"",
      description:"",
      img:"",
      
    }
  
    const [img, setImg] = useState(image);
    const navigate = useNavigate();
  
    const inputHandler = (e) => {
        const {name, value} = e.target;
        setImg({...img, [name]:value});
    }
  
    const submitForm = async(e) => {
      e.preventDefault();
      console.log(img)

      // Obtén el token de donde lo hayas almacenado
      const token = localStorage.getItem('token');

      await axios.post("http://localhost:4000/img/create", img, {
        headers: {
          // Incluye el token en las cabeceras de la solicitud
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response)=>{
         toast.success(response.data.msg, {position:"top-right"})
         navigate("/Img")
      })
      .catch(error => console.log(error))
      
    }
  
    return (
      <div className='adduser'>
        <Link to={"/img"}>Back</Link>
        <h3>Add new image</h3>
        <form className='addImgForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="name">Nombre de la imagen</label>
                <input type="text" onChange={inputHandler} id="name" name="name" autoComplete='off' placeholder='Nombre de la imagen' />
            </div>
            <div className="inputGroup">
                <label htmlFor="description">Descripción</label>
                <input type="text" onChange={inputHandler} id="description" name="description" autoComplete='off' placeholder='Descripción' />
            </div>
            <div className="inputGroup">
                <label htmlFor="img">URL de la imagen</label>
                <input type="text" onChange={inputHandler} id="img" name="img" autoComplete='off' placeholder='URL de la imagen' />
            </div>
            {/* Agrega aquí más campos si es necesario */}
            <div className="inputGroup">
                <button type="submit">ADD IMAGE</button>
            </div>
        </form>
      </div>
    )
}

export default AddImg;