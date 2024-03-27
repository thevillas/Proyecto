import toast from 'react-hot-toast';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "../product/userProd.css";

function AddProd() {
    
    const product = {
      name:"",
      category:"",
      price:"",
      // Agrega aquí más campos si es necesario
    }
  
    const [prod, setProd] = useState(product);
    const navigate = useNavigate();
  
    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setProd({...prod, [name]:value});
    }
  
    const submitForm = async(e) =>{
      e.preventDefault();
      console.log(prod)

      // Obtén el token de donde lo hayas almacenado
      const token = localStorage.getItem('token');

      await axios.post("http://localhost:4000/prod/createprod", prod, {
        headers: {
          // Incluye el token en las cabeceras de la solicitud
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response)=>{
         toast.success(response.data.msg, {position:"top-right"})
         navigate("/addProd")
      })
      .catch(error => console.log(error))
    }
  
    return (
      <div className='addProd'>
        <Link to={"/prod"}>Back</Link>
        <h3>Add new product</h3>
        <form className='addProdForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="name">nombre del producto</label>
                <input type="text" onChange={inputHandler} id="name" name="name" autoComplete='off' placeholder='nombre del producto' />
            </div>
            <div className="inputGroup">
                <label htmlFor="category">categoria</label>
                <input type="text" onChange={inputHandler} id="category" name="category" autoComplete='off' placeholder='categoria' />
            </div>
            <div className="inputGroup">
                <label htmlFor="price">precio</label>
                <input type="number" onChange={inputHandler} id="price" name="price" autoComplete='off' placeholder='precio' />
            </div>
            {/* Agrega aquí más campos si es necesario */}
            <div className="inputGroup">
                <button type="submit">ADD PRODUCT</button>
            </div>
        </form>
      </div>
    )
}

export default AddProd;