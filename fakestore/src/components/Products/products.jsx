import "./Products.css";
import { useState, useEffect } from "react";
import { getProducts, getProducts2 } from '../../Services/store';
import StarRating from '../StarRating/StarRating';

export default function Products({prodType}){
    const [products, setProducts] = useState([]);
    const [lastFetchTime, setLastFetchTime] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const currentTime = Date.now();
            const cachedProducts = localStorage.getItem(`products_${prodType}`);
            if (cachedProducts && currentTime - lastFetchTime < 6) {
                setProducts(JSON.parse(cachedProducts));
            } else {
                if (prodType === 'books') {
                    getProducts2().then(data => {
                        setProducts(data);
                        localStorage.setItem(`products_${prodType}`, JSON.stringify(data));
                        setLastFetchTime(currentTime);
                    });
                } else {
                    const data = await getProducts(prodType);
                    setProducts(data);
                    localStorage.setItem(`products_${prodType}`, JSON.stringify(data));
                    setLastFetchTime(currentTime);
                }
            }
        };

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
                        <StarRating rating={product.rating.rate} />
                    </div>
                ))}
            </div>
        </div>
    )
}