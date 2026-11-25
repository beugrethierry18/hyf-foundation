console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const productsList = document.querySelector("#products-list");
  if (!productsList) {
    return;
  }

  productsList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const li = document.createElement("li");

    li.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    productsList.appendChild(li);
  }
}

renderProducts(products);
