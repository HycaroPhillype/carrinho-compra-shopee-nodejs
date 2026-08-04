import createItem from "./item.js";

async function addItem(userCart, item) {
  if (!item) {
    console.log("\nProduto inválido.");
    return;
  }

  if (item.quantity === 0) {
    console.log("\nProduto indisponível.");
    return;
  }

  const indexFound = userCart.findIndex((product) => product.name == item.name);

  if (indexFound === -1) {
    const newItem = await createItem(item.name, item.price, 1);

    userCart.push(newItem);
  } else {
    userCart[indexFound].quantity++;
  }

  item.quantity--;

  return true;
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

async function removeItemFromTheList(userCart, productStock, item) {
  const cartIndex = userCart.findIndex((product) => product.name === item.name);

  if (cartIndex === -1) {
    console.log("intem não encontrado no carrinho");
    return;
  }

  const stockIndex = productStock.findIndex(
    (product) => product.name === item.name,
  );

  if (userCart[cartIndex].quantity > 1) {
    userCart[cartIndex].quantity -= 1;

    productStock[stockIndex].quantity += 1;
    return;
  }

  if (userCart[cartIndex].quantity === 1) {
    userCart.splice(cartIndex, 1);

    productStock[stockIndex].quantity += 1;

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
