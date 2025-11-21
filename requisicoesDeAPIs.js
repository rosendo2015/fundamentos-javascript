/*
fetch("http://localhost:3000/products")
.then((response) => (response.json()))
.then((data) => console.log(data));
*/


async function fetchProducts(){
const response = await fetch("http://localhost:3000/products")
const data = await response.json();
console.log(data);
}
fetchProducts()


async function fetchProductById(id){
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json();
    console.log(data);
    }
fetchProductById(2);

const productName = document.getElementById("nome");
const priceProduct = document.getElementById("price");
const form = document.getElementsByTagName("form");

addEventListener("submit", async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Math.floor(Math.random() * 1000),
            nome: productName.value,
            price: priceProduct.value,
        }),
    })
    await fetchProducts()
    
});
