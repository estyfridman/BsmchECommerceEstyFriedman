import "./Products.css";
import { useState, useEffect } from "react";
import { getProducts, getProducts2 } from '../../Services/store';
import StarRating from '../StarRating/StarRating';

export default function Products({prodType}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (prodType === 'books') {
                getProducts2(prodType).then(data => setProducts(data));

                //    .then(response => response.json());

            } else {
                const data = await getProducts(prodType);
                setProducts(data);
            }
        }
        fetchProducts();
    }, [prodType]);

    return (
        <div className='product-page'>
            <h2> Products</h2>
            <div className='container'>
                {products.length === 0 && <p>Loading...</p>}
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <h3>{(product.title.length > 20) ? `${product.description.substring(0, 20)}...` : product.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <p>{(product.description.length > 50) ? `${product.description.substring(0, 50)}...` : product.description}</p>
                        <p>${product.price}</p>
                        <StarRating rating={product.rate} />
                    </div>
                ))}
            </div>
        </div>
    )
}