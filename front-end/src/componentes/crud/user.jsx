import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "../crud/user.css";
import { Link } from 'react-router-dom'
import { isAdminOrmoderador } from './utils/admin.js';

function User() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
  
      const fetchData = async()=>{
          try {
              const response = await axios.get("http://localhost:4000/api/getall/");
              setUsers(response.data);
          } catch (error) {
              console.error('Hubo un error al obtener los datos:', error);
          }
      }
  
      fetchData();
  
    },[])
  
    const deleteUser = async(userId) =>{
        if (!isAdminOrmoderador()) {
            toast.error('No tienes permiso para realizar esta acción.', {position: 'top-right'});
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:4000/api/delete/${userId}`)
            setUsers((prevUser)=> prevUser.filter((user)=> user._id !== userId))
            toast.success(response.data.msg, {position: 'top-right'})
        } catch (error) {
            console.error('Hubo un error al eliminar el usuario:', error);
        }
    }
  
    return (
      <div className='userTable'>
          {isAdminOrmoderador() && <Link to={"/add"} className='addButton'>Add User</Link>}
          <table border={1} cellPadding={10} cellSpacing={0}>
              <thead>
                  <tr>
                      <th>id</th>
                      <th>nombre de usuario</th>
                      <th>celular</th>
                      <th>correo</th>
                      <th>acciones</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map((user, index)=>{
                          return(
                          <tr key={user._id}>
                              <td>{index + 1}</td>
                              <td>{user.nombre}</td>
                              <td>{user.celular}</td>
                              <td>{user.correo}</td>
                              <td className='actionButtons'>
                                  {isAdminOrmoderador() && <button onClick={()=> deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>}
                                  {isAdminOrmoderador() && <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>}
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

export default User;