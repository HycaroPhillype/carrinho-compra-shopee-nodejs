import createItem from "../services/item.js";
import * as cartService from "../services/cart.js";
import PromptSync from "prompt-sync";
import display from "../services/display.js";

const myCart = [];
const myWhishList = [];

const prompt = PromptSync();

let running = true;

while (running) {
  await display();

  const option = Number(prompt("\nEscolha uma das opções: "));

  switch (option) {
    case 1:
      console.log("Você escolheu ver produtos.");
      break;
    case 3:
      running = false;
      break;

    default:
      break;
  }
}

console.log("\nWelcome to the your Shopee Cart!");

console.log("------------------------------------------");
console.log("");
console.log("               PRODUTOS SHOPEE");

console.log("");
console.log("------------------------------------------");

const item1 = await createItem("hotwhells ferrari", 20.99, 5);
const item2 = await createItem("hotweels lamborghini", 39.99, 3);
const item3 = await createItem("camaro amarelo", 18.99, 6);
const item4 = await createItem("Ford Mustang Boss-429 ", 109.99, 3);

const products = [item1, item2, item3, item4];

for (let i = 0; i < products.length; i++) {
  console.log(`${i + 1}) ${products[i].name}: R$ ${products[i].price} `);
}

console.log("");

const option = prompt("\nDigite o número do produto: ");

const indice = Number(option) - 1;

const productSelect = products[indice];

await cartService.addItem(myCart, productSelect);
// await cartService.addItem(myCart, item2);
// await cartService.removeItemFromTheList(myCart, item2);
// await cartService.removeItemFromTheList(myCart, item2);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.sumTotal(myCart);

export { myCart };
