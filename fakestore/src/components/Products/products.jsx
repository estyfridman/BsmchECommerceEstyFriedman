import "./Products.css";
import { useState, useEffect } from "react";
import { getProducts } from '../../Services/store';
import StarRating from '../StarRating/StarRating';

export default function Products({prodType}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts(prodType);
            setProducts(data);
        }
        fetchProducts();
    }, [prodType]);

    return (
        <>
            <h2> Products</h2>
            <div className='container'>
                {products.length === 0 && <p>Loading...</p>}
                {products.map((product) => (
                    <div key={product.id} >
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />

                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <StarRating rating={product.rate} />
                    </div>
                ))}
            </div>
        </>
    )
}