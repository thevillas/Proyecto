import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
// import { isAdminOrmoderador } from '../utils/admin';
import toast from 'react-hot-toast';

function UpdateProduct() {
    const product = {
        name: "",
        category: "",
        price: ""
     }
    
     const {id} = useParams();
     const navigate = useNavigate();
     const [prod, setProd] = useState(product);
    
     const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setProd({...prod, [name]:value});
        console.log(prod);
     }
    
     useEffect(()=>{
        axios.get(`http://localhost:4000/prod/products/${id}`)
        .then((response)=>{
            setProd(response.data)
        })
        .catch((error)=>{
            console.log(error.response);
        })
     },[id])
    
     const submitForm = async(e) =>{
        e.preventDefault();
        console.log(prod)
  
        // Obtén el token de donde lo hayas almacenado
        const token = localStorage.getItem('token');
  
        await axios.put("http://localhost:4000/prod/products/${id}", prod, {
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
            <h3>Update product</h3>
            <form className='addProdForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">nombre del producto</label>
                    <input type="text" value={prod.name} onChange={inputChangeHandler} id="name" name="name" autoComplete='off' placeholder='name del producto' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="category">categoria</label>
                    <input type="text" value={prod.category} onChange={inputChangeHandler} id="category" name="category" autoComplete='off' placeholder='Descripción' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="price">precio</label>
                    <input type="number" value={prod.price} onChange={inputChangeHandler} id="price" name="price" autoComplete='off' placeholder='price' />
                </div>
                <div className="inputGroup">
                    <button type="submit">UPDATE PRODUCT</button>
                </div>
            </form>
        </div>
      )
    }

export default UpdateProduct;