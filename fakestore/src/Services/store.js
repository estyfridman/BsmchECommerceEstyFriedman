
export function getProducts(prodType) {
    return fetch(`https://fakestoreapi.com/products/category/${prodType}`)
    .then(response => response.json());
}


export function getProducts2(prodType) {
    return fetch(`localhost:8080/${prodType}`)
    .then(response => response.json());
}