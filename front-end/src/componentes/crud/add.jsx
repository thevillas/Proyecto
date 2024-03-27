import toast from 'react-hot-toast';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "./product/addProd.css"

function Add() {
    
    const users = {
      nombre:"",
      celular:"",
      correo:"",
      contraseña:""
    }
  
    const [user, setUser] = useState(users);
    const navigate = useNavigate();
  
    const inputHandler = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }
  
    const submitForm = async(e) =>{
      e.preventDefault();
      console.log(user)
      await axios.post("http://localhost:4000/api/create", user)
      .then((response)=>{
         toast.success(response.data.msg, {position:"top-right"})
         navigate("/user")
      })
      .catch(error => console.log(error))
    }
  
    return (
      <div className='addUser'>
        <Link to={"/user"}>Back</Link>
        <h3>Add new user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" onChange={inputHandler} id="fname" name="nombre" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="celular">celular</label>
                <input type="text" onChange={inputHandler} id="celular" name="celular" autoComplete='off' placeholder='celular' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={inputHandler} id="email" name="correo" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={inputHandler} id="password" name="contraseña" autoComplete='off' placeholder='password' />
            </div>
            <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
      </div>
    )
}

export default Add;