async function addItem(userCart, item) {
  userCart.push(item);
}

async function sumTotal(userCart) {
  console.log("\nShopee Cart TOTAL is: \n");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🛒 TOTAL: R$ ${result}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, index) {}

async function displayCart(userCart) {
  console.log("\nShopee cart list: \n");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}\n`,
    );
  });
}

export { addItem, sumTotal, deleteItem, removeItem, displayCart };
