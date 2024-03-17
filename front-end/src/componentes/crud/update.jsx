import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
// import "../adduser/add.css";
import toast from 'react-hot-toast';

function Update() {
    const users = {
        fname: "",
        celular: "",
        email: ""
     }
    
     const {id} = useParams();
     const navigate = useNavigate();
     const [user, setUser] = useState(users);
    
     const inputChangeHandler = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
        console.log(user);
     }
    
     useEffect(()=>{
        axios.get(`http://localhost:4000/api/getone/${id}`)
        .then((response)=>{
            setUser(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
     },[id])
    
    
     const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:4000/api/update/${id}`, user)
        .then((response)=>{
           toast.success(response.data.msg, {position:"top-right"})
           navigate("/user")
        })
        .catch(error => console.log(error))
     }
    
      return (
        <div className='addUser'>
            <Link to={"/user"}>Back</Link>
            <h3>Update user</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">First name</label>
                    <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete='off' placeholder='First name' />
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