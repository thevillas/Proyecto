import React, { useState } from 'react'
import ProductList from './ProductList'
import Header from './Header';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProduct, setCountProduct] = useState(0);


    const App = () => {
        return (
            <div>
                <Header 
                allProducts={allProducts} 
                setAllProducts={setAllProducts} 
                total={total} 
                setTotal={setTotal}
                countProduct={countProduct}
                setCountProduct={setCountProduct}
                />

                <ProductList 
                allProducts={allProducts} 
                setAllProducts={setAllProducts} 
                total={total} 
                setTotal={setTotal}
                countProduct={countProduct}
                setCountProduct={setCountProduct} 
                />
            </div>
        )
    }
}

export default App
