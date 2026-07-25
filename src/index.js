import createItem from "./services/item.js";

const cars = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwhells ferrari", 20.99, 1);

const intem2 = await createItem("hotweels lamborghini", 39.99, 3);

console.log(intem2.subtotal());
