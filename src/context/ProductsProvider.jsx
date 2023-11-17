import { useEffect, useState } from 'react';
import { ProductsContext } from './ProductsContext';

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
        const response = await fetch('http://localhost:8081/product/1');
        const data = await response.json();
        console.log("La respuesta de la API es", data);
        setProducts(data.Products);
        console.log("Lo que se estableció en setProduct", data.Products);

    };


    useEffect(() => {

        fetchProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
