import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { isAdminOrmoderador } from './utils/admin';
import toast from 'react-hot-toast';

function Update() {
    const users = {
        nombre: "",
        celular: "",
        email: ""
     }
    
     const {id} = useParams();
     const navigate = useNavigate();
     const [user, setUser] = useState(users);
    
     const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value});
        console.log(user);
     }
    
     useEffect(()=>{
        axios.get(`http://localhost:4000/api/getall/${id}`)
        .then((response)=>{
            setUser(response.data)
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

        await axios.put(`http://localhost:4000/api/update/${id}`, user)
        .then((response)=>{
           toast.success(response.data.msg, {position:"top-right"})
           navigate("/user")
        })
        .catch(error => console.log(error.response))
     }
    
      return (
        <div className='addUser'>
            <Link to={"/user"}>Back</Link>
            <h3>Update user</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="nombre">First name</label>
                    <input type="text" value={user.nombre} onChange={inputChangeHandler} id="nombre" name="nombre" autoComplete='off' placeholder='First name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="celular">celular</label>
                    <input type="text" value={user.celular} onChange={inputChangeHandler} id="celular" name="celular" autoComplete='off' placeholder='celular' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <button type="submit">UPDATE USER</button>
                </div>
            </form>
        </div>
      )
    }

export default Update;