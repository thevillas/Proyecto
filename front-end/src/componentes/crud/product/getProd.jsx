import React, { useEffect, useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
import "./addProd.css";
import { Link } from 'react-router-dom'
import i

function GetProd() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{


    const fetchData = async()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get("http://localhost:4000/api/prod/products", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setProducts(response.data);
        } catch (error) {
            console.error('Hubo un error al obtener los datos:', error);
        }
    }

    fetchData();

  },[])

  const deleteProduct = async(productId) =>{
      if (!isAdminOrmoderador()) {
          toast.error('No tienes permiso para realizar esta acción.', {position: 'top-right'});
          return;
      }

      try {
          const token = localStorage.getItem('token');
          const response = await axios.delete(`http://localhost:4000/api/prod/products/${productId}`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          setProducts((prevProduct)=> prevProduct.filter((product)=> product._id !== productId))
          toast.success(response.data.msg, {position: 'top-right'})
      } catch (error) {
          console.error('Hubo un error al eliminar el producto:', error);
      }
  }

  return (
    <div className='productTable'>
        {isAdminOrmoderador() && <Link to={"/addproduct"} className='addButton'>Add Product</Link>}
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre del producto</th>
                    <th>categoría</th>
                    <th>precio</th>
                    <th>acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index)=>{
                        return(
                        <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td className='actionButtons'>
                                {isAdminOrmoderador() && <button onClick={()=> deleteProduct(product._id)}><i className="fa-solid fa-trash"></i></button>}
                                {isAdminOrmoderador() && <Link to={`/editproduct/`+product._id}><i className="fa-solid fa-pen-to-square"></i></Link>}
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

export default GetProd;
