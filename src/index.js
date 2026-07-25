import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwhells ferrari", 20.99, 5);

const item2 = await createItem("hotweels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishList, item2);

console.log("Shopee Cart TOTAL is: ");

await cartService.deleteItem(myCart, item2.name);
await cartService.deleteItem(myCart, item1.name);

await cartService.sumTotal(myCart);
