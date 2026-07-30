import createItem from "../services/item.js";
import * as cartService from "../services/cart.js";
import PromptSync from "prompt-sync";
import { displayProducts, displayMenu } from "../services/display.js";

const myCart = [];
const myWhishList = [];

const prompt = PromptSync();

let running = true;

while (running) {
  await displayMenu();

  const option = Number(prompt("\nEscolha uma das opções: \n"));

  switch (option) {
    case 1:
      await displayProducts(products);
      const productOption = prompt("\nDigite o número do produto: ");
      const indice = Number(productOption) - 1;
      const productSelect = products[indice];

      await cartService.addItem(myCart, productSelect);

      console.log("\nProduto adicionado ao carrinho.\n");
      break;
    case 2:
      if (!myCart.length) {
        console.log("Seu carrinho está vazio.");
        break;
      }
      await cartService.displayCart(myCart);
      await cartService.sumTotal(myCart);
      break;
    case 3:
      running = false;
      break;

    default:
      console.log("Opção inválida, tente novamente.");

      break;
  }
}

const item1 = await createItem("hotwhells ferrari", 20.99, 5);
const item2 = await createItem("hotweels lamborghini", 39.99, 3);
const item3 = await createItem("camaro amarelo", 18.99, 6);
const item4 = await createItem("Ford Mustang Boss-429 ", 109.99, 3);

const products = [item1, item2, item3, item4];

displayProducts(myCart);

// await cartService.addItem(myCart, item2);
// await cartService.removeItemFromTheList(myCart, item2);
// await cartService.removeItemFromTheList(myCart, item2);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

export { myCart };
