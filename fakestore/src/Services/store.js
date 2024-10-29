
export function getProducts(prodType) {
    return fetch(`https://fakestoreapi.com/products/category/${prodType}`)
    .then(response => response.json());
}

export function getProducts2() {
    return fetch('http://localhost:8080/books')
    .then(response => response.json());
}