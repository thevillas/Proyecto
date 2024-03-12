import React from 'react'
import { data } from './data'
import style from '../css/Styles.module.css'
import NavBar from '../componentes/NavBar'

const ProductList = ({
    allProducts, 
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {

        const onAddProduct = product => {
            if(allProducts.find(item => item.id === product.id)) {
                const products = allProducts.map(item => 
                    item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1} : item
                );
                setTotal(total + product.price * product.quantity);
                setCountProducts(countProducts + product.quantity);
                return setAllProducts([...products]);
            }
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            setAllProducts([...allProducts, product]);                 
        };


    return (
        <>
        <NavBar />
        <div className={style.contenedor_items}>
            {data.map(product => (
                <div className={style.item} key={product.nameProduct}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className={style.info_product}>
                        <h2>{product.nameProduct}</h2>
                        <p className={style.descrption}>{product.description}</p>
                        <p className={style.price}>${product.price}</p>
                        <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default ProductList
