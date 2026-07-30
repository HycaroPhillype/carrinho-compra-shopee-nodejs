async function addItem(userCart, item) {
  const indexFound = userCart.findIndex((product) => product.name == item.name);
  if (indexFound === -1) {
    userCart.push(item);
    return;
  }

  userCart[indexFound].quantity++;
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

async function removeItem(userCart, index) {
  const deleteIndex = index - 1;
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

async function removeItemFromTheList(userCart, item) {
  const indexFound = userCart.findIndex(
    (product) => product.name === item.name,
  );
  console.log(`index: ${indexFound}`);

  if (indexFound === -1) {
    console.log("Item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function displayCart(userCart) {
  console.log("\nMy cart list Shopee: \n");
  console.log("------------------------------------------");
  console.log("");

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}\n`,
    );
  });
  console.log("");
  console.log("------------------------------------------");
}

export {
  addItem,
  sumTotal,
  deleteItem,
  removeItem,
  displayCart,
  removeItemFromTheList,
};
