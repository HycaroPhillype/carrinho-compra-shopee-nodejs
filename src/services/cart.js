async function addItem(userCart, item) {
  userCart.push(item);
}

async function sumTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

async function deleteItem(userCart, name) {}

async function removeItem(userCart, index) {}

export { addItem, sumTotal, deleteItem, removeItem };
