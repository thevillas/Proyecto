import { useState } from 'react'
import ProductList  from './ProductList.jsx'
import Header  from './Header.jsx';

function App() {


    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
        <>
            <Header
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProduct={countProducts}
                setCountProduct={setCountProducts}
            />

            <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProduct={countProducts}
                setCountProduct={setCountProducts}
            />
        </>
    )
}


export default App
