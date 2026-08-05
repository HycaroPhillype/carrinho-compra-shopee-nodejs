import createItem from "../services/item.js";
import * as cartService from "../services/cart.js";
import PromptSync from "prompt-sync";
import { displayProducts, displayMenu } from "../services/display.js";

const myCart = [];
const myWhishList = [];

const prompt = PromptSync();

const item1 = await createItem("hotwhells ferrari", 20.99, 5);
const item2 = await createItem("hotweels lamborghini", 39.99, 3);
const item3 = await createItem("camaro amarelo", 18.99, 6);
const item4 = await createItem("Ford Mustang Boss-429", 109.99, 3);

const productsStock = [item1, item2, item3, item4];

let running = true;

while (running) {
  await displayMenu();

  const option = Number(prompt("Escolha uma das opções: \n").trim());
  console.log(option);
  console.log(typeof option);

  const optionSelected = Number(option);
  switch (option) {
    case 1:
      await displayProducts(productsStock);
      const productOption = prompt("\nDigite o número do produto: ");
      const indice = Number(productOption) - 1;
      const productSelect = productsStock[indice];

      const added = await cartService.addItem(myCart, productSelect);
      // console.log(products);
      if (added) {
        console.log("Produto adicionado ao carrinho.");
      }
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
      if (!myCart.length) {
        console.log("Seu carrinho está vazio.");
        break;
      }
      await cartService.displayCart(myCart);
      const removeOption = Number(
        prompt("\nDigite o número do produto que deseja remover: "),
      );

      const removeIndex = removeOption - 1;
      const itemToRemove = myCart[removeIndex];

      if (!itemToRemove) {
        console.log("Produto inválido.");
        break;
      }

      await cartService.removeItemFromTheList(
        myCart,
        productsStock,
        itemToRemove,
      );
      console.log("Produto removido do carrinho.");
      break;
    case 4:
      running = false;
      break;

    default:
      console.log("Opção inválida, tente novamente.");

      break;
  }
}

displayProducts(myCart);

await cartService.displayCart(myCart);

export { myCart };
