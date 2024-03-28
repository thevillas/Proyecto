import toast from 'react-hot-toast';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function UpdateImg() {
    
    const [img, setImg] = useState({
      name:"",
      description:"",
      img:"",
      // Agrega aquí más campos si es necesario
    });

    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchImage = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:4000/img/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setImg(response.data);
        }
        fetchImage();
    }, [id]);

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setImg({...img, [name]:value});
    }
  
    const submitForm = async(e) => {
      e.preventDefault();

      // Obtén el token de donde lo hayas almacenado
      const token = localStorage.getItem('token');

      await axios.put(`http://localhost:4000/img/${id}`, img, {
        headers: {
          // Incluye el token en las cabeceras de la solicitud
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response)=>{
         toast.success(response.data.msg, {position:"top-right"})
         navigate("/img")
      })
      .catch(error => console.log(error))
      
    }
  
    return (
        <div className='addUser'>
            <Link to={"/user"}>Back</Link>
            <h3>Update user</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">First name</label>
                    <input type="text" value={img.img} onChange={inputHandler} id="img" name="img" autoComplete='off' placeholder='inseta la url de la imagen' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="category">category</label>
                    <input type="text" value={img.name} onChange={inputHandler} id="name" name="name" autoComplete='off' placeholder='nombre' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="price">price</label>
                    <input type="text" value={img.description} onChange={inputHandler} id="description" name="description" autoComplete='off' placeholder='descripcion' />
                </div>
                <div className="inputGroup">
                    <button type="submit">UPDATE USER</button>
                </div>
            </form>
        </div>
      )
    }


export default UpdateImg;