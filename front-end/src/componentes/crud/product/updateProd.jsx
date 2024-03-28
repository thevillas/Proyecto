import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { isAdminOrmoderador } from '../utils/admin';
import toast from 'react-hot-toast';

function UpdateProduct() {
    const product = {
        name: "",
        category: "",
        price: ""
     }
    
     const {id} = useParams();
     const navigate = useNavigate();
     const [prod, setprod] = useState(product);
    
     const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setprod({...prod, [name]:value});
        console.log(prod);
     }
    
     useEffect(()=>{
        axios.get(`http://localhost:4000/prod/products/${id}`)
        .then((response)=>{
            setprod(response.data)
        })
        .catch((error)=>{
            console.log(error.response);
        })
     },[id])
    
     const submitForm = async(e)=>{
        e.preventDefault();

        if (!isAdminOrmoderador()) {
            toast.error('No tienes permiso para realizar esta acción', {position:"top-right"});
            return;
        }

        await axios.put(`http://localhost:4000/prod/products/${id}`, prod)
        .then((response)=>{
           toast.success(response.data.msg, {position:"top-right"})
           navigate("/prod")
        })
        .catch(error => console.log(error.response))
     }
    
      return (
        <div className='addUser'>
            <Link to={"/user"}>Back</Link>
            <h3>Update user</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">First name</label>
                    <input type="text" value={prod.name} onChange={inputChangeHandler} id="name" name="name" autoComplete='off' placeholder='First name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="category">category</label>
                    <input type="text" value={prod.category} onChange={inputChangeHandler} id="category" name="category" autoComplete='off' placeholder='category' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="price">price</label>
                    <input type="price" value={prod.price} onChange={inputChangeHandler} id="price" name="price" autoComplete='off' placeholder='price' />
                </div>
                <div className="inputGroup">
                    <button type="submit">UPDATE USER</button>
                </div>
            </form>
        </div>
      )
    }

export default UpdateProduct;