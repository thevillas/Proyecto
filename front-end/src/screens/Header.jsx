import React, { useState } from 'react';
import axios from 'axios';
import styles from '../css/Styles.module.css';

const Header = (props) => {
    const { allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal } = props;

    const [active, setActive] = useState(false);

    const FuncionComprar = async (producto) => {
        const response = await axios.post(
            "http://localhost:4000/Mercado_Pago",
            producto
        );
        window.location.href = response.data;
    };

    const onDeleteProduct = product => {
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
        console.log(results);
    };

    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <div className={styles.container_icon} onClick={() => setActive(!active)}>
                <div className={styles.container_cart_icon}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className={styles.icon_cart}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                        />
                    </svg>
                    <div className={styles.count_products}>
                        <span id={styles.contador_productos}>{countProducts}</span>
                    </div>
                </div>

                <div className={`${styles.container_cart_products} ${active ? '' : 'hidden-cart'}`}>

                    {allProducts && allProducts.length ? (
                        <>
                            <div className={styles.row_product}>
                                {allProducts.map(product => (
                                    <div className={styles.cart_product} key={product.id}>
                                        <div className={styles.info_cart_product}>
                                            <span className={styles.cantidad_producto_carrito}>
                                                {product.quantity}
                                            </span>
                                            <p className={styles.titulo_producto_carrito}>
                                                {product.nameProduct}
                                            </p>
                                            <span className={styles.precio_producto_carrito}>
                                                ${product.price}
                                            </span>
                                        </div>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.5'
                                            stroke='currentColor'
                                            className={styles.icon_close}
                                            onClick={() => onDeleteProduct(product)}
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M6 18L18 6M6 6l12 12'
                                            />
                                        </svg>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.cart_total}>
                                <h3>Total:</h3>
                                <span className={styles.total_pagar}>${total}</span>
                            </div>

                            <button className={styles.btn_clear_all} onClick={onCleanCart}>
                                Vaciar Carrito
                            </button>
                            <button onClick={FuncionComprar}>Ir a pagar</button>
                        </>
                    ) : (
                        <p className={styles.cart_empty}>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
