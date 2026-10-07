console.log("I love pizza");

const pizzaName = "Hawaii";
const pizzaPrice = 37;
const pizzaQuantity = 5;
const isTakeaway = true;
const totalPrice = pizzaPrice * pizzaQuantity;

console.log(
  `New pizza order (Takeaway choice: ${isTakeaway}): you ordered: ${pizzaQuantity} ${pizzaName}, the total price is: ${totalPrice} DKK`,
);
