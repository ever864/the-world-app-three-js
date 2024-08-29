import { World } from "./World/World.js";

function main() {
  const container = document.querySelector("#scene-container");
  const button = document.querySelector("button");
  
  container.style.display = "block";

  const world = new World(container);
  world.render();

  button.addEventListener("click", renderScene);
}

function renderScene(){

  const container = document.querySelector("#scene-container");

  if (container.style.display === "block") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
}

main();
