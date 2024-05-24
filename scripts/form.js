const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = new Date(document.lastModified).toLocaleString();

const PRODUCTS = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
];

const productNameSelect = document.getElementById("productName");
if (productNameSelect) {
    PRODUCTS.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}

const reviewCounterElement = document.getElementById("reviewCounter");
if (reviewCounterElement) {
    let reviewCounter = localStorage.getItem("reviewCounter") || 0;
    reviewCounter++;
    reviewCounterElement.textContent = reviewCounter;
    localStorage.setItem("reviewCounter", reviewCounter);
}


