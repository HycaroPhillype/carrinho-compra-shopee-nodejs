import PromptSync from "prompt-sync";

async function displayProducts(products) {
  console.log("\nWelcome to the your Shopee Cart!\n");

  console.log("------------------------------------------");
  console.log("");
  console.log("               PRODUTOS SHOPEE");

  console.log("");
  console.log("------------------------------------------");

  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}) ${products[i].name}: R$ ${products[i].price} `);
  }
}

async function displayMenu() {
  const prompt = PromptSync();

  console.log("======================");
  console.log("SHOPE MENU");
  console.log("======================");

  const menu = ["Ver produtos", "Ver carrinho", "Sair"];

  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1} - ${menu[i]} `);
  }
}

export { displayMenu, displayProducts };
