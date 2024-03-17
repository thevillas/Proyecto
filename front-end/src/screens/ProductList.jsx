import React from 'react';
import { data } from './data.js';
import axios from 'axios'
import style from '../css/Styles.module.css'
import NavBar from '../componentes/NavBar.jsx'

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal, 
}) => {
	const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

    const FuncionComprar = async (producto) => {
		const response = await axios.post(
		  "http://localhost:4000/Mercado_Pago",
		  producto
		);
	
		window.location.href = response.data;
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
                        <button className={style.button} onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                        <button onClick={FuncionComprar}>Ir a pagar</button>
                    </div>
                </div>
            ))}
        </div>
        </>
	);
};

export default ProductList

