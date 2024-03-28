import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "../crud/add.css"
import { Link } from 'react-router-dom'
import { isAdminOrmoderador } from '../crud/utils/admin';

function GetImg() {
  const [images, setImages] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get("http://localhost:4000/img/getall", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setImages(response.data);
        } catch (error) {
            console.error('Hubo un error al obtener los datos:', error);
        }
    }

    fetchData();

  },[])

  const deleteImage = async(imageId) =>{
      if (!isAdminOrmoderador()) {
          toast.error('No tienes permiso para realizar esta acción.', {position: 'top-right'});
          return;
      }

      try {
          const token = localStorage.getItem('token');
          const response = await axios.delete(`http://localhost:4000/img/delete/${imageId}`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          setImages((prevImage)=> prevImage.filter((image)=> image._id !== imageId))
          toast.success(response.data.msg, {position: 'top-right'})
      } catch (error) {
          console.error('Hubo un error al eliminar la imagen:', error);
      }
  }

  return (
    <div className='productTable'>
        {isAdminOrmoderador() && <Link to={"/addImg"} className='addButton'>Add Image</Link>}
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre de la imagen</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    images.map((image, index)=>{
                        return(
                        <tr key={image._id}>
                            <td>{index + 1}</td>
                            <td>{image.name}</td>
                            <td>{image.description}</td>
                            <td><img src={image.img} alt={image.name} /></td>
                            <td className='actionButtons'>
                                {isAdminOrmoderador() && <button onClick={()=> deleteImage(image._id)}><i className="fa-solid fa-trash"></i></button>}
                                {isAdminOrmoderador() && <Link to={`/img/`+image._id}><i className="fa-solid fa-pen-to-square"></i></Link>}
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
      </table>
  </div>
  )
}

export default GetImg;