import PromptSync from "prompt-sync";

async function display() {
  const prompt = PromptSync();

  console.log("======================");
  console.log("SHOPE MENU");
  console.log("======================");

  const menu = ["Ver produtos", "Ver carrinho", "Sair"];

  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1} - ${menu[i]} `);
  }
}

export default display;
