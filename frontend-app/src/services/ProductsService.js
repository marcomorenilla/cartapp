
export const getProducts = async () =>{
    const response = await fetch("http://localhost:8081/api/all");
    const products = await response.json();
    return products;
}